"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Blob from "@/components/Blob";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import Image from "next/image";
import avatarImg from "@/public/assets/avatar.png";
import Socials from "@/components/Socials";
import Pattern from "@/components/Pattern";
import Link from "next/link";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-svh flex items-center py-20"
    >
      <Pattern />
      <div className="flex flex-col xl:flex-row items-start md:items-center justify-between w-full">
        <div className="w-full xl:w-137.5 flex flex-col items-start md:items-center xl:items-start text-left md:text-center xl:text-left">
          <h1 className="h1 flex-1 mb-4 md:mb-7">
            Hi! I'm Hritik,
            <br />
            <TypeAnimation
              sequence={["Web Developer", 2000, "Web Designer", 2000]}
              wrapper="span"
              speed={40}
              className="text-accent"
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <p className="max-w-80 sm:max-w-105 xl:max-w-125 mb-4 md:mb-7 text-white/70 text-sm md:text-base lg:text-lg">
            I create visually appealing, user-friendly websites and webapps.
            Always try my best to do wonders.
          </p>
          {/* contact button  */}
          <Link
            href="/contact"
            className="w-full sm:w-auto btn btn-sm md:btn-md lg:btn-lg btn-accent mb-4 md:mb-16"
          >
            <div className="flex items-center gap-3">
              <span>Let's talk</span>
              <MdArrowOutward className="text-xl" aria-hidden="true" />
            </div>
          </Link>
          <div className="flex flex-col xl:flex-row xl:items-center gap-3 xl:gap-8 mb-12 xl:mb-0">
            {/* phone  */}
            <div className="flex items-center gap-3 md:gap-4">
              <span className="text-accent" aria-hidden="true">
                <HiOutlinePhone className="text-xl" />
              </span>
              <Link href="tel:+919548474709" aria-label="Call +91 9548474709">
                <p className="text-sm md:text-base text-white/70">
                  +91 9548474709
                </p>
              </Link>
            </div>
            {/* email  */}
            <div className="flex items-center gap-3 md:gap-4">
              <span className="text-accent" aria-hidden="true">
                <HiOutlineMail className="text-xl" />
              </span>
              <Link href="mailto:hritiksharma08725@gmail.com" aria-label="Send email to hritiksharma08725@gmail.com">
                <p className="text-sm md:text-base text-white/70">
                  hritiksharma08725@gmail.com
                </p>
              </Link>
            </div>
          </div>
          <Socials
            containerStyles="flex items-center w-full 2xl:flex-col gap-4 md:gap-6 xl:hidden 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-7 2xl:transform 2xl:translate-x-1/2 2xl:-translate-y-1/2"
            iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px] text-3xl md:text-[22px] flex items-center justify-center rounded-full cursor-pointer"
          />
        </div>
        <div className="flex-1 xl:block hidden relative z-20">
          <Blob containerStyles="w-[560px] h-[560px]" />
          <Image
            src={avatarImg}
            alt="Hritik Sharma — Full-Stack Web Developer"
            width={450}
            height={600}
            quality={100}
            className="absolute -top-15 left-35"
          />
        </div>
      </div>
    </motion.section>
  )
}

export default Home