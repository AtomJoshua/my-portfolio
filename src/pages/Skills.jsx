export default function Skills() {
  const categories = [
    {
      title: "Frontend Engineering",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3", "State Management (Zustand/Context)"]
    },
    {
      title: "Backend & Databases",
      skills: ["Node.js", "Express.js", "RESTful APIs", "PostgreSQL", "Prisma ORM", "MongoDB", "Webhook Integrations"]
    },
    {
      title: "Systems & Infrastructure",
      skills: ["Debian / Ubuntu Linux", "Systemd & Daemon Services", "Shell Scripting", "Hardware Maintenance & Upgrades", "Backup & Recovery Workflows"]
    },
    {
      title: "Networking & Security",
      skills: ["Managed Switch Configuration", "Subnetting & Static IPs", "Tailscale Mesh VPN", "SSH Key Management", "VNC / Remote Desktop"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git & GitHub", "Vercel", "PM2 Process Manager", "Linux CLI", "Postman / Thunder Client"]
    }
  ];

  return (
    <div className="pt-28 px-4 max-w-6xl mx-auto text-gray-300 pb-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Technical Skills</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-400">
          Technologies and tools I work with across software engineering, server systems, and enterprise networking.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-2xl bg-white/5 border border-white/10 p-6 shadow-lg flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-purple-500/30">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1.5 rounded-md bg-purple-900/30 text-purple-200 border border-purple-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}