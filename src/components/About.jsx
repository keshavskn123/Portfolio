import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 text-center relative">
      
      {/* Glow Accent */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-purple-700 rounded-full blur-[160px] opacity-20"></div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-8"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed"
      >
        I am a dedicated and curious developer who enjoys building clean, user-focused interfaces and solving logical problems. 
        With hands-on experience in frontend development and a strong foundation in Data Structures & Algorithms (C++), 
        I aim to create solutions that are visually appealing, intuitive, and efficient. 
        Constant learning, consistency, and improvement are values I follow closely.
      </motion.p>

    </section>
  );
}
