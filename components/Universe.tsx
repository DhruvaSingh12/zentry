"use client";

import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Universe: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    const slides = [
        {
            id: 1,
            title: "Shaping Zentry Collectively",
            description:
                "Participate in governance, influence key decisions in the ever-growing Zentry Universe that is limited only by people's imaginations.",
            image: (
                <div className="relative w-48 h-48 duration-700 animate-spin-slow">
                    <div className="bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-black rotate-45" />
                    <div className="bg-yellow-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-black rotate-90" />
                    <div className="bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] border-4 border-black rotate-45" />
                    <div className="bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-black rotate-45" />
                </div>
            ),
        },
        {
            id: 2,
            title: "Unlocking Economic Opportunity",
            description:
                "ZENT, a commodity-based currency that unlocks exclusive benefits, airdrops, quotas, and co-creation within and beyond Zentry ecosystem.",
            image: (
                <div className="relative w-48 h-48 duration-700 animate-spin-slow">
                    <div className="bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-black rounded-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-black rotate-45" />
                    <div className="bg-yellow-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[68px] h-[68px] border-4 border-black rotate-90" />
                    <div className="bg-yellow-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-black rotate-45" />
                </div>
            ),
        },
        {
            id: 3,
            title: "Sharing Value Accrued",
            description:
                "ZENT holders thrive as Zentry grows, benefiting from the expansive partnerships, treasury investment, and economic activities.",
            image: (
                <div className="relative w-48 h-48 duration-700 animate-spin-slow">
                    <div className="bg-yellow-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-black rotate-45" />
                    <div className="bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-black rotate-90" />
                    <div className="bg-yellow-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-4 border-black rotate-45" />
                    <div className="bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-black rotate-45" />
                </div>
            ),
        }
    ];

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePrevious = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(containerRef.current, {
                backgroundColor: "rgb(223,223,240)",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "bottom 90%",
                    end: "bottom bottom",
                    scrub: true,
                },
            });

            gsap.to(textRef.current, {
                color: "#000000",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "bottom 90%",
                    end: "bottom bottom",
                    scrub: true,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="bg-yellow-300 h-[160vh] w-screen transition-colors duration-500 flex flex-col gap-y-4 p-5 lg:p-10 text-black relative"
        >
            <div ref={textRef} className="flex flex-col items-start gap-3 pb-5">
                <div className="hero-heading special-font">
                    THE <b>UN</b>IVERSE <br /> P<b>OWE</b>RED BY Z<b>EN</b>T
                </div>
                <Link href="https://vault.zentry.com/">
                    <Button
                        id="vault"
                        title="Enter Vault"
                        containerClass="!bg-black !text-blue-50"
                        className="custom-class text-[18px] !font-bold"
                    />
                </Link>
            </div>

            <div className="relative flex-1 flex items-center justify-center overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute transition-opacity duration-500 ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <div className="flex flex-row h-full w-full items-center justify-center">
                            <div
                                onClick={handlePrevious}
                                className="w-1/2 cursor-pointer rounded-3xl hover:bg-black/10 lg:p-10 p-5 flex flex-col lg:flex-row items-start gap-y-3 lg:gap-x-6"
                            >
                                <h2 className="font-robert-medium mt-2">
                                    {`0${slide.id}`}
                                </h2>
                                <div className="flex flex-col text-start gap-y-2">
                                    <h3 className="font-circular-web font-medium text-[25px]">
                                        {slide.title}
                                    </h3>
                                    <p className="font-circular-web text-[16px]">
                                        {slide.description}
                                    </p>
                                </div>
                            </div>

                            <div
                                onClick={handleNext}
                                className="w-1/2 rounded-3xl flex cursor-pointer hover:bg-black/10 items-center justify-center"
                            >
                                {slide.image}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full h-[40vh]" />
        </div>
    );
};

export default Universe;
