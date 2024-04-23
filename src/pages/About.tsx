import { forwardRef } from "react";
import Profile from "../assets/photo.jpg";
import Reveal from "../components/Reveal";

const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="px-[5%] md:px-[7%] lg:px-[10%] pt-10" id="About" ref={ref}>
      <h1>About</h1>

      <div className="mt-5 lg:mt-14 flex flex-col-reverse sm:flex-row h-[90%] justify-between items-center gap-3">
        <div className="flex flex-col px-3 gap-5 sm:basis-[70%] ">
          <Reveal small={true}>
            <h2 className=" text-blue-800">Who am I</h2>
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
          <Reveal>
            <p className="font-sans lg:text-xl font-bold text-blue-700">
              I craft responsive, interactive user interfaces, ensuring
              exceptional web experiences through meticulous design and
              development.
            </p>
          </Reveal>
        </div>
        <div className="w-full sm:w-[200px] sm:h-[220px] md:w-[350px] md:h-[300px] lg:w-[500px] lg:h-[400px] rounded-md">
          <img src={Profile} className="object-fill" />
        </div>
      </div>
    </div>
  );
});

export default About;
