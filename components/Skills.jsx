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
  // Core Fundamentals
  {
    icon: RiHtml5Fill,
    name: "HTML",
  },
  {
    icon: RiCss3Fill,
    name: "CSS",
  },
  {
    icon: RiJavascriptFill,
    name: "Javascript",
  },
  {
    icon: SiTypescript,
    name: "Typescript",
  },
  // Frontend Frameworks & Styling
  {
    icon: RiReactjsFill,
    name: "React.js",
  },
  {
    icon: RiNextjsFill,
    name: "Next.js",
  },
  {
    icon: RiTailwindCssFill,
    name: "Tailwind CSS",
  },
  {
    icon: FaBootstrap,
    name: "Bootstrap",
  },
  // Backend
  {
    icon: RiNodejsFill,
    name: "Node.js",
  },
  {
    icon: SiExpress,
    name: "Express.js",
  },
  // Databases
  {
    icon: SiMongodb,
    name: "Mongo DB",
  },
  {
    icon: SiMongoose,
    name: "Mongoose",
  },
  {
    icon: BiLogoPostgresql,
    name: "Postgre SQL",
  },
  {
    icon: GrMysql,
    name: "My SQL",
  },
  // Tools
  {
    icon: FaGitAlt,
    name: "Git",
  },
  {
    icon: RiGithubFill,
    name: "GitHub",
  },
  {
    icon: SiPostman,
    name: "Postman",
  },
];

const Skills = () => {
  return (
    <div className="pb-20 md:pb-0 w-full">
      <h2 className="h2 mb-6 md:mb-8">
        My <span className="text-accent">Skills</span>
      </h2>
      <div className="flex flex-wrap gap-4 md:gap-6 max-w-xs xl:max-w-none w-full" >
        {mySkills.map((items, index) => {
          return (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger className="md:w-14 md:h-14 rounded-full flex items-center justify-center md:bg-tertiary/70 group aspect-square">
                  <items.icon
                    className="text-4xl md:text-3xl group-hover:text-accent transition-all duration-300"
                    title={items.name}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="md:text-lg">{items.name}</p>
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
