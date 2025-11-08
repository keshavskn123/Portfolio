import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "My Portfolio Website",
      description:
        "A modern personal portfolio built using React and Tailwind CSS with smooth animations and glowing UI theme.",
      github: "https://github.com/keshavskn123",
      live: "#", // when hosted replace with Vercel link
    },
    {
      title: "Expense Tracker (MERN)",
      description:
        "A secure full-stack expense tracking app with user authentication, charts and complete CRUD functionality.",
      github: "https://github.com/keshavskn123/mern-expense-tracker",
      live: "#",
    },
    {
      title: "Wanderlust",
      description:
        "A travel listing web app with backend support, dynamic content, and responsive UI.",
      github: "https://github.com/keshavskn123/Wanderlust",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-28 px-6 text-center relative">
      {/* Glow Background Blob */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-purple-700 rounded-full blur-[180px] opacity-20"></div>

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
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="p-6 rounded-2xl border border-purple-500/40 bg-white/5 backdrop-blur-md hover:border-purple-400 hover:shadow-[0_0_25px_rgba(160,100,255,0.45)] hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 text-purple-300 drop-shadow-sm">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-5 leading-relaxed">{project.description}</p>

            <div className="flex justify-center gap-4">
              <a
                href={project.github}
                target="_blank"
                className="px-5 py-2 border border-purple-500 rounded-xl text-purple-300 hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                GitHub
              </a>

              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  className="px-5 py-2 bg-purple-600 rounded-xl text-white hover:shadow-[0_0_20px_rgba(150,100,255,0.6)] transition-all duration-300"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
