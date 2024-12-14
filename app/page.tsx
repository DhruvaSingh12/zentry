"use client";

import React, { useState } from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import About from "../components/About";
import Features from "../components/Features";

const Page = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideoPlayer = () => {
    setIsVideoOpen((prevState) => !prevState);
  };

  return (
    <main className={`${isVideoOpen ? "overflow-hidden" : "bg-blue-50"} h-screen w-full`}>
      <Hero isVideoOpen={isVideoOpen} toggleVideoPlayer={toggleVideoPlayer} />
      <About/>
      <Features />
      <Footer />
    </main>
  );
};

export default Page;
