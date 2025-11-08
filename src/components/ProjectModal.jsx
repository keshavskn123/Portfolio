import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 px-4">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#111] border border-purple-400/30 rounded-2xl p-6 max-w-lg text-center shadow-[0_0_35px_rgba(150,100,255,0.4)]"
      >
        <h2 className="text-3xl font-semibold text-purple-300 mb-4">{project.title}</h2>
        <p className="text-gray-300 mb-6">{project.description}</p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-white/10 border border-purple-400/30 text-purple-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <a href={project.github} target="_blank" className="px-5 py-2 bg-purple-600 rounded-lg text-white flex items-center gap-2">
            <FaGithub /> GitHub
          </a>

          {project.live !== "#" && (
            <a href={project.live} target="_blank" className="px-5 py-2 bg-purple-600 rounded-lg text-white flex items-center gap-2">
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>

        <button onClick={onClose} className="mt-6 text-gray-400 hover:text-white">
          Close
        </button>
      </motion.div>
    </div>
  );
}
