import React, { useState, useEffect } from "react";
import ZetaTransform from "../assets/zeta.png";
import Weatheria from "../assets/weather.png";
import haven from "../assets/zetahaven.png";
import GMPowerImg from "../assets/gmpower.png";

const projects = [
  {
    title: "GMPower",
    subtitle: "Smart Energy Metering & Billing System",
    category: "Full-Stack & Hardware APIs",
    description: "Integrated automated payment webhooks (Paystack) with smart energy metering hardware APIs to deliver instant token generation and fail-safe retry mechanisms.",
    image: GMPowerImg,
    tags: ["Node.js", "TypeScript", "REST APIs", "Webhooks"],
    liveLink: "https://gmpower.vercel.app/", 
    githubLink: "https://github.com/AtomJoshua/TenantBillingSystem"
  },
  {
    title: "Zeta Haven",
    subtitle: "Real Estate & Short-Let Booking",
    category: "Web Application",
    description:
      "A complete apartment discovery and short-let booking platform featuring interactive units, smooth mobile UI flows, and asset-optimized rendering.",
    image: haven,
    tags: ["React", "Tailwind CSS", "JavaScript"],
    liveLink: "https://zetahaven.com",
    githubLink: "https://github.com/AtomJoshua/Zeta-Haven",
  },
  {
    title: "Linux & Switch Infrastructure",
    subtitle: "Enterprise Networking Lab",
    category: "Systems & Networking",
    description:
      "Configured a 24-port HP ProCurve Gigabit managed switch, custom subnetting, and a dedicated headless Debian server with automated systemd daemons and Tailscale remote access.",
    tags: ["Debian Linux", "Networking", "Tailscale", "systemd"],
    githubLink: "https://github.com/AtomJoshua",
    internalOnly: true,
  },
  {
    title: "Zeta Transform",
    subtitle: "Corporate Web Portal",
    category: "Corporate Web Platform",
    description:
      "Official online presence and responsive client platform for Zeta Transform NG, delivering structured services and direct contact gateways.",
    image: ZetaTransform,
    tags: ["React", "Tailwind CSS", "Vercel"],
    liveLink: "https://zetatransform.com",
    githubLink: "https://github.com/AtomJoshua/zeta-ng2",
  },
  {
    title: "Weatheria",
    subtitle: "Real-Time Forecasting Platform",
    category: "Web Application",
    description:
      "Dynamic weather forecasting application utilizing real-time third-party REST APIs to retrieve meteorological conditions by city and coordinates.",
    image: Weatheria,
    tags: ["JavaScript", "OpenWeather API", "CSS3"],
    liveLink: "https://weather-app-nu-flax-11.vercel.app/",
    githubLink: "https://github.com/AtomJoshua/weather--app",
  },
];

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.08 1.85 2.84 1.31 3.53 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.23 0 4.63-2.8 5.66-5.48 5.96.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.82.58A12.002 12.002 0 0024 12c0-6.63-5.37-12-12-12z"
    />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M14 3a1 1 0 100 2h3.586l-9.293 9.293a1 1 0 001.414 1.414L19 6.414V10a1 1 0 102 0V4a1 1 0 00-1-1h-6z"
    />
    <path
      fillRule="evenodd"
      d="M5 5a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-6a1 1 0 112 0v6a4 4 0 01-4 4H5a4 4 0 01-4-4V7a4 4 0 014-4h6a1 1 0 110 2H5z"
    />
  </svg>
);

const ExpandIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
  </svg>
);

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close modal when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="px-6 py-28 min-h-screen">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-bold text-white tracking-tight">Featured Projects</h1>
        <p className="text-lg text-gray-400 mt-3">
          A selection of production platforms, automated gateways, and server infrastructure.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-purple-500/40 transition duration-300 shadow-lg"
          >
            {/* Card Media Container */}
            <div className="relative overflow-hidden bg-black/40">
              {project.image ? (
                <div
                  className="relative cursor-pointer overflow-hidden group/img h-52"
                  onClick={() => setSelectedImage({ src: project.image, title: project.title })}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition duration-500 group-hover/img:scale-105"
                  />
                  {/* Hover Overlay with Expand Hint */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition flex items-center justify-center gap-2">
                    <ExpandIcon />
                    <span className="text-xs text-white font-medium tracking-wide uppercase">Click to preview</span>
                  </div>
                </div>
              ) : (
                <div className="w-full h-52 bg-gradient-to-br from-purple-950/40 to-black/80 flex flex-col items-center justify-center p-6 text-center border-b border-white/10">
                  <span className="text-2xl mb-2">🖥️</span>
                  <span className="text-purple-300 font-mono text-sm tracking-wide">
                    {project.category}
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-white mt-1">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-xs text-purple-300/80 font-medium">
                    {project.subtitle}
                  </p>
                )}

                <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] bg-purple-950/40 text-purple-200 border border-purple-500/20 px-2 py-0.5 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Action Row */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-sm">
                  <div className="flex items-center gap-4">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition flex items-center gap-1.5"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon />
                        <span className="text-xs">Source</span>
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400 transition flex items-center gap-1.5"
                        aria-label="Live Demo"
                      >
                        <ExternalLinkIcon />
                        <span className="text-xs">Live Site</span>
                      </a>
                    )}
                  </div>

                  {project.internalOnly && (
                    <span className="text-[11px] text-gray-500 italic">
                      Private Network
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Expandable Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 transition-all"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-gray-900 border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="px-5 py-3.5 bg-black/60 border-b border-white/10 flex items-center justify-between">
              <span className="text-sm font-semibold text-white tracking-wide">
                {selectedImage.title} — Preview
              </span>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-gray-400 hover:text-white p-1 rounded-md transition text-lg"
                aria-label="Close Preview"
              >
                ✕
              </button>
            </div>

            {/* Modal Full-Resolution Image */}
            <div className="overflow-auto max-h-[calc(90vh-56px)] bg-black/95 flex items-center justify-center p-2">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}