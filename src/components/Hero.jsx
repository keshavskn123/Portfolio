import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const titles = [
    "Hi, I'm Keshav 👋",
    "Frontend Developer",
    "Problem Solver",
    "Web Enthusiast"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500); // changes every 2.5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-8 relative py-28"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-32 w-[28rem] h-[28rem] bg-purple-700 rounded-full blur-[160px] opacity-30"></div>
      <div className="absolute top-60 -right-32 w-[28rem] h-[28rem] bg-blue-600 rounded-full blur-[160px] opacity-30"></div>

      {/* Rotating Sliding Text */}
      <div className="h-[80px] flex items-center overflow-hidden">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-xl leading-tight"
        >
          {titles[index]}
        </motion.h1>
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="mt-6 text-xl max-w-3xl text-gray-300 leading-relaxed font-light"
      >
        Crafting clean, modern and user-focused web experiences while improving my React and Frontend skills.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1 }}
        className="flex gap-4 mt-10"
      >
        <a
          href="https://www.linkedin.com/in/keshav-1375a4254"
          target="_blank"
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-lg hover:shadow-[0_0_40px_rgba(148,103,255,0.7)] hover:-translate-y-1 transition-all duration-300"
        >
          Connect With Me
        </a>

        <a
          href="/resume.pdf"
          download
          className="px-8 py-3 border border-purple-500 text-purple-300 rounded-xl font-semibold text-lg hover:bg-purple-600 hover:text-white hover:shadow-[0_0_20px_rgba(148,103,255,0.7)] hover:-translate-y-1 transition-all duration-300"
        >
          Download Resume
        </a>
      </motion.div>

    </section>
  );
}
