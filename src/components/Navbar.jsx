import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-white hover:text-purple-400 transition"
        >
          Atom<span className="text-purple-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition hover:text-purple-400 ${
                  isActive ? "text-purple-400 font-semibold" : "text-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden relative w-7 h-5 focus:outline-none"
        >
          <span
            className={`block absolute h-0.5 w-7 bg-white transform transition duration-300 ease-in-out ${
              menuOpen ? "rotate-45 top-2.5" : "top-0"
            }`}
          />
          <span
            className={`block absolute h-0.5 w-7 bg-white transform transition duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : "top-2"
            }`}
          />
          <span
            className={`block absolute h-0.5 w-7 bg-white transform transition duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 top-2.5" : "top-4"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-black/95 backdrop-blur-lg border-b border-purple-900/40 transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-64 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-base transition hover:text-purple-400 ${
                  isActive ? "text-purple-400 font-semibold" : "text-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}