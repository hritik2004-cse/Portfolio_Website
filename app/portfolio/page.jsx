"use client";
import { motion } from "framer-motion";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// tabs
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    category: "Full-Stack",
    title: "Intelliweb - Ai Website Builder",
    description:
      "An AI-powered full-stack website builder that generates stunning, production-ready websites from natural language prompts. Features live preview, in-browser editing, TypeScript type safety, and MongoDB-backed project persistence — putting the power of AI-driven web creation in your hands.",
    github: "https://github.com/hritik2004-cse/AI_Website_Builder",
    link: "https://project-nexuspace.vercel.app/",
    image: "/assets/work/intelliweb.png",
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "AI",
      "Typescript",
    ],
  },
  {
    id: 2,
    category: "Full-Stack",
    title: "Nexuspace - Messaging app",
    description:
      "A professional real-time team collaboration platform featuring persistent workspaces, Kanban-style task management, and live group chat powered by Socket.io. Built with a full MERN stack and animated with Framer Motion for a polished, enterprise-grade experience.",
    github: "https://github.com/hritik2004-cse/Nexuspace",
    link: "https://project-nexuspace.vercel.app/",
    image: "/assets/work/nexuspace.png",
    tech: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Express.js",
      "Socket.io",
      "Framer Motion",
    ],
  },
  {
    id: 3,
    category: "Full-Stack",
    title: "LeetVault Pro",
    description:
      "A production-grade developer productivity platform for mastering LeetCode. Features a smart revision scheduler, solution knowledge base with syntax-highlighted code storage, cloud-synced progress tracking via Firebase, and a TypeScript-strict architecture built for scale.",
    github: "https://github.com/hritik2004-cse/Leet-Vault-Pro",
    link: "https://leet-vault-pro.vercel.app/",
    image: "/assets/work/leetvault.png",
    tech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Firebase",
      "TypeScript",
      "Framer Motion",
      "Cloud Storage",
    ],
  },
  {
    id: 4,
    category: "Full-Stack",
    title: "Hritik-blogs - Blogging App",
    description:
      "A full-stack content platform built with Next.js App Router, MongoDB, and Mongoose. Ships with server-side rendered blog feeds, an admin dashboard for content management, newsletter subscription support, and SEO-friendly dynamic routing — a complete publishing solution from day one.",
    github: "https://github.com/hritik2004-cse/Hritik-Blogs",
    link: "https://hritik-blogs.vercel.app/",
    image: "/assets/work/hritik-blogs.png",
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "axios"],
  },
  {
    id: 5,
    category: "Frontend",
    title: "Recipe Nation - Recipe App",
    description:
      "Recipe Nation 2.0 is a modern recipe discovery platform built with Next.js App Router and Shadcn-UI. Explore thousands of recipes with a clean, card-based layout, smart filtering, and a responsive design optimized for every screen — the foundation for a future full-stack culinary hub.",
    github: "https://github.com/hritik2004-cse/Recipe-Nation-2.0",
    link: "https://recipe-nation-2-0.vercel.app/recipes",
    image: "/assets/work/recipe-nation.png",
    tech: ["React", "Tailwind CSS", "Next.js", "Shadcn-UI", "Node.js"],
  },
  {
    id: 6,
    category: "Frontend",
    title: "Carvo - Car Rental Website",
    description:
      "A modern car rental web application built on the latest Next.js 16 and React 19. Browse and filter a curated fleet of vehicles, view detailed specs, and experience a premium booking flow — all wrapped in a sleek, responsive UI powered by Tailwind CSS 4 and Shadcn-UI.",
    github: "https://github.com/hritik2004-cse/Car-Rental-Website",
    link: "https://carvo-app.vercel.app/",
    image: "/assets/work/carvo.png",
    tech: ["React", "Tailwind CSS", "Next.js", "Shadcn-UI"],
  },
  {
    id: 7,
    category: "Frontend",
    title: "MeloVibe — Your Calm Space",
    description:
      "A premium web-based music player delivering a calm, immersive listening experience. Built with Vanilla JavaScript and Tailwind CSS v4, MeloVibe features a stunning dark-themed UI, smooth CSS animations, playlist management, and full playback controls — all without a single framework.",
    github: "https://github.com/hritik2004-cse/melovibe-music-player",
    link: "https://melovibe-music-player.vercel.app/",
    image: "/assets/work/melovibe.png",
    tech: ["JavaScript", "HTML", "Tailwind CSS", "Vite"],
  },
  {
    id: 8,
    category: "Tools",
    title: "Currency Convertor",
    description:
      "A fast, mobile-optimized currency converter supporting 160+ world currencies with live exchange rates fetched from the Exchange-Rate API. Clean card UI, instant conversion on input, and zero sign-up friction — the go-to tool for quick currency lookups.",
    github: "https://github.com/hritik2004-cse/Currency_Converter",
    link: "https://my-currency-conversion-app.vercel.app/",
    image: "/assets/work/currency-convertor.png",
    tech: ["JavaScript", "HTML", "Tailwind CSS", "Vite", "Exchange-Rate API"],
  },
  {
    id: 9,
    category: "Tools",
    title: "Weather App",
    description:
      "A real-time weather dashboard powered by the OpenWeatherMap API. Search any city worldwide to instantly view temperature, humidity, wind speed, and current conditions — presented in a clean, icon-rich interface with smooth data transitions.",
    github: "https://github.com/hritik2004-cse/Weather_app",
    link: "https://weather-app-hritik.vercel.app/",
    image: "/assets/work/weather.png",
    tech: ["JavaScript", "HTML", "CSS", "Open-Weather API"],
  },
  {
    id: 10,
    category: "Tools",
    title: "Vowel Counter",
    description:
      "A real-time text analysis tool built with React and Shadcn-UI that counts vowels, consonants, words, and characters as you type. Features a clean, card-based dashboard layout with instant live feedback — a practical utility with a polished component-driven UI.",
    github: "https://github.com/hritik2004-cse/Vowel_Counter",
    link: "https://vowel-counter-lime.vercel.app/",
    image: "/assets/work/vowel-counter.png",
    tech: ["React", "Tailwind CSS", "Vite", "Shadcn-UI"],
  },
  {
    id: 11,
    category: "Tools",
    title: "Age Calculator",
    description:
      "A glassmorphic age calculator that computes your exact age down to the millisecond from a single birth date input. Displays a full breakdown across years, months, weeks, days, hours, minutes, seconds, and milliseconds in a sleek, modern UI built with Vite and Tailwind CSS.",
    github: "https://github.com/hritik2004-cse/Advance_Age_Calculator",
    link: "https://hritik-advance-age-calculator.vercel.app/",
    image: "/assets/work/age-calculator.png",
    tech: ["JavaScript", "HTML", "Tailwind CSS", "Vite"],
  },
  {
    id: 12,
    category: "Tools",
    title: "FD Calculator",
    description:
      "A straightforward fixed deposit maturity calculator that helps users plan their investments with confidence. Enter the principal, annual interest rate, and tenure to instantly compute the final maturity amount — built with clean HTML, CSS, and vanilla JavaScript.",
    github: "https://github.com/hritik2004-cse/FD-Calculator",
    link: "https://fd-calculator-eight.vercel.app/",
    image: "/assets/work/fd-calculator.png",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 13,
    category: "Tools",
    title: "Random Color Generator",
    description:
      "A handy design utility that generates 50 unique random colors on every refresh. Each color swatch displays its hex code ready to copy with a single click — ideal for designers and developers looking for quick color inspiration.",
    github: "https://github.com/hritik2004-cse/Random-Color-Generator",
    link: "https://random-color-generator-amber.vercel.app/",
    image: "/assets/work/color-generator.png",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 14,
    category: "Games",
    title: "Tic-Tac-Toe",
    description:
      "A fun, browser-based Tic-Tac-Toe game with a delightful twist — win a round and a cheerful cat 😺 celebrates your victory! Features two-player mode, win detection, and a clean minimalist UI built with pure HTML, CSS, and JavaScript.",
    github: "https://github.com/hritik2004-cse/Tic-tac-toe-game",
    link: "https://tic-tac-toe-game-lac-nu.vercel.app/",
    image: "/assets/work/tic_tac_toe.png",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 15,
    category: "Frontend",
    title: "Spotify Clone",
    description:
      "A pixel-perfect Spotify UI clone faithfully recreating the look and feel of the original Spotify music player. Features a responsive sidebar, playlist layout, playback controls bar, and dark theme — all crafted with pure HTML and CSS showcasing advanced layout and styling skills.",
    github: "https://github.com/hritik2004-cse/Spotify_Clone",
    link: "https://spotify-clone-gamma-khaki.vercel.app/",
    image: "/assets/work/spotify.png",
    tech: ["HTML", "CSS"],
  },
  {
    id: 16,
    category: "Frontend",
    title: "Netflix Clone",
    description:
      "A high-fidelity Netflix landing page clone replicating the iconic streaming platform's homepage. Includes the hero banner, feature sections, FAQ accordion, and fully responsive layout — built entirely with HTML and CSS to demonstrate strong UI cloning and responsive design fundamentals.",
    github: "https://github.com/hritik2004-cse/netflix-clone",
    link: "https://hritik-netflix-landing-page.vercel.app/",
    image: "/assets/work/netflix.png",
    tech: ["HTML", "CSS"],
  },
  {
    id: 17,
    category: "Frontend",
    title: "Destination.go - Travelling site",
    description:
      "A visually engaging travel website built with HTML, CSS, and JavaScript. Features an interactive sidebar navigation, destination cards, form validation for trip enquiries, and smooth UI interactions — designed to showcase front-end interactivity and clean layout composition.",
    github: "https://github.com/hritik2004-cse/Travel_Site",
    link: "https://destinationgo-hritik-sharma-s-projects.vercel.app/",
    image: "/assets/work/destination-go.png",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const categories = ["Full-Stack", "Frontend", "Tools", "Games"];

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        {/* heading */}
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My Latest <span className="text-accent">Work</span>
        </h2>
        {/* tabs */}
        <Tabs
          defaultValue="Full-Stack"
          className="w-full flex flex-col gap-6 xl:gap-12"
        >
          {/* tabs list */}
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0 cursor-pointer">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="md:h-auto h-[400px] lg:max-h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible mt-12 lg:mt-0 w-full">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    spaceBetween={30}
                    grabCursor={true}
                    allowTouchMove={true}
                    className="w-full h-max xl:h-[460px]"
                  >
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id}>
                            <div className="flex flex-col xl:flex-row gap-2 xl:gap-6">
                              {/* project info */}
                              <div className="w-full max-w-[380px] md:max-w-full xl:max-w-[400px] flex flex-col justify-between xl:justify-center xl:gap-4 order-2 xl:order-0">
                                <h3 className="h3 text-accent mb-3 md:my-5 xl:mb-0 w-full">
                                  {project.title}
                                </h3>
                                {/* project tech */}
                                <ul className="flex flex-wrap gap-2 xl:gap-3 min-w-full">
                                  {project.tech.map((item, index) => {
                                    return (
                                      <li
                                        className="flex items-center bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full text-xs md:text-sm lg:text-md"
                                        key={index}
                                      >
                                        {item}
                                      </li>
                                    );
                                  })}
                                </ul>
                                {/* project description */}
                                <p className="max-w-full text-white/50 line-clamp-4 xl:line-clamp-3 text-sm md:text-md lg:text-lg my-4 md:my-5 xl:my-0">
                                  {project.description}
                                </p>
                                {/* buttons */}
                                <div className="flex flex-col md:flex-row gap-4 items-center md:items-start w-full">
                                  <Link href={project.link} target="_blank" className="w-full">
                                    <button className="btn btn-sm btn-accent flex gap-2 min-w-[98%]">
                                      <MdArrowOutward className="text-xl" />
                                      <span>Live Project</span>
                                    </button>
                                  </Link>
                                  <Link href={project.github} target="_blank" className="w-full">
                                    <button className="btn btn-sm btn-white flex gap-2 min-w-[98%]">
                                      <FaGithub className="text-xl" />
                                      <span>Github Repo</span>
                                    </button>
                                  </Link>
                                </div>
                              </div>
                              {/* project img */}
                              <div className="w-full h-[200px] md:h-[400px] lg:h-[500px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-0 rounded-lg overflow-hidden">
                                <Image
                                  src={project.image}
                                  alt={project.image}
                                  fill
                                  loading='lazy'
                                  sizes="(max-width: 768px) 100vw, (max-width: 1130px) 60vw, 750px"
                                  className="object-cover object-top"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Portfolio;
