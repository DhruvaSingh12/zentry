"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, MouseEvent } from "react";
import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const FloatingImage: React.FC = () => {
  const frameRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLImageElement>) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const imageAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "center center",
          toggleActions: "play none none reverse",
        },
      });

      imageAnimation.fromTo(
        frameRef.current,
        {
          opacity: 0,
          transform: "translate3d(0, 200px, 0) scale(0.8)",
        },
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) scale(1)",
          ease: "power2.inOut",
          duration: 1.5,
        }
      );

      gsap.to(containerRef.current, {
        backgroundColor: "rgba(234,255,108,255)", 
        scrollTrigger: {
          trigger: containerRef.current,
          start: "95% bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.to(textRef.current, {
        color: "#000000", 
        scrollTrigger: {
          trigger: containerRef.current,
          start: "95% bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="story"
      className="min-h-dvh w-screen bg-black text-blue-50 transition-colors duration-500"
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-center py-8 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          the open ip universe
        </p>

        <div className="relative size-full lg:mb-2 mb-10">
          <AnimatedTitle
            title="the story of <br /> a hidden realm"
            containerClass="mt-5 pointer-events-none !text-blue-50 mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img/entrance.webp"
                  alt="entrance.webp"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end transition-colors duration-500"
        >
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p ref={textRef} className="max-w-sm text-center font-circular-web text-blue-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>

            <Link href="/prologue">
              <Button
                id="realm-btn"
                title="discover prologue"
                containerClass="mt-5 font-bold"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;
