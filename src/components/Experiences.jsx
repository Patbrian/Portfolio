// src/components/Experiences.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const experiences = [
    {
        year: "2024 - Present",
        company: "Freelance (Fiverr & Upwork)",
        role: "Web Developer",
        description:
          "Providing custom web development services, including website design, front-end development, and API integration for global clients.",
      },
      {
        year: "2023 - 2024",
        company: "Telus International",
        role: "Data Entry and Analyst",
        description:
          "Performed data entry, validation, and analysis tasks, ensuring high data quality and supporting project operations for international clients.",
      },
      {
        year: "2023 - 2024",
        company: "Collège Pablo Picasso & Lycée Professionnel Vauban, France",
        role: "English Language Assistant",
        description:
          "Supported English language instruction at both middle and high school levels, facilitated cultural exchange, and enhanced student engagement through interactive activities.",
      },
      {
        year: "2022 - 2023",
        company: "Clan Studio, Kenya",
        role: "Designer (Part-Time)",
        description:
          "Created visual content and web assets for branding and digital campaigns, contributing to creative direction and layout design.",
      },      
];

const Experiences = () => {
  return (
    <section id="experiences" className="p-8">
      <motion.h2
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-4xl font-bold mb-6"
      >
        Experiences
      </motion.h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#16213e] p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold">{exp.year}</h3>
            <h4 className="text-lg">{exp.company} - {exp.role}</h4>
            <p className="mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;