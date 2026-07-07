import React from "react";
import {
  RiReactjsFill,
  RiNextjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiGithubFill,
  RiNodejsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiPostman,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiTypescript,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaBootstrap, FaGitAlt } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const mySkills = [
  {
    icon: RiReactjsFill,
    name: "React.js",
  },
  {
    icon: RiNextjsFill,
    name: "Next.js",
  },
  {
    icon: RiHtml5Fill,
    name: "HTML",
  },
  {
    icon: RiJavascriptFill,
    name: "Javascript",
  },
  {
    icon: RiGithubFill,
    name: "GitHub",
  },
  {
    icon: RiNodejsFill,
    name: "Node.js",
  },
  {
    icon: RiTailwindCssFill,
    name: "Tailwind CSS",
  },
  {
    icon: RiCss3Fill,
    name: "CSS",
  },
  {
    icon: BiLogoPostgresql,
    name: "Postgre SQL",
  },
  {
    icon: SiPostman,
    name: "Postman",
  },
  {
    icon: SiExpress,
    name: "Express.js",
  },
  {
    icon: SiMongodb,
    name: "Mongo DB",
  },
  {
    icon: SiMongoose,
    name: "Mongoose",
  },
  {
    icon: SiTypescript,
    name: "Typescript",
  },
  {
    icon: GrMysql,
    name: "My SQL",
  },
  {
    icon: FaBootstrap,
    name: "Bootstrap",
  },
  {
    icon: FaGitAlt,
    name: "Git",
  },
];

const Skills = () => {
  return (
    <div>
      <h2 className="h2 mb-8">
        My <span className="text-accent">Skills</span>
      </h2>
      <div className="flex flex-wrap gap-6 max-w-sm xl:max-w-none   ">
        {mySkills.map((items, index) => {
          return (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger className="w-14 h-14 rounded-full flex items-center justify-center bg-tertiary/70 group">
                  <items.icon className="text-3xl group-hover:text-accent transition-all duration-300" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-lg">{items.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
