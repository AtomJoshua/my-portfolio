import Picture from "../assets/profile.jpg";
export default function About() {
  return (
    <div className="pt-20 px-4 max-w-5xl mx-auto text-gray-300">
      {/* Intro */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
        <p className="max-w-3xl mx-auto text-lg">
          I’m a passionate frontend developer with a love for creating
          responsive, user-friendly, and visually appealing websites. My goal
          is to merge clean design with efficient code to bring ideas to life on
          the web.
        </p>
      </section>

      {/* Image + Bio */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <img
          src={Picture}
          alt="Profile"
          className="rounded-2xl shadow-lg h-auto w-64"
        />
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Who I Am</h2>
          <p className="mb-4">
            Hi, I’m Enoch Atom, a front-end developer based in Abuja, Nigeria, and a Computer Technology student at Babcock University. I build modern web applications with React and Tailwind CSS, writing maintainable code and continually learning to stay ahead in the fast-changing tech world.
          </p>
          <p>
            When I’m not coding, I enjoy helping others
            learn, and experimenting with design ideas.
          </p>
          <p>
            Want to reach out or collab? feel free to reach out <a href="/contact" className="text-amber-400">here</a>
          </p>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Core Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-purple-800/20 rounded-lg shadow-lg">
            <div className="text-4xl mb-2">📄</div>
            HTML5
          </div>
          <div className="p-4 bg-purple-800/20 rounded-lg shadow-lg">
            <div className="text-4xl mb-2">🎨</div>
            Tailwind CSS
          </div>
          <div className="p-4 bg-purple-800/20 rounded-lg shadow-lg">
            <div className="text-4xl mb-2">⚡</div>
            JavaScript
          </div>
          <div className="p-4 bg-purple-800/20 rounded-lg shadow-lg">
            <div className="text-4xl mb-2">⚛️</div>
            React
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          My Journey
        </h2>
        <ul className="space-y-6">
          <li className="bg-purple-800/10 p-4 rounded-lg shadow-md">
            <span className="font-bold text-purple-400">2023</span> – Started
            learning web development with HTML, CSS, and JavaScript.
          </li>
          <li className="bg-purple-800/10 p-4 rounded-lg shadow-md">
            <span className="font-bold text-purple-400">2024</span> – Built my
            first React projects and learned state management tools.
          </li>
          <li className="bg-purple-800/10 p-4 rounded-lg shadow-md">
            <span className="font-bold text-purple-400">2025</span> – Working on
            more advanced projects and improving current skills.
          </li>
        </ul>
      </section>
    </div>
  );
}
