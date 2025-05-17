// src/components/Projects.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { SiJavascript, SiTailwindcss, SiReact, SiHtml5, SiCss3, SiNodedotjs, SiMysql, SiPython, SiFastapi, SiPandas, SiGooglemarketingplatform, SiOpenai, SiJson, SiGreensock } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { FaLink, FaGithub, FaWordpress } from "react-icons/fa";

const projects = [
  {
    title: "Brian Mutuku | Portfolio Website",
    description:
      "This is my portfolio website. I built it to showcase my projects and skills. It is a static site built with React, Tailwind CSS, and GSAP. I used the following technologies to build it:",
    liveLink: "https://brianmutuku.dev/",
    githubLink: "https://github.com/Patbrian/Portfolio",
    techStack: [
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "GSAP", icon: SiGreensock }, 
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    title: "Côte Des Voix",
    description:
      "Côte Des Voix is a blog and website project featuring a CMS for easy content updates, combining creative design with dynamic functionality.",
    liveLink: "https://cotedesvoix.com/",
    githubLink: "https://github.com/Patbrian/Cote-Des-Voix",
    techStack: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "Wordpress", icon: FaWordpress }, 
      { name: "JavaScript", icon: SiJavascript },
      { name: "Node.Js", icon: SiNodedotjs },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Ticket Management System",
    description:
      "A Python tool for generating and managing standardized security tickets, featuring metadata consistency and secure handling practices.",
    liveLink: "",
    githubLink: "https://github.com/Patbrian",
    techStack: [
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "MySQL", icon: SiMysql }, 
    ],
  },
  {
    title: "Stock Market Analyzer",
    description:
      "A Python-based tool that analyzes real-time stock market data, helping users identify trends and make informed decisions.",
    liveLink: "",
    githubLink: "https://github.com/Patbrian",
    techStack: [
      { name: "Python", icon: SiPython },
      { name: "Pandas", icon: SiPandas },
      { name: "Matplotlib", icon: SiGooglemarketingplatform }, 
    ],
  },
  {
    title: "Finance Automation Toolkit",
    description:
      "A Python-based system that automates personal finance tasks like expense tracking, bank statement parsing, and bill reminders—designed to simplify budgeting and improve financial awareness.",
    liveLink: "",
    githubLink: "https://github.com/Patbrian",
    techStack: [
      { name: "Python", icon: SiPython },
      { name: "Pandas", icon: SiPandas },
      { name: "OpenPyXL", icon: SiOpenai },
      { name: "Json", icon: SiJson },
    ],
  },
];

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="p-8">
      <motion.h2
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-4xl font-bold mb-6"
      >
        Projects
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="space-y-8"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={child} className="space-y-4">
            {/* Project Title */}
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {project.title}
            </h3>
            {/* Description */}
            <p className="text-gray-300">{project.description}</p>
            {/* Links */}
            <div className="flex space-x-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <FaLink className="text-lg" />
                  <span>{project.liveLink.replace('https://', '').replace('www.', '')}</span>
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <FaGithub className="text-lg" />
                  <span>{project.githubLink.replace('https://', '').replace('www.', '')}</span>
                </a>
              )}
            </div>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="flex items-center space-x-2 bg-[#2a2a4a] px-3 py-1 rounded-full"
                >
                  <tech.icon className="text-lg" />
                  <span className="text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
