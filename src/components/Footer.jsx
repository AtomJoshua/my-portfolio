export default function Footer() {
  return (
    <footer className="bg-black/60 backdrop-blur-md border-t border-purple-500/20 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Atom Enoch Joshua. All rights reserved.
      </div>
    </footer>
  );
}