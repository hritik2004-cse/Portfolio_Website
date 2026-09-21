"use client";
import api from "@/lib/axios";
import { isAxiosError } from "axios";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
import { Button } from "@/components/ui/button";

// Importing Icons
import { LuLoaderCircle } from "react-icons/lu";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2";
import { FaRegCircleXmark } from "react-icons/fa6";
import Toast from "@/components/Toast";

const contact = () => {
  const [toastMsg, setToastMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    intrest: "",
    message: "",
  });

  const alertData = {
    success: {
      title: "Message Delivered",
      description:
        "Thank you for contacting me. I will review your message and respond as soon as possible.",
      icon: FaRegCheckCircle,
    },
    error: {
      title: "Delivery Failed",
      description:
        "We couldn't deliver your message right now. Please check your connection and try again.",
      icon: FaRegCircleXmark,
    },
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await api.post("/contact", formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        intrest: "",
        message: "",
      });
      setToastMsg("success");
    } catch (error) {
      setToastMsg("error");
    } finally {
      setShowToast(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const formChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center py-24 xl:py-0"
    >
      <div className="fixed top-0 left-1/2 -translate-x-1/2 mt-6 z-50 max-w-md w-full px-4 pointer-events-none">
        <AnimatePresence>
          {showToast && alertData[toastMsg] && (
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="pointer-events-auto"
            >
              <Toast
                Icon={alertData[toastMsg].icon}
                title={alertData[toastMsg].title}
                description={alertData[toastMsg].description}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-6">
            {/* info text */}
            <div className="flex-1 xl:w-150 flex flex-col gap-12">
              <div className="">
                <h2 className="h2 mb-6">
                  Get in <span className="text-accent">Touch</span>
                </h2>
                <p className="max-w-115">
                  Have a project in mind or just want to say hello? Feel free to
                  reach out!
                </p>
              </div>
              {/* info */}
              <div className="flex flex-col gap-8 mb-6 xl:mb-0">
                {/* phone */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent" aria-hidden="true">
                    <HiOutlinePhone className="text-2xl" />
                  </span>
                  <span>+91 95484 74709</span>
                </div>
                {/* email */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent" aria-hidden="true">
                    <HiOutlineMail className="text-2xl" />
                  </span>
                  <span>hritiksharma08725@gmail.com</span>
                </div>
                {/* location */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent" aria-hidden="true">
                    <HiOutlineMapPin className="text-2xl" />
                  </span>
                  <span>Chandigarh, India</span>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="flex-1">
              <form
                className="flex flex-col gap-6 items-start"
                onSubmit={formSubmitHandler}
                aria-label="Contact form"
              >
                <div className="w-full flex flex-col xl:flex-row gap-6">
                  {/* First Name */}
                  <div className="w-full">
                    <Label htmlFor="firstName">
                      First Name:
                      <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      type="text"
                      onChange={formChangeHandler}
                      placeholder="First Name"
                      required
                    />
                  </div>
                  {/* Last Name */}
                  <div className="w-full xl:z-999">
                    <Label htmlFor="lastName">
                      Last Name:
                      <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={formChangeHandler}
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
                    value={formData.email}
                    onChange={formChangeHandler}
                    placeholder="youremail@gmail.com"
                    required
                  />
                </div>
                {/* select */}
                <div className="w-full">
                  <Label htmlFor="service">
                    I'm intrested in: <span className="text-accent">*</span>
                  </Label>
                  <Select
                    name="service"
                    required
                    value={formData.intrest}
                    onValueChange={(value) =>
                      setFormData({ ...formData, intrest: value })
                    }
                  >
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
                    onChange={formChangeHandler}
                    value={formData.message}
                    name="message"
                    placeholder="Write your message (25 - 500 words)..."
                    className="min-h-40 bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50"
                  />
                </div>
                {/* button */}
                <Button variant="default" size="default" type="submit">
                  {loading ? (
                    <div className="flex items-center gap-3">
                      <span className="font-medium">Sending Message</span>
                      <LuLoaderCircle className="text-xl animate-spin" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <span className="font-medium">Send Message</span>
                      <HiOutlineArrowLongRight className="text-xl" />
                    </div>
                  )}
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
