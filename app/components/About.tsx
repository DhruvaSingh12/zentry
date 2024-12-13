import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  useEffect(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="about" className="min-h-screen bg-blue-50 w-screen">
      <div className="relative mb-8 bg-blue-50 flex flex-col items-center gap-5">
        <p className="font-general text-sm font-bold uppercase mt-36  md:text-[20px]">
          Welcome to Zentry
        </p>

        <AnimatedTitle
          title="Discover the world's <br /> largest shared adventure"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p className="text-black font-bold">The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-600">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
