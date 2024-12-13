"use client";

import React, { useState } from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import NavBar from './components/Navbar';

const Page = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideoPlayer = () => {
    setIsVideoOpen((prevState) => !prevState);
  };

  return (
    <main
      className={`${
        isVideoOpen ? "overflow-hidden" : ""
      } h-screen w-full`}
    >
      <NavBar />
      <Hero isVideoOpen={isVideoOpen} toggleVideoPlayer={toggleVideoPlayer} />
      <Footer />
    </main>
  );
};

export default Page;
