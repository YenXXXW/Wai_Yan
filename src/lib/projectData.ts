import NetflixImg from "../assets/projects/netflix.webp";
import ListerImg from "../assets/projects/lister.png";
import TeslaImg from "../assets/projects/tesla.png";
import QuizImg from "../assets/projects/Trivia-Quest.webp";
import { skills, Skillset } from "./skillsData";

export interface projectDataType {
  title: string;
  image: string;
  description: string;
  liveDemo: string;
  sourceCode: string;
  techs: skills[];
}

export const projectData: projectDataType[] = [
  {
    title: "Tesla",
    image: TeslaImg,
    description:
      "The Tesla website prioritizes user engagement through a sophisticated interface featuring interactive elements and dynamic animations.",
    sourceCode: "https://github.com/YenXXXW/tesla-tailwind",
    liveDemo: "https://tesla-tailwind.vercel.app/",
    techs: [Skillset[3], Skillset[4], Skillset[7]],
  },
  {
    title: "Lister",
    image: ListerImg,
    description:
      "Product price tracker app: Users can log and search for product prices with secure login.",
    sourceCode: "https://github.com/YenXXXW/lister",
    liveDemo: "https://lister-nine.vercel.app/",
    techs: [Skillset[1], Skillset[3], Skillset[4], Skillset[5], Skillset[6]],
  },
  {
    title: "Netflix",
    image: NetflixImg,
    description:
      "a web application inspired by Netflix, built with Next.js for a performant and scalable frontend, and Tailwind CSS for a lightning-fast and customizable user interface.",
    sourceCode: "https://github.com/YenXXXW/Netflix",
    liveDemo: "https://netflix-by-wai.vercel.app/",
    techs: [Skillset[1], Skillset[3], Skillset[4]],
  },
  {
    title: "Trivia",
    image: QuizImg,
    description:
      "Trivia is a quiz game built with TypeScript, designed to challenge and entertain you!  Dive into a world of trivia with multiple fifficulty levels and diverse categories",
    sourceCode: "https://github.com/YenXXXW/React-quiz-game",
    liveDemo: "https://online-react-quiz-game.vercel.app/",
    techs: [Skillset[2], Skillset[5], Skillset[4]],
  },
];
