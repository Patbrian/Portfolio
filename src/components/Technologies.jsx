// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { SiNextdotjs, SiJavascript, SiTailwindcss, SiPython, SiPandas, SiGit, SiNodedotjs, SiMysql, SiReact, SiExpress, SiHtml5, SiCss3 } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { SiGreensock } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";

const technologies = [
  { name: "Next.js", icon: SiNextdotjs, description: "A React framework" },
  { name: "React", icon: SiReact, description: "A JavaScript UI library" },
  { name: "Tailwind CSS", icon: SiTailwindcss, description: "A CSS framework" },
  { name: "JavaScript", icon: SiJavascript, description: "A programming language" },
  { name: "Git", icon: SiGit, description: "A version control system" },
  { name: "WordPress", icon: FaWordpress, description: "A CMS for websites" },
  { name: "Express.js", icon: SiExpress, description: "A Node.js framework" },
  { name: "Python", icon: SiPython, description: "A programming language" },
  { name: "Pandas", icon: SiPandas, description: "A data analysis library" },
  { name: "GSAP", icon: SiGreensock, description: "An animation library" },
  { name: "Three.js", icon: TbBrandThreejs, description: "A 3D graphics library" },
  { name: "Node.js", icon: SiNodedotjs, description: "A JavaScript runtime" },
  { name: "MySQL", icon: SiMysql, description: "A relational database" },
  { name: "HTML", icon: SiHtml5, description: "A markup language" },
  { name: "CSS", icon: SiCss3, description: "A style sheet language" },
];

const Technologies = () => {
  return (
    <section id="technologies" className="p-8">
      <motion.h2
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-4xl font-bold mb-6"
      >
        Technologies
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            {tech.icon ? (
              <tech.icon className="text-4xl mb-2" />
            ) : (
              <span className="text-4xl mb-2">?</span> // Fallback if icon is missing
            )}
            <h3 className="text-xl font-semibold">{tech.name}</h3>
            <p className="text-gray-400">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;