"use client";
import { motion } from "framer-motion";

// UI Components
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button, buttonVariants } from "@/components/ui/button";

// Importing Icons
import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-6">
            {/* info text */}
            <div className="flex-1 xl:w-[600px] flex flex-col gap-12">
              <div className="">
                <h2 className="h2 mb-6">Get in <span className="text-accent">Touch</span></h2>
                <p className="max-w-[460px]">Have a project in mind or just want to say hello? Feel free to reach out!</p>
              </div>
              {/* info */}
              <div className="flex flex-col gap-8 mb-6 xl:mb-0">
                {/* phone */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlinePhone className="text-2xl"/>
                  </span>
                  <span className="">+91 95484 74709</span>
                </div>
                {/* email */}
                 <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMail className="text-2xl"/>
                  </span>
                  <span className="">hritiksharma08725@gmail.com</span>
                </div>
                {/* location */}
                 <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMapPin className="text-2xl"/>
                  </span>
                  <span className="">Chandigarh, India</span>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="flex-1">
              <form className="flex flex-col gap-6 items-start">
                <div className="w-full flex flex-col xl:flex-row gap-6">
                  {/* First Name */}
                  <div className="w-full">
                    <Label htmlFor="firstname">
                      First Name:
                      <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="firstname"
                      name="firstname"
                      type="text"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  {/* Last Name */}
                  <div className="w-full">
                    <Label htmlFor="lastname">
                      Last Name:
                      <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      type="text"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                {/* email */}
                <div className="w-full">
                  <Label htmlFor="email">
                    Email:
                    <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="youremail@gmail.com"
                    required
                  />
                </div>
                {/* select */}
                <div className="w-full">
                  <Label htmlFor="service">
                    I'm intrested in: <span className="text-accent">*</span>
                  </Label>
                  <Select name="service" required>
                    <SelectTrigger
                      id="service"
                      className="w-full h-12! bg-white/5 border-white/10 px-4"
                    >
                      <SelectValue placeholder="Choose Here" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border border-white/20">
                      <SelectItem value="full-stack">
                        Full Stack Web Development
                      </SelectItem>
                      <SelectItem value="frontend">Frontend</SelectItem>
                      <SelectItem value="tools">Tools</SelectItem>
                      <SelectItem value="games">Web Games</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* textarea */}
                <div className="w-full">
                  <Label htmlFor="message">
                    Message:
                    <span className="text-accent">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message..."
                    className="min-h-[160px] bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50"
                  />
                </div>
                {/* button */}
                <Button variant="default" size="default" type='submit'>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">Send Message</span>
                    <HiOutlineArrowLongRight className="text-xl"/>
                  </div>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default contact;
