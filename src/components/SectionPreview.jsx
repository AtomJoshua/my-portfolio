import { Link } from "react-router-dom";

export default function SectionPreview({ title, description, link, bgClass, children }) {
  return (
    <Link
      to={link}
      className={`block p-8 rounded-2xl shadow-lg ${bgClass} transition-transform hover:scale-105`}
    >
      <h2 className="text-3xl font-bold mb-3">{title}</h2>
      <p className="mb-4 text-gray-300">{description}</p>
      {children}
      <span className="mt-4 inline-block px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-full transition">
        View More →
      </span>
    </Link>
  );
}
