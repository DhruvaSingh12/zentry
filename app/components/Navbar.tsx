"use client";

import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const navItems: string[] = ["Nexus", "Vault", "Prologue", "About", "Contact"];


const NavBar = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState<boolean>(false);
    const audioElementRef = useRef<HTMLAudioElement | null>(null);
    const navContainerRef = useRef<HTMLDivElement | null>(null);

    const { y: currentScrollY } = useWindowScroll();
    const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    const toggleAudioIndicator = (): void => {
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    };

    useEffect(() => {
        if (audioElementRef.current) {
            if (isAudioPlaying) {
                audioElementRef.current.play();
            } else {
                audioElementRef.current.pause();
            }
        }
    }, [isAudioPlaying]);

    useEffect(() => {
        if (navContainerRef.current) {
            if (currentScrollY === 0) {
                setIsNavVisible(true);
                navContainerRef.current.classList.remove("floating-nav");
            } else if (currentScrollY > lastScrollY) {
                setIsNavVisible(false);
                navContainerRef.current.classList.add("floating-nav");
            } else if (currentScrollY < lastScrollY) {
                setIsNavVisible(true);
                navContainerRef.current.classList.add("floating-nav");
            }
        }
        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

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
                                    className="nav-hover-btn"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                        <button
                            onClick={toggleAudioIndicator}
                            className="ml-10 flex items-center space-x-0.5"
                        >
                            <audio
                                ref={audioElementRef}
                                className="hidden"
                                src="/audio/loop.mp3"
                                loop
                            />
                            {[1, 2, 3, 4].map((bar, index) => (
                                <div
                                    key={index}
                                    className={clsx("indicator-line", {
                                        active: isIndicatorActive,
                                    })}
                                />
                            ))}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
