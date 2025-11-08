import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 text-center bg-black/30 border-t border-purple-400/20 mt-20">
      <h3 className="text-purple-300 text-xl font-semibold mb-4">Let's Connect</h3>

      <div className="flex justify-center gap-6 text-gray-300 text-2xl mb-4">
        <a href="mailto:keshav@example.com" className="hover:text-purple-400 transition"><FaEnvelope /></a>
        <a href="https://github.com/keshavskn123" target="_blank" className="hover:text-purple-400 transition"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/keshav-1375a4254" target="_blank" className="hover:text-purple-400 transition"><FaLinkedin /></a>
        <a href="https://leetcode.com" target="_blank" className="hover:text-purple-400 transition"><FaCode /></a>
      </div>

      <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Keshav. All Rights Reserved.</p>
    </footer>
  );
}
