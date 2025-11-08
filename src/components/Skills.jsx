import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React",
    "Git", "Tailwind CSS", "DSA", "C++",
    "Node.js", "Express.js", "MongoDB"
  ];

  return (
    <section id="skills" className="py-28 px-6 text-center relative">
      {/* Glowing background accent */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-700 rounded-full blur-[150px] opacity-20"></div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-white drop-shadow-lg"
      >
        Skills
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-12 flex flex-wrap justify-center gap-5 max-w-3xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.12, boxShadow: "0 0 20px rgba(165,105,255,0.65)" }}
            className="px-5 py-2 rounded-full border border-gray-500 hover:border-purple-400 text-gray-200 hover:text-purple-300 transition-all duration-300 bg-white/5 backdrop-blur-sm"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
