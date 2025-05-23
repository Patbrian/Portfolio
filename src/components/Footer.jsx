// src/components/Experiences.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { Icon: FaGithub, url: "https://github.com/Patbrian" },
    { Icon: FaLinkedin, url: "https://www.linkedin.com/in/brian-mutiso-4b87b831b" },
    { Icon: FaTwitter, url: "https://x.com/BrianPa35242492" },
    { Icon: FaEnvelope, url: "mailto:mutuku.brian.fr@gmail.com" },
  ];

  return (
    <footer className="p-8 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        {/* eslint-disable-next-line no-unused-vars */}
        {socialLinks.map(({ Icon, url }, index) => (
          <motion.a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="text-2xl" />
          </motion.a>
        ))}
      </div>
      <p>Brian Mutuku - Software Developer. All rights reserved.</p>
    </footer>
  );
};

export default Footer;