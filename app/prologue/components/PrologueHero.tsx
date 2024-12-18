"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "@/components/Button";
import VideoPlayer from "@/components/VideoPlayer";
import Image from "next/image";

type PrologueHeroProps = {
    isVideoOpen: boolean;
    toggleVideoPlayer: () => void;
};

const PrologueHero: React.FC<PrologueHeroProps> = ({ isVideoOpen, toggleVideoPlayer }) => {
    const imageRef = useRef<HTMLImageElement | null>(null);

    const handleWatchTrailer = () => {
        toggleVideoPlayer();
    };

    const handleCloseVideo = () => {
        toggleVideoPlayer();
    };

    useEffect(() => {
        const image = imageRef.current;

        if (!image) return;

        gsap.set(image, {
            xPercent: -50,
            yPercent: -50,
        });

        const moveImage = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;

            const moveX = ((clientX / innerWidth) - 0.5) * 50;
            const moveY = ((clientY / innerHeight) - 0.5) * 50;

            gsap.to(image, {
                x: moveX,
                y: moveY,
                duration: 1,
                ease: "power3.out",
            });
        };

        window.addEventListener("mousemove", moveImage);
        return () => {
            window.removeEventListener("mousemove", moveImage);
        };
    }, []);

    return (
        <div className="bg-black">
            <div className="lg:h-screen pt-10 lg:pt-8 px-10 pb-10 w-screen contact-heading relative">
                <h1 className="text-center font-zentry text-[100px] md:text-[200px] xl:text-[270px] text-blue-50 relative z-10">
                    PROLOGUE
                </h1>
                <div className="flex flex-col gap-y-6 items-center justify-center z-10">
                    <h1 className="text-center font-robert-medium text-blue-50 z-10">
                        In the twilight of realms, where all converges, <br/>stands Pillar of Zentry: a universe of endless opportunities.
                    </h1>
                    <Button
                        id="prologue-trailer"
                        title="Prologue Trailer"
                        onClick={handleWatchTrailer}
                        leftIcon={<span className="mr-2">⋙</span>}
                        containerClass="bg-yellow-300 text-black"
                        className="custom-class text-[18px] !font-bold"
                    />
                    {isVideoOpen && (
                        <VideoPlayer videoSrc="/videos/prologue.mp4" onClose={handleCloseVideo} />
                    )}
                </div>
                <div className="contact-heading-image-wrapper absolute inset-0 overflow-hidden z-0">
                    <Image
                        ref={imageRef}
                        height={1080}
                        width={1920}
                        src="/img/entrance.webp"
                        alt="Hero Image"
                        className="contact-heading-image rounded-[30px] h-screen absolute top-1/2 left-1/2 w-[150vw] lg:w-[100vw] object-cover pointer-events-none"
                    />
                </div>
            </div>
        </div>
    );
};

export default PrologueHero;
