export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-md border-b border-purple-400/20 shadow-[0_0_30px_rgba(140,100,255,0.25)]">
      <div className="max-w-6xl mx-auto flex justify-center gap-10 py-4 text-lg">
        <a href="#hero" className="hover:text-purple-300 transition">Home</a>
        <a href="#skills" className="hover:text-purple-300 transition">Skills</a>
        <a href="#projects" className="hover:text-purple-300 transition">Projects</a>
        <a href="#contact" className="hover:text-purple-300 transition">Contact</a>
      </div>
    </nav>
  );
}
