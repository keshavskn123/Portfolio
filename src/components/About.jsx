import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "C++", "Data Structures", "Algorithms", 
    "HTML", "CSS", "JavaScript", "React", "Tailwind CSS",
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      
      {/* Background Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[24rem] h-[24rem] bg-purple-700 rounded-full blur-[160px] opacity-25"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        
        {/* Profile Image */}
        <motion.img
          src="/me.jpg"
          alt="Keshav"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-48 h-48 rounded-2xl object-cover border border-purple-400 shadow-[0_0_30px_rgba(160,100,255,0.4)]"
        />

        {/* Text Content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-4"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-gray-300 text-lg leading-relaxed max-w-xl"
          >
            I'm <span className="text-purple-300 font-semibold">Keshav</span>, a passionate 
            <span className="text-purple-300 font-semibold"> Frontend Developer</span> and 
            <span className="text-purple-300 font-semibold"> Problem Solver</span> with a strong foundation in 
            Data Structures & Algorithms using C++. As a fresher, I enjoy learning modern tools and building user-centered, 
            clean and efficient web experiences. I believe in continuous improvement, consistency and real-world problem solving.
          </motion.p>

          {/* Resume Button */}
          <motion.a
            href="/resume.pdf"
            download="Keshav-Resume.pdf"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold 
                       hover:shadow-[0_0_40px_rgba(148,103,255,0.7)] hover:-translate-y-1 transition-all duration-300"
          >
            Download Resume
          </motion.a>
        </div>
      </div>

      {/* Skills Section */}
      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-semibold text-center mt-20 mb-8"
      >
        Technical Expertise
      </motion.h3>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.12, boxShadow: "0 0 20px rgba(165,105,255,0.55)" }}
            className="px-5 py-2 rounded-full border border-purple-400/40 text-gray-200 backdrop-blur-sm bg-white/5 
                       hover:text-purple-300 hover:border-purple-300 transition-all duration-300"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
