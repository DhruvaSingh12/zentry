"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Discover = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(containerRef.current, {
                backgroundColor: "#000000",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "bottom 90%",
                    end: "bottom bottom",
                    scrub: true,
                },
            });

            gsap.to(textRef.current, {
                color: "rgb(223,223,240)",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "bottom 90%",
                    end: "bottom bottom",
                    scrub: true,
                },
            });

            gsap.to(buttonRef.current, {
                backgroundColor: "rgb(223,223,240)",
                color: "rgb(223,223,240)",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%",
                    end: "bottom bottom",
                    scrub: true,
                },
            });

            gsap.to(titleRef.current, {
                color: "rgb(223,223,240)",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "90% bottom",
                    end: "bottom bottom",
                    scrub: true,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="h-[140vh] w-full bg-blue-50 transition-colors duration-500"
        >
            <div
                ref={textRef}
                className="text-center mb-8 font-bold font-general text-[12px] text-black"
            >
                WHO WE ARE
            </div>
            <div className="h-[110vh] items-center w-full">
                <AnimatedTitle
                    ref={titleRef}
                    title="We're building <br /> a new ▢ reality <br /> that rewards <br /> 
                players ▢ and <br /> encourages <br /> communities <br /> to ▢ thrive"
                    containerClass="!text-black"
                />

                <p ref={textRef} className="text-center mt-8 text-black font-robert-medium text-lg">
                    Zentry is on a mission to unite diverse player networks to <br /> forge the world&apos;s largest shared adventure.
                </p>

                <div className="items-center flex flex-col justify-center mt-5">
                    <Link href="/about">
                        <Button
                            id="about"
                            title="discover who we are"
                            ref={buttonRef}
                            containerClass="font-bold border border-3 border-blue-50 !bg-black text-blue-50 transition-colors duration-500"
                        />
                    </Link>
                </div>
            </div>
            <div className="h-[30vh] w-full" />
        </div>
    );
};

export default Discover;
