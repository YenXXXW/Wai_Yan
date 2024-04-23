import { forwardRef } from "react";
import { Skillset } from "../lib/skillsData";

const Skills = forwardRef<HTMLDivElement>(function Skills(_, ref) {
  return (
    <div
      className="py-[5%] md:py-[10%] lg:py-[15%] snap-start px-[5%] lg:px-[10%]"
      ref={ref}
      id={"Skills"}
    >
      <h1>Skills</h1>

      <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 mt-10 lg:mt-14 gap-3 lg:gap-5 ">
        {Skillset.map((skill) => (
          <div
            key={skill.name}
            className={`group flex gap-3 bg-white border-[1px] hover:border-blue-800 border-gray-400 shadow-2xl py-3 px-5 items-center bg-${skill.iconColor} md:text-lg`}
          >
            <skill.icon
              className={`${skill.iconColor} text-4xl transform group-hover:scale-125 duration-300`}
            />

            <p className="font-Nunito text-sm lg:text-base">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Skills;
