// src/pages/Projects.jsx
import { image } from "framer-motion/client";
import React from "react";
import ZetaTransform from "../assets/zeta.png"; 
import Weatheria from "../assets/weather.png"
import Food from "../assets/food.png"
import ToDo from "../assets/todo.png"

const projects = [
  {
    title: "To-do",
    description: "A basic website to create and manage to-do lists",
    image: ToDo,
    liveLink: "https://todo-app-xi-sooty-39.vercel.app/",
    githubLink: "https://github.com/AtomJoshua/todo-app",
  },
  {
    title: "Food Ordering Website",
    description: "Online food ordering website with cart and checkout functionality.",
    image: Food,
    liveLink: "https://foodies-delight.vercel.app/",
    githubLink: "https://github.com/AtomJoshua/menu-app",
  },
  {
    title: "Weather App",
    description: "Real-time weather app using OpenWeather API.",
    image: Weatheria,
    liveLink: "https://weather-app-nu-flax-11.vercel.app/",
    githubLink: "https://github.com/AtomJoshua/weather--app",
  },
  {
    title: "Zeta transform web page",
    description: "A fully functional website for zeta transform ng",
    image: ZetaTransform,
    liveLink: "zetatransform.com",
    githubLink: "https://github.com/AtomJoshua/zeta-ng2"
  }
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

const Projects = () => {
  return (
    <div className="px-6 py-12 min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black">
      <div className="max-w-2xl mx-auto bg-black/60 backdrop-blur-md p-6 rounded-lg shadow-lg mt-24 text-center">
        <h1 className="text-3xl font-bold mb-8 text-white dark:text-white text-center">Projects</h1>
        <p className="text-lg text-gray-300 mt-4">
          A few of the projects i've worked on
        </p>
      </div>
      {/* <h2 className="text-3xl font-bold mb-8 text-white dark:text-white text-center">
        My Projects
      </h2> */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-5 flex flex-col justify-between h-48">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-indigo-500">
                  <GithubIcon />
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-indigo-500">
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
