import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "My Portfolio Website",
      description: "A modern portfolio showcasing my skills, projects, and professional journey.",
      github: "https://github.com/keshavskn123",
      live: "https://portfolio-three-flame-24.vercel.app/",
      stack: ["React", "Tailwind CSS", "Framer Motion"],
      status: "Completed"
    },
    {
      title: "Expense Tracker",
      description: "Tracks expenses with login system, charts, and cloud stored data.",
      github: "https://github.com/keshavskn123/mern-expense-tracker",
      live: "#",
      stack: ["React", "Node.js", "Express.js", "MongoDB"],
      status: "Completed"
    },
    {
      title: "Wanderlust",
      description: "Travel places listing web app with authentication and dynamic UI.",
      github: "https://github.com/keshavskn123/Wanderlust",
      live: "#",
      stack: ["Node.js", "EJS", "Express.js", "MongoDB"],
      status: "Completed"
    },
    {
      title: "FaceTrack",
      description: "Real-time face detection and tracking using OpenCV.",
      github: "https://github.com/keshavskn123/FaceTrack",
      live: "#",
      stack: ["Python", "OpenCV"],
      status: "In Progress"
    }
  ];

  return (
    <section id="projects" className="py-28 px-6 text-center relative">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-14"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Tilt key={index} glareEnable scale={1.05}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              onClick={() => setActiveProject(project)}
              className="p-6 rounded-2xl cursor-pointer border border-purple-500/40 bg-white/5 backdrop-blur-md 
                         hover:border-purple-400 hover:shadow-[0_0_25px_rgba(160,100,255,0.45)] transition-all duration-300"
            >
              {/* Status Badge */}
              <span className={`text-xs px-3 py-1 rounded-full mb-3 inline-block 
                ${project.status === "Completed" ? "bg-green-600/40 border-green-500/40 text-green-300" : "bg-yellow-600/40 border-yellow-500/40 text-yellow-300"}`}>
                {project.status}
              </span>

              <h3 className="text-2xl font-semibold mb-3 text-purple-300">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {project.stack.map((tech, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-purple-400/30 text-purple-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* Popup Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
