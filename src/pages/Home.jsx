import { motion } from "framer-motion";
import SectionPreview from "../components/SectionPreview";
import ProfilePic from "../assets/profile2.jpg"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 space-y-16">
      {/* Hero with Animated Image */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-8"
      >
        {/* Text */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-purple-400">
            Hi, I’m Atom 👋
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            A passionate web developer crafting modern, responsive websites.
          </p>
        </div>

        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={ProfilePic}
            alt="My Picture"
            className="rounded-2xl shadow-lg h-auto w-64"
          />
        </motion.div>
      </motion.section>

      {/* Section Previews */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <SectionPreview
          title="About Me"
          description="Learn more about my background, skills, and what drives my passion for development."
          link="/about"
          bgClass="bg-gradient-to-r from-purple-900 to-purple-600"
        />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <SectionPreview
          title="Skills"
          description="Explore the tools and technologies I work with to bring projects to life."
          link="/skills"
          bgClass="bg-gradient-to-r from-blue-900 to-blue-700"
        />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <SectionPreview
          title="Projects"
          description="A showcase of my favorite projects."
          link="/projects"
          bgClass="bg-gradient-to-r from-green-800 to-green-500"
        />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <SectionPreview
          title="Contact"
          description="Want to collaborate or have a project in mind? Let's talk!"
          link="/contact"
          bgClass="bg-gradient-to-r from-pink-900 to-pink-800"
        />
      </motion.section>
    </div>
  );
}
