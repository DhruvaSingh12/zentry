"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

type AnimatedTitleProps = {
  title: string | React.ReactElement;
  containerClass?: string;
};

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ title, containerClass }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "0 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.fromTo(
        ".animated-word",
        {
          opacity: 0,
          transform: "translate3d(-200px, 200px, 100px) rotateY(-10deg) rotateX(0deg)",
        },
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.05,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderTitle = () => {
    if (typeof title === "string") {
      return title.split("<br />").map((line, index) => (
        <div key={index} className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
          {line.split(" ").map((word, idx) => (
            <span key={idx} className="animated-word">
              {word}
            </span>
          ))}
        </div>
      ));
    }
    return title;
  };

  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {renderTitle()}
    </div>
  );
};

export default AnimatedTitle;
