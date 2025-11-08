import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const icons = [
    {
      icon: <MdEmail size={30} />,
      link: "mailto:keshavskn123@gmail.com",
      label: "Email"
    },
    {
      icon: <FaLinkedin size={30} />,
      link: "https://www.linkedin.com/in/keshav-1375a4254",
      label: "LinkedIn"
    },
    {
      icon: <FaGithub size={30} />,
      link: "https://github.com/keshavskn123",
      label: "GitHub"
    },
    {
      icon: <SiLeetcode size={30} />,
      link: "https://leetcode.com/keshavskn123/",
      label: "LeetCode"
    }
  ];

  return (
    <section id="contact" className="py-32 px-6 text-center relative">
      
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold"
      >
        Want to Connect?
      </motion.h2>

      <p className="text-gray-400 mt-2 mb-10">
        Feel free to reach out ✨
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {icons.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            title={item.label}
            whileHover={{
              scale: 1.15,
              boxShadow: "0 0 25px rgba(165,105,255,0.8)",
            }}
            className="w-16 h-16 flex items-center justify-center text-white rounded-2xl 
                       bg-purple-600 hover:bg-purple-500 transition-all duration-300"
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
