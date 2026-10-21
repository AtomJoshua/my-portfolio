import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionPreview from "../components/SectionPreview";
import ProfilePic from "../assets/profile2.jpg";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 space-y-16">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-10"
      >
        <div className="text-center md:text-left">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">
            Full-Stack Developer & Systems Specialist
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-2 leading-tight">
            Hi, I’m <span className="text-purple-400">Atom Joshua</span> 👋
          </h1>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            I build responsive web platforms and manage resilient system infrastructure. 
            From Next.js and TypeScript backends to Linux server environments and enterprise network switching.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-medium transition shadow-lg shadow-purple-600/30"
            >
              Explore Projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium border border-white/10 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={ProfilePic}
            alt="Atom Enoch Joshua"
            className="rounded-2xl shadow-2xl h-auto w-72 object-cover border border-purple-500/20"
          />
        </motion.div>
      </motion.section>

      {/* Previews */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
        <SectionPreview
          title="About Me"
          description="My background, graduate education in Computer Technology, and how I bridge systems and software."
          link="/about"
          bgClass="bg-gradient-to-br from-purple-900/60 to-purple-800/20 border border-purple-500/20"
        />
        <SectionPreview
          title="Technical Skills"
          description="Core stack across Web Development, Linux Systems, Network Infrastructure, and Databases."
          link="/skills"
          bgClass="bg-gradient-to-br from-blue-950/60 to-indigo-900/20 border border-blue-500/20"
        />
        <SectionPreview
          title="Featured Projects"
          description="Explore production platforms, automated gateways, and server infrastructure deployments."
          link="/projects"
          bgClass="bg-gradient-to-br from-emerald-950/60 to-teal-900/20 border border-emerald-500/20"
        />
        <SectionPreview
          title="Contact & Collab"
          description="Reach out directly for engineering roles, technical consulting, or development contracts."
          link="/contact"
          bgClass="bg-gradient-to-br from-fuchsia-950/60 to-pink-900/20 border border-fuchsia-500/20"
        />
      </div>
    </div>
  );
}