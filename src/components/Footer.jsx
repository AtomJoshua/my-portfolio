export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-purple-700/30 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} My Portfolio. All rights reserved. Built by {"me"}
      </div>
    </footer>
  );
}
