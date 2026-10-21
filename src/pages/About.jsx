import { Link } from "react-router-dom";
import Picture from "../assets/profile.jpg";

export default function About() {
  return (
    <div className="pt-28 px-4 max-w-5xl mx-auto text-gray-300">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-400">
          Merging modern full-stack development with hands-on systems administration and network reliability.
        </p>
      </section>

      {/* Bio */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        <div className="flex justify-center">
          <img
            src={Picture}
            alt="Atom Enoch Joshua"
            className="rounded-2xl shadow-xl h-auto w-72 object-cover border border-white/10"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Who I Am</h2>
          <p className="leading-relaxed">
            I am a Computer Technology graduate from Babcock University (B.Sc., 2026) based in Abuja, Nigeria. 
            My work spans full-stack web engineering and IT infrastructure operations.
          </p>
          <p className="leading-relaxed">
            I configure headless Linux servers, plan local network topologies on managed Gigabit switches, and design automated web applications using React, Next.js, and TypeScript.
          </p>
          <p className="pt-2">
            Want to discuss a project or role?{" "}
            <Link to="/contact" className="text-purple-400 hover:text-purple-300 underline font-medium">
              Let's talk here
            </Link>.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          What I Bring to the Table
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <div className="text-3xl mb-3">💻</div>
            <h3 className="text-lg font-semibold text-white mb-1">Full-Stack Web</h3>
            <p className="text-sm text-gray-400">
              Modern frontend and backend architectures with React, Next.js, Node.js, and relational/NoSQL databases.
            </p>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <div className="text-3xl mb-3">🖥️</div>
            <h3 className="text-lg font-semibold text-white mb-1">Linux & Systems</h3>
            <p className="text-sm text-gray-400">
              Debian server provisioning, systemd automation, hardware diagnostics, and secure shell remote access.
            </p>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="text-lg font-semibold text-white mb-1">Networking</h3>
            <p className="text-sm text-gray-400">
              Managed switch configuration, static IP subnetting, mesh VPNs (Tailscale), and fault-tolerant connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Milestones
        </h2>
        <ul className="space-y-4 max-w-3xl mx-auto">
          <li className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <span className="font-bold text-purple-400">July 2026</span>: Graduated with B.Sc. in Computer Technology from Babcock University.
          </li>
          <li className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <span className="font-bold text-purple-400">December 2025 – Current</span>: Deployed independent Linux infrastructure, hardware retrofits, and smart utility integrations (GMPower).
          </li>
          <li className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <span className="font-bold text-purple-400">November 2025 – February 2026</span>: Frontend internship at landscale
          </li>
          <li className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <span className="font-bold text-purple-400">2024</span>: Technical internships at 4Core Integrated Services and African Fintech Foundry.
          </li>
        </ul>
      </section>
    </div>
  );
}