"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Footer from "@/components/Footer";
import Main from "./components/Main";

const Contact = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;
    gsap.set(video, {
      xPercent: -50,
      yPercent: -50,
    });

    const moveVideo = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      const moveX = ((clientX / innerWidth) - 0.5) * 50; 
      const moveY = ((clientY / innerHeight) - 0.5) * 50;

      gsap.to(video, {
        x: moveX,
        y: moveY,
        duration: 1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveVideo);
    return () => {
      window.removeEventListener("mousemove", moveVideo);
    };
  }, []);

  return (
    <div className="bg-black">
      <div className="lg:h-screen pt-10 lg:pt-8 px-10 pb-10 w-screen contact-heading relative">
        <h1 className="text-center font-zentry text-[100px] md:text-[200px] xl:text-[270px] text-blue-50 relative z-10">
          CONTACT US
        </h1>
        <div className="contact-heading-video-wrapper absolute inset-0 overflow-hidden z-0">
          <video
            ref={videoRef}
            src="/videos/contact.mp4"
            className="rounded-[30px] h-screen absolute top-1/2 left-1/2 w-[150vw] lg:w-[100vw] object-cover pointer-events-none"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
      <Main />
      <Footer />
    </div>
  );
};

export default Contact;
