import { forwardRef } from "react";
import Profile from "../assets/photo.jpg";
import Reveal from "../components/Reveal";
import { Skills } from "../lib/skillsData";

const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="px-[5%] md:px-[10%] pt-10 h-screen " id="About" ref={ref}>
      <h1>About</h1>

      <div className="mt-5 flex flex-col-reverse sm:flex-row h-[90%] justify-between items-center0">
        <div className="flex flex-col px-3 gap-3">
          <Reveal small={true}>
            <h3 className="text-2xl text-blue-800">Who am I</h3>
          </Reveal>
          <Reveal small={true}>
            <p className="max-w-[600px] contactMep">
              I am a 5th-year ECE student at Myanmar Institute of Information
              Technology.
            </p>
          </Reveal>
          <Reveal>
            <p className="max-w-[600px] contactMep">
              With a background in electronics engineering, I've honed strong
              analytical and problem-solving skills. Now, I'm diving into
              front-end development, specializing in React.js and Next.js. I'm
              passionate about creating user-friendly interfaces and eager to
              collaborate on innovative web projects.
            </p>
          </Reveal>

          <div className="pt-4">
            <h3>Skills</h3>
            <Reveal>
              <div className="flex max-w-[400px] flex-wrap mt-3 gap-3">
                {Skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex flex-col items-center bg-${skill.iconColor} md:text-lg`}
                  >
                    <skill.icon
                      size={skill.size}
                      className={`${skill.iconColor}`}
                    />

                    <p className="font-Nunito text-sm">{skill.name}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
        <div className="w-full sm:w-[200px] sm:h-[220px] md:w-[350px] md:h-[300px]  rounded-md">
          <img src={Profile} className="object-fill" />
        </div>
      </div>
    </div>
  );
});

export default About;
