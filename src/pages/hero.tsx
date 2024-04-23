import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { forwardRef } from "react";

const Hero = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="flex flex-col sm:flex-row px-[5%] md:px-[10%] md:text-center md:h-screen pt-[5%] lg:pt-[17%] gap-5"
      id="Home"
    >
      <div className="lg:basis-1/2 flex  items-center justify-center"></div>
      <div>
        <Reveal>
          <p className="uppercase text-sm tracking-widest text-gray-900 mt-4">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
        </Reveal>
        <Reveal>
          <h1 className="py-2 md:py-4 text-gray-900 ">
            Hi, I&#39;m <span className="text-[#5651e5]"> Wai</span>
          </h1>
        </Reveal>
        <Reveal>
          <h1 className="py-2 text-gray-900">A Front-End Web Developer</h1>
        </Reveal>

        <Reveal>
          <p className="py-2 w-full lg:py-4 text-black/95 text-start m-auto">
            Crafting seamless digital experiences with innovative designs and
            cutting-edge technologies, I bring ideas to life as a frontend web
            developer.
          </p>
        </Reveal>

        <div className=" mx-auto  mt-5 lg:mt-10">
          <Reveal>
            <div className="flex items-center justify-between w-[330px]  py-4">
              <a
                href="https://www.linkedin.com/in/wai-yan-0a87b82ba/"
                target="_blank"
                rel="noreferrer"
              >
                <div className=" p-3 cursor-pointer hover:scale-110 hover:text-blue-700 ease-in duration-300">
                  <AiOutlineLinkedin size="23" />
                </div>
              </a>

              <a
                href="https://github.com/YenXXXW?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <div className=" cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub size="22" />
                </div>
              </a>

              <a
                href="mailto:yenxxxw@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail size="22" />
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </motion.div>
  );
});

export default Hero;
