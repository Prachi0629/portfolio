import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  
const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 lg:grid-cols-2">
        {projects.map((project) => (
          <div
  key={project.id}
  onClick={() => setSelectedProject(project)}
  className="w-full border border-purple-500/20 bg-gray-900
  rounded-2xl overflow-hidden cursor-pointer
  shadow-[0_0_20px_1px_rgba(130,69,236,0.2)]
  hover:-translate-y-2 transition duration-300"
>






  {/* Image */}
  <div className="p-4">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-52 object-cover rounded-xl"
    />
  </div>

  {/* Content */}
  <div className="px-6 pb-6">
    <h3 className="text-2xl font-bold text-white mb-2">
      {project.title}
    </h3>

    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
      {project.description}
    </p>

    {/* Tags */}
    <div className="mb-5">
      {project.tags.map((tag, index) => (
        <span
          key={index}
          className="inline-block bg-[#251f38]
          text-purple-400 text-xs
          rounded-full px-3 py-1 mr-2 mb-2"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Buttons */}
    <div className="flex gap-3">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-center bg-gray-800
        hover:bg-gray-700 text-white
        py-2 rounded-xl font-semibold"
      >
        GitHub Code
      </a>

      <a
        href={project.webapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-center bg-purple-600
        hover:bg-purple-700 text-white
        py-2 rounded-xl font-semibold"
      >
        View Live
      </a>
    </div>
  </div>
</div>
        ))}
      </div>

      {/* Modal Container */}
     {selectedProject && (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
    
    <div className="bg-gray-900 border border-purple-500/30 rounded-2xl 
    w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">

      {/* Close Button */}
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-4 right-5 text-white text-3xl font-bold hover:text-purple-400"
      >
        ×
      </button>

      {/* Image */}
      <img
        src={selectedProject.image}
        alt={selectedProject.title}
        className="w-full h-72 object-cover"
      />

      <div className="p-8">

        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-4">
          {selectedProject.title}
        </h2>

        {/* Full Description */}
        <p className="text-gray-300 leading-8 mb-6">
          {selectedProject.description}
        </p>

        {/* Tags */}
        <div className="mb-6">
          {selectedProject.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-[#251f38]
              text-purple-400 text-sm
              rounded-full px-3 py-1 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">

          <a
            href={selectedProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              selectedProject.webapp ? "w-1/2" : "w-full"
            } text-center bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl font-semibold`}
          >
            GitHub Code
          </a>

          {selectedProject.webapp && (
            <a
              href={selectedProject.webapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 text-center bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold"
            >
              View Live
            </a>
          )}

        </div>

      </div>
    </div>
  </div>
)}
     
    </section>
  );
};

export default Work;
