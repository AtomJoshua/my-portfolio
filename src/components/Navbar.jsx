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
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-purple-700/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition"
        >
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-purple-300 transition ${
                  isActive ? "text-purple-400" : "text-gray-200"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Burger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-6 focus:outline-none"
        >
          <span
            className={`block absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${
              menuOpen ? "rotate-45 top-3" : "rotate-0 top-0"
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : "opacity-100 top-3"
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 top-3" : "rotate-0 top-6"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown with Animation */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-md border-t border-purple-700/30 transform transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 max-h-60"
            : "opacity-0 -translate-y-4 max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `hover:text-purple-300 transition ${
                  isActive ? "text-purple-400" : "text-gray-200"
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
