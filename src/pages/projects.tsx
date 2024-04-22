import { projectData, projectDataType } from "../lib/projectData";
import Reveal from "../components/Reveal";
import React, { forwardRef } from "react";

const ProjectCard = ({
  image,
  title,
  description,
  sourceCode,
  liveDemo,
  techs,
}: projectDataType) => {
  return (
    <div className=" my-10 flex flex-col sm:flex-row gap-[30px] shadow-lg">
      <img
        src={image}
        className="rounded-md w-[200px] h-[150px] object-contain lg:w-[330px] md:h-[210px] "
      />
      <div className="py-2 gap-3 flex flex-col justify-between max-w-[700px]">
        <div className="flex flex-col gap-3">
          <Reveal small={true}>
            <h3>{title}</h3>
          </Reveal>
          <Reveal>
            <p className="text-sm">{description}</p>
          </Reveal>
        </div>

        <div className="my-10 md:my-0 flex gap-2 items-center">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className={`flex flex-col items-center bg-${tech.iconColor}`}
            >
              <tech.icon size={tech.size} className={tech.iconColor} />

              <p className="font-Nunito text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={sourceCode} target="_blank" rel="noreferrer">
            <button className="SourceCodeDemo">Source Code</button>
          </a>
          <a href={liveDemo} target="_blank" rel="noreferrer">
            <button className="SourceCodeDemo">Live Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = forwardRef<HTMLDivElement>(function Projects(_, ref) {
  return (
    <div
      className="pt-10 snap-start px-[5%] lg:px-[10%] min-h-screen"
      id="Projects"
      ref={ref}
    >
      <h1 className=" font-Josefin mb-10">Projects</h1>
      <div className="px-[5%]">
        <div>
          {projectData.map((project) => (
            <React.Fragment key={project.title}>
              <ProjectCard
                title={project.title}
                image={project.image}
                description={project.description}
                liveDemo={project.liveDemo}
                sourceCode={project.sourceCode}
                techs={project.techs}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Projects;
