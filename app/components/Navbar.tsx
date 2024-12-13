"use client";

import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const navItems: string[] = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const NavBar = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState<boolean>(false);
    const [isNavVisible, setIsNavVisible] = useState<boolean>(true);

    const audioElementRef = useRef<HTMLAudioElement | null>(null);
    const navContainerRef = useRef<HTMLDivElement | null>(null);
    const lastScrollYRef = useRef<number>(0);

    const { y: currentScrollY } = useWindowScroll();

    const toggleAudioIndicator = (): void => {
        if (audioElementRef.current) {
            if (isAudioPlaying) {
                audioElementRef.current.pause();
                setIsAudioPlaying(false);
                setIsIndicatorActive(false);
            } else {
                audioElementRef.current
                    .play()
                    .then(() => {
                        setIsAudioPlaying(true);
                        setIsIndicatorActive(true);
                    })
                    .catch((err) => {
                        console.error("Audio playback failed:", err);
                    });
            }
        }
    };

    useEffect(() => {
        const audioElement = audioElementRef.current;

        if (audioElement) {
            audioElement
                .play()
                .then(() => {
                    setIsAudioPlaying(true);
                    setIsIndicatorActive(true);
                })
                .catch(() => {
                    console.log("Autoplay blocked; waiting for user interaction.");
                });
        }
    }, []);

    useEffect(() => {
        if (navContainerRef.current) {
            if (currentScrollY === 0) {
                setIsNavVisible(true);
                navContainerRef.current.classList.remove("floating-nav");
            } else if (currentScrollY > lastScrollYRef.current) {
                setIsNavVisible(false);
                navContainerRef.current.classList.add("floating-nav");
            } else if (currentScrollY < lastScrollYRef.current) {
                setIsNavVisible(true);
                navContainerRef.current.classList.add("floating-nav");
            }
        }
        lastScrollYRef.current = currentScrollY;
    }, [currentScrollY]);

    useEffect(() => {
        if (navContainerRef.current) {
            gsap.to(navContainerRef.current, {
                y: isNavVisible ? 0 : -100,
                opacity: isNavVisible ? 1 : 0,
                duration: 0.2,
            });
        }
    }, [isNavVisible]);

    return (
        <div
            ref={navContainerRef}
            className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
        >
            <div className="absolute top-1/2 w-full -translate-y-1/2">
                <div className="flex size-full items-center justify-between p-4">
                    <div className="flex items-center gap-10">
                        <Link href="/">
                            <Image
                                src="/img/logo-white.png"
                                alt="logo"
                                className="w-10"
                                width={500}
                                height={500}
                            />
                        </Link>
                        <div className="flex flex-row gap-x-4">
                            <Button
                                id="product-button"
                                title="Products"
                                containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                                className="font-bold"
                            />
                            <Link href="https://zentry.com/whitepaper">
                                <Button
                                    id="whitepaper"
                                    title="Whitepaper"
                                    containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                                    className="font-bold"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="flex h-full items-center">
                        <div className="hidden md:block">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={`#${item.toLowerCase()}`}
                                    className="nav-hover-btn font-bold"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                        <button
                            onClick={toggleAudioIndicator}
                            className="ml-6 flex items-center justify-center space-x-2 transition-transform duration-100 hover:scale-105"
                        >
                            <audio
                                ref={audioElementRef}
                                className="hidden"
                                src="/audio/loop.mp3"
                                loop
                            />
                            <div className="flex space-x-[5px]">
                                {[1, 2, 3, 4, 5].map((bar, index) => (
                                    <div
                                        key={index}
                                        className={clsx(
                                            "h-6 w-1 rounded bg-white transition-all",
                                            {
                                                "animate-bounce h-7": isIndicatorActive,
                                                "opacity-50": !isIndicatorActive,
                                            }
                                        )}
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                        }}
                                    />
                                ))}
                            </div>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
