import { IconType } from "react-icons";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoRedux,
} from "react-icons/bi";
import { SiFramer, SiTailwindcss, SiPrisma, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";

export interface skills {
  icon: IconType;
  iconColor: string;
  size: number;
  name: string;
}

export const Skillset: skills[] = [
  {
    icon: BiLogoJavascript,
    iconColor: "text-[#E8D44D]",
    size: 27,
    name: "Javascript",
  },
  {
    icon: BiLogoTypescript,
    size: 27,
    iconColor: "text-blue-600",
    name: "Typescript",
  },
  {
    icon: FaReact,
    size: 27,
    iconColor: "text-[#51BBD7]",
    name: "React",
  },
  {
    icon: TbBrandNextjs,
    size: 27,
    iconColor: "text-black",
    name: "Nextjs",
  },
  {
    icon: SiTailwindcss,
    iconColor: "text-blue-400",
    size: 27,
    name: "Tailwind",
  },
  {
    icon: SiMongodb,
    iconColor: "text-green-500",
    size: 27,
    name: "Mongodb",
  },
  {
    icon: SiPrisma,
    iconColor: "text-black",
    size: 27,
    name: "Prisma",
  },
  {
    icon: SiFramer,
    iconColor: "text-black",
    size: 27,
    name: "Framer",
  },
  {
    icon: FaPython,
    iconColor: "text-blue-400",
    size: 27,
    name: "Python",
  },
  {
    icon: BiLogoRedux,
    iconColor: "text-purple-500",
    size: 27,
    name: "Redux",
  },
  {
    icon: FaNodeJs,
    iconColor: "text-black",
    size: 27,
    name: "node.js",
  },
  {
    icon: GrMysql,
    iconColor: "text-blue-500",
    size: 27,
    name: "MySQL",
  },
];
