// src/components/About.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="p-6">
      <motion.h2
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-2xl font-bold mb-4"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl text-sm leading-relaxed text-gray-300"
      >
        Hi! I'm Brian, a full-stack developer with a background in computer science. I build web apps using React, Node.js, and MySQL, and I've created Python tools like a Stock Market Analyzer and a Ticket Management System. I'm also exploring cybersecurity to level up my skills in secure development.
        When I'm not coding, you'll find me on the football pitch,Teaching, or hanging out with friends. Ready to launch your next website or API? Let's build something incredible together!
      </motion.p>
    </section>
  );
};

export default About;