import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[12vw]
    bg-skills-gradient clip-path-custom"
  >
    {/* Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">
        SKILLS
      </h2>

      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>

      <p className="text-gray-400 mt-5 text-lg font-medium max-w-3xl mx-auto">
        A collection of my technical skills and expertise honed through
        various projects and experiences.
      </p>
    </div>

    {/* Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="
          bg-[#081224]
          rounded-[22px]
          border border-gray-700
          px-8 py-8
          shadow-[0_0_30px_rgba(130,69,236,0.25)]
          hover:shadow-[0_0_45px_rgba(130,69,236,0.35)]
          transition-all duration-300
          "
        >

          {/* Category Title */}
          <h3 className="text-center text-4xl font-bold text-gray-400 mb-8">
            {category.title}
          </h3>

          {/* Skills */}
          <div className="flex flex-wrap gap-4 justify-center">

            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="
                flex
                items-center
                gap-3
                w-fit
                min-w-[120px]
                px-5
                py-3
                border
                border-gray-700
                rounded-2xl
                hover:border-[#8245ec]
                hover:shadow-[0_0_15px_rgba(130,69,236,0.45)]
                transition-all
                duration-300
                "
              >

                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-8 h-8 object-contain"
                />

                <span className="text-gray-300 text-base whitespace-nowrap">
                  {skill.name}
                </span>

              </div>
            ))}

          </div>

        </div>
      ))}

    </div>
  </section>
);

export default Skills;