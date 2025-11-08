import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.send(
      "service_3o1zcgd",  // Service ID
      "template_vf9iwec", // Template ID
      formData,
      "iLXBky32RRLr6hddP" // Public Key
    )
    .then(() => {
      setStatus("Message sent ✅");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch(() => setStatus("Something went wrong ❌"));
  }

  const icons = [
    { icon: <MdEmail size={30} />, link: "mailto:keshavskn123@gmail.com" },
    { icon: <FaLinkedin size={30} />, link: "https://www.linkedin.com/in/keshav-1375a4254" },
    { icon: <FaGithub size={30} />, link: "https://github.com/keshavskn123" },
    { icon: <SiLeetcode size={30} />, link: "https://leetcode.com/keshavskn123/" }
  ];

  return (
    <section id="contact" className="py-28 px-6 text-center relative">

      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }} className="text-4xl font-bold mb-3">
        Contact Me
      </motion.h2>

      <p className="text-gray-400 mb-10">Let’s talk — I usually reply within a day.</p>

      {/* Contact Form */}
      <form onSubmit={sendEmail} className="max-w-lg mx-auto flex flex-col gap-4">
        <input type="text" name="name" required
          placeholder="Your Name"
          value={formData.name} onChange={handleChange}
          className="px-4 py-3 rounded-lg bg-white/5 border border-purple-400/40 text-white outline-none"
        />
        <input type="email" name="email" required
          placeholder="Your Email"
          value={formData.email} onChange={handleChange}
          className="px-4 py-3 rounded-lg bg-white/5 border border-purple-400/40 text-white outline-none"
        />
        <textarea name="message" rows="4" required
          placeholder="Your Message"
          value={formData.message} onChange={handleChange}
          className="px-4 py-3 rounded-lg bg-white/5 border border-purple-400/40 text-white outline-none"
        />
        <button type="submit"
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold hover:shadow-[0_0_25px_rgba(150,100,255,0.5)] transition-all">
          Send Message ✨
        </button>
      </form>

      {status && <p className="text-green-400 mt-3">{status}</p>}

      {/* Socials */}
      <div className="flex justify-center gap-6 mt-12">
        {icons.map((item, index) => (
          <a key={index} href={item.link} target="_blank"
            className="w-14 h-14 flex items-center justify-center bg-purple-600 text-white rounded-2xl hover:scale-110 transition">
            {item.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
