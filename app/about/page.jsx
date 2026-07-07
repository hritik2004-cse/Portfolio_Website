"use client";
import Image from "next/image";
import Info from "@/components/Info";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import { ScrollArea } from "@/components/ui/scroll-area";
import Blob from "@/components/Blob";
import Socials from "@/components/Socials";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center lg:mt-0 mt-15"
    >
      <div className="container mx-auto p-0">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
          {/* img & social icons */}
          <div className="hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative ">
            <Image src='/assets/avatar.png' width={320} height={496} alt="" className="z-20 relative"/>
            {/* overlay */}
            <div className="w-full h-[60px] absolute left-0 top-[400px] right-0 bg-linear-to-t from-primary via-primary/90 z-30"></div>
            {/* blob */}
            <div className="absolute top-[50px] left-[-80px] z-10">
              <Blob containerStyles='w-[400px] h-[400px] '/>
            </div>
            <Socials className='flex gap-4 z-40 w-max transform translate-x-[30px]' iconStyles='w-[48px] h-[48px] text-[22px] text-accent hover:text-accent-hover transition-all flex items-center justify-center rounded-full cursor-pointer'/>
          </div>
          {/* scroll area */}
          <ScrollArea className="w-full h-[680px] p-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p className="text-3xl font-bold text-accent">About me</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">Hritik </span>
                Sharma
              </h2>
              <p className="max-w-[540px] mb-12">
                I'm Hritik Sharma, a Computer Science student passionate about
                coding, creativity, and community. As co-founder of Nova Coders,
                I love building impactful tech solutions, exploring new ideas,
                and inspiring growth through collaboration, learning, and
                real-world problem-solving.
              </p>
              <div className="flex flex-col items-start gap-16">
                <Stats />
                <Info />
                <Journey />
                <Skills />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
