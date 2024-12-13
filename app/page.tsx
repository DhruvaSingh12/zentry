"use client";

import React, { useState } from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import About from "./components/About";

const Page = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideoPlayer = () => {
    setIsVideoOpen((prevState) => !prevState);
  };

  return (
    <main className={`${isVideoOpen ? "overflow-hidden" : "bg-blue-50"} h-screen bg-blue-50 w-full`}>
      <NavBar />
      <Hero isVideoOpen={isVideoOpen} toggleVideoPlayer={toggleVideoPlayer} />
      <About/>
      <Footer />
    </main>
  );
};

export default Page;
