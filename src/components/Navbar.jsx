import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let scrollY = window.pageYOffset;

      sections.forEach((sec) => {
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (scrollY >= offset && scrollY < offset + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/5 border-b border-purple-400/20 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo & Image */}
        <div className="flex items-center gap-3">
          <img
            src="/me.jpeg"
            alt="Keshav"
            className="w-9 h-9 rounded-full border border-purple-400 shadow-md object-cover object-top"
          />
          <h1 className="text-2xl font-bold text-purple-300">Keshav</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300 font-medium">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition ${
                active === item.id ? "text-purple-300 font-semibold" : "hover:text-purple-300"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-purple-300 text-3xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-5 py-6 bg-[#0f0f14]/90 border-t border-purple-400/20">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={`text-gray-300 transition ${
                active === item.id ? "text-purple-300 font-semibold" : "hover:text-purple-300"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
