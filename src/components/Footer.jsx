import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="py-8 text-center bg-black/30 border-t border-purple-400/20 mt-20">
      <h3 className="text-purple-300 text-xl font-semibold mb-4">Let's Connect</h3>

      <div className="flex justify-center gap-6 text-gray-300 mb-4">

        <a
          href="https://mail.google.com/mail/?view=cm&to=keshavskn123@gmail.com"
          target="_blank"
          className="hover:text-purple-400 transition"
        >
          <FaEnvelope size={28} />
        </a>

        <a
          href="https://github.com/keshavskn123"
          target="_blank"
          className="hover:text-purple-400 transition"
        >
          <FaGithub size={28} />
        </a>

        <a
          href="https://www.linkedin.com/in/keshav-1375a4254"
          target="_blank"
          className="hover:text-purple-400 transition"
        >
          <FaLinkedin size={28} />
        </a>

        <a
          href="https://leetcode.com/u/KESHAV_2004/"
          target="_blank"
          className="hover:text-purple-400 transition"
        >
          <SiLeetcode size={28} />
        </a>

        <a
          href="https://www.geeksforgeeks.org/user/keshavskn12345/"
          target="_blank"
          className="hover:text-purple-400 transition"
        >
          <SiGeeksforgeeks size={28} className="align-middle" />
        </a>

      </div>

      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Keshav. All Rights Reserved.
      </p>
    </footer>
  );
}
