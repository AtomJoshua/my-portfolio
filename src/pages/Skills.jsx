// src/pages/Skills.jsx
import { useEffect, useState } from "react";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      level: 95,
      svg: (
        <svg viewBox="0 0 128 128" width="40" height="40" aria-hidden="true">
          <path fill="#E44D26" d="M19 0l9 102.3L64 128l36-25.7L109 0H19z" />
          <path fill="#F16529" d="M64 116.2l29.1-20.8 7.7-86.1H64v107z" />
          <path fill="#EBEBEB" d="M64 26H48v12h16v-12zM64 48H48v12h16v-12zM64 70H48v12h16v-12z" />
          <path fill="#FFF" d="M80 26H64v12h16V26zM80 48H64v12h16V48zM80 70H64v12h16V70z" />
        </svg>
      ),
    },
    {
      name: "CSS",
      level: 90,
      svg: (
        <svg viewBox="0 0 128 128" width="40" height="40" aria-hidden="true">
          <path fill="#264DE4" d="M19 0l9 102.3L64 128l36-25.7L109 0H19z" />
          <path fill="#2965F1" d="M64 116.2l29.1-20.8 7.7-86.1H64v107z" />
          <path fill="#EBEBEB" d="M64 26H48v12h16v-12zM64 48H48v12h16v-12zM64 70H48v12h16v-12z" />
          <path fill="#FFF" d="M80 26H64v12h16V26zM80 48H64v12h16V48zM80 70H64v12h16V70z" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      level: 88,
      svg: (
        <svg viewBox="0 0 128 128" width="40" height="40" aria-hidden="true">
          <path fill="#F7DF1E" d="M1 1h126v126H1z" />
          <path d="M103 96c-1.3-2.7-2.6-4.6-5.6-5.4-2.3-.6-4.6.1-6.1 1.7-1 .9-1.6 2.2-1.7 3.7-.1 1.4.1 2.9.6 4.1 1 2.1 3.1 3.2 5.3 4 3.3 1.2 6.8 2.1 10.1 3.5 1.5.6 3 1.4 4.2 2.5 2.3 2.1 3.6 5.2 3.5 8.4-.1 4-2 7.7-5.1 10.3-3.3 2.7-7.3 4-11.5 3.9-3.5-.1-7.1-1.1-10.2-2.8-3.6-2-6-5.3-7.2-8.9-.8-2.7-1.2-5.6-1-8.5h9.9c.1 2.1.4 4.3 1 6.3.8 2.5 3.1 4.4 5.8 4.5 2.5.1 4.9-1 6.3-3 1.5-2.1 1.9-5.1.9-7.6z" />
        </svg>
      ),
    },
    {
      name: "React",
      level: 85,
      svg: (
        <svg viewBox="0 0 256 256" width="40" height="40" aria-hidden="true">
          <circle cx="128" cy="128" r="14" fill="#61DAFB" />
          <g fill="none" stroke="#61DAFB" strokeWidth="12">
            <ellipse cx="128" cy="128" rx="100" ry="40" />
            <ellipse cx="128" cy="128" rx="100" ry="40" transform="rotate(60 128 128)" />
            <ellipse cx="128" cy="128" rx="100" ry="40" transform="rotate(120 128 128)" />
          </g>
        </svg>
      ),
    },
    {
      name: "Tailwind",
      level: 87,
      svg: (
        <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true">
          <path
            fill="#38BDF8"
            d="M24 10c-4.8 0-7.8 2.4-9 7.2 1.8-2.4 3.9-3.3 6.3-2.7 1.4.4 2.4 1.4 3.5 2.4 1.8 1.8 3.9 3.6 7.8 3.6 4.8 0 7.8-2.4 9-7.2-1.8 2.4-3.9 3.3-6.3 2.7-1.4-.4-2.4-1.4-3.5-2.4C30 11.8 28 10 24 10zM15 27c-4.8 0-7.8 2.4-9 7.2 1.8-2.4 3.9-3.3 6.3-2.7 1.4.4 2.4 1.4 3.5 2.4 1.8 1.8 3.9 3.6 7.8 3.6 4.8 0 7.8-2.4 9-7.2-1.8 2.4-3.9 3.3-6.3 2.7-1.4-.4-2.4-1.4-3.5-2.4C21 28.8 19 27 15 27z"
          />
        </svg>
      ),
    },
    {
      name: "Node.js",
      level: 78,
      svg: (
        <svg viewBox="0 0 256 272" width="40" height="40" aria-hidden="true">
          <path fill="#3C873A" d="M128 .7L5 63.5v145L128 271l123-62.5v-145z" />
          <path fill="#FFF" d="M168 112c0-22-14-34-42-34h-38v117h25v-38h14c28 0 41-13 41-35zm-28 0c0 9-6 15-18 15h-14V97h14c12 0 18 6 18 15z" />
        </svg>
      ),
    },
    {
      name: "Git",
      level: 92,
      svg: (
        <svg viewBox="0 0 256 256" width="40" height="40" aria-hidden="true">
          <path fill="#F05133" d="M247 116L140 9a31 31 0 00-44 0L9 96a31 31 0 000 44l107 107a31 31 0 0044 0l87-87a31 31 0 000-44z" />
          <circle cx="96" cy="96" r="18" fill="#fff" />
          <circle cx="160" cy="160" r="18" fill="#fff" />
          <circle cx="160" cy="96" r="18" fill="#fff" />
          <path d="M96 114v64" stroke="#fff" strokeWidth="12" />
          <path d="M160 114v28" stroke="#fff" strokeWidth="12" />
          <path d="M114 96h28" stroke="#fff" strokeWidth="12" />
        </svg>
      ),
    },
  ];

  // animate bars from 0% to target
  const [fills, setFills] = useState(skills.map(() => 0));

  useEffect(() => {
    const t = setTimeout(() => {
      setFills(skills.map((s) => s.level));
    }, 200); // slight delay for a nicer effect
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="pt-20 px-4 max-w-6xl mx-auto text-gray-300">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Skills</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          A mix of technologies and tools I use to build fast, accessible, and visually appealing web pages.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className="rounded-2xl bg-white/5 border border-white/10 p-5 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="shrink-0">{skill.svg}</div>
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
            </div>

            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-3 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 transition-[width] duration-1000 ease-out"
                style={{ width: `${fills[i]}%` }}
              />
            </div>
            <div className="mt-2 text-sm text-gray-400">{fills[i]}%</div>
          </div>
        ))}
      </section>
    </div>
  );
}
