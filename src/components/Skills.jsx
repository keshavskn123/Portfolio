import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaReact, FaGitAlt,
  FaNodeJs, FaPython
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiExpress, SiMongodb,
  SiCplusplus, SiMysql
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "C++", icon: <SiCplusplus size={38} /> },
    { name: "HTML", icon: <FaHtml5 size={38} /> },
    { name: "CSS", icon: <FaCss3Alt size={38} /> },
    { name: "JavaScript", icon: <SiJavascript size={38} /> },
    { name: "React", icon: <FaReact size={38} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={38} /> },
    { name: "Git", icon: <FaGitAlt size={38} /> },
    { name: "Node.js", icon: <FaNodeJs size={38} /> },
    { name: "Express.js", icon: <SiExpress size={38} /> },
    { name: "MongoDB", icon: <SiMongodb size={38} /> },
    { name: "DBMS", icon: <SiMysql size={38} /> },
    { name: "Operating Systems", icon: <FaPython size={38} /> },
  ];

  return (
    <section id="skills" className="py-28 px-6 text-center relative">
      <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-12">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.12 }}
            className="flex flex-col items-center gap-2 bg-white/5 border border-purple-400/40 rounded-xl p-5 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(165,105,255,0.45)] transition-all"
          >
            <span className="text-purple-300">{skill.icon}</span>
            <p className="text-gray-300 text-sm">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
