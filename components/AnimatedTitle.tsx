"use client";

import { gsap } from "gsap";
import { useEffect, useRef, forwardRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

type AnimatedTitleProps = {
  title: string | React.ReactElement;
  containerClass?: string;
  className?: string;
};

const AnimatedTitle = forwardRef<HTMLDivElement, AnimatedTitleProps>(
  ({ title, containerClass, className }, ref) => {
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
            transform: "translate3d(-250px, 250px, 150px) rotateY(-10deg) rotateX(0deg)",
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
          <div
          key={index}
          className={clsx(className, "flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3")}
          >
            {line.split(" ").map((word, idx) => (
              <span
                key={idx}
                className="animated-word text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-bold"
              >
                {word}
              </span>
            ))}
          </div>
        ));
      }
      return title;
    };

    return (
      <div
        ref={(el) => {
          containerRef.current = el; 
          if (typeof ref === "function") ref(el); 
          else if (ref) ref.current = el; 
        }}
        className={clsx("animated-title", containerClass)}
      >
        {renderTitle()}
      </div>
    );
  }
);

AnimatedTitle.displayName = "AnimatedTitle";

export default AnimatedTitle;
