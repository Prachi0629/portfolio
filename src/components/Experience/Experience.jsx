import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
     className="py-24 px-[5vw] md:px-[5vw] lg:px-[6vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center">
  {experiences.map((experience) => (
    <div
      key={experience.id}
      className="w-full h-full flex flex-col p-6 rounded-2xl border border-white
      bg-gray-900 backdrop-blur-md
      shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
      hover:scale-105 transition-transform"
    >


            {/* Content Section */}
            <div
            className="w-full max-w-[650px] min-h-[380px] p-6 rounded-2xl
bg-gray-900 backdrop-blur-md
shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
transition duration-300 hover:-translate-y-2"
            >
              {/* Flex container for image and text */}
             <div className="flex items-start gap-4">
                {/* Company Logo/Image */}
             <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
  <img
    src={experience.img}
    alt={experience.company}
    className="w-full h-full object-cover"
  />
</div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
