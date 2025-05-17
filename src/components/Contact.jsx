// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const successMessage = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }  // Added missing closing brace

    // Clear errors if validation passes
    setErrors({});

    // Construct the mailto link
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:mutuku.brian.fr@gmail.com?subject=${subject}&body=${body}`;

    // Open the user's email client
    window.location.href = mailtoLink;

    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000); // Hide after 3 seconds

    // Reset form (optional, you can remove this if you want to keep the data)
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for the field when the user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  return (
    <section id="contact" className="p-8">
      <motion.h2
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-4xl font-bold mb-6"
      >
        Contact
      </motion.h2>
      <motion.form
        variants={container}
        initial="hidden"
        whileInView="visible"
        onSubmit={handleSubmit}
        className="space-y-6 max-w-lg"
      >
        <motion.div variants={child} className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            onChange={handleChange}
            className={`bg-transparent border rounded p-2 text-white focus:outline-none ${
              errors.name ? "border-red-500" : "border-gray-600 focus:border-[#e94560]"
            }`}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </motion.div>
        <motion.div variants={child} className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Your Email"
            onChange={handleChange}
            className={`bg-transparent border rounded p-2 text-white focus:outline-none ${
              errors.email ? "border-red-500" : "border-gray-600 focus:border-[#e94560]"
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </motion.div>
        <motion.div variants={child} className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="I would like to request a quote for blog integration, CMS, animations..."
            onChange={handleChange}
            className={`bg-transparent border rounded p-2 text-white h-32 resize-none focus:outline-none ${
              errors.message ? "border-red-500" : "border-gray-600 focus:border-[#e94560]"
            }`}
          />
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message}</span>
          )}
        </motion.div>
        <motion.button
          variants={child}
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
        >
          <span>SEND MESSAGE</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </motion.form>
      {/* Success Message */}
      {showSuccess && (
        <motion.div
          variants={successMessage}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="mt-4 p-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg max-w-lg"
        >
          Message sent! Your email client should have opened. Check your inbox for a copy.
        </motion.div>
      )}
    </section>
  );
};

export default Contact;