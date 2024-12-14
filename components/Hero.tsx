"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

type HeroProps = {
    isVideoOpen: boolean;
    toggleVideoPlayer: () => void;
};

const Hero: React.FC<HeroProps> = ({ isVideoOpen, toggleVideoPlayer }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(1);
    const [hasClicked, setHasClicked] = useState<boolean>(false);
    const [loadedVideos, setLoadedVideos] = useState<number>(0);

    const totalVideos = 4;

    const texts = [
        <span key="gaming"><b>Gaming</b></span>,
        <span key="reality"><b>Reality</b></span>,
        <span key="identity"><b>Identity</b></span>,
        <span key="lifestyle"><b>Lifestyle</b></span>
    ];

    const handleWatchTrailer = () => {
        toggleVideoPlayer();
    };

    const handleCloseVideo = () => {
        toggleVideoPlayer();
    };

    const nextVdRef = useRef<HTMLVideoElement | null>(null);

    const handleVideoLoad = (): void => {
        setLoadedVideos((prev) => prev + 1);
    };

    const handleMiniVdClick = (): void => {
        setHasClicked(true);
        setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
    };

    useEffect(() => {
        if (hasClicked) {
            const nextVideo = nextVdRef.current;
            const currentVideo = document.getElementById("current-video");
            if (nextVideo && currentVideo) {
                gsap.set(nextVideo, {
                    visibility: "visible",
                    width: "64px",
                    height: "64px",
                });
                gsap.timeline()
                    .to(nextVideo, {
                        transformOrigin: "center center",
                        scale: 1,
                        width: "100%",
                        height: "100%",
                        duration: 1,
                        ease: "power1.inOut",
                        onStart: () => {
                            const playPromise = nextVideo.play();
                            if (playPromise !== undefined) {
                                playPromise.catch((error) =>
                                    console.error("Failed to play video:", error)
                                );
                            }
                        },
                    })
                    .to(currentVideo, {
                        transformOrigin: "center center",
                        scale: 6,
                        duration: 0.5,
                        ease: "power1.inOut",
                    })
                    .add(() => {
                        gsap.set(currentVideo, {
                            scale: 6,
                            opacity: 1,
                            duration: 0.5,
                            visibility: "visible",
                        });
                    });
            }
        }
    }, [hasClicked, currentIndex]);

    useEffect(() => {
        gsap.set("#video-frame", {
            clipPath: "polygon(18% 0, 72% 0, 88% 90%, 0 95%)",
            borderRadius: "2% 2% 40% 10%",
        });
        gsap.from("#video-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "2% 2% 2% 2%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true,
            },
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: "#video-frame",
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
        })
            .from("#foreground-text", {  ease: "power1.inOut" })
            .to("#background-text", { ease: "power1.inOut" }, "<");
    }, []);

    useEffect(() => {
        if (loadedVideos === totalVideos) {
            console.log("All videos loaded");
        }
    }, [loadedVideos]);

    const getVideoSrc = (index: number): string => `videos/hero-${index}.mp4`;

    return (
        <div suppressHydrationWarning={true} className="h-dvh w-screen overflow-x-hidden">
            <div id="video-frame" className="z-10 h-dvh w-screen overflow-hidden bg-blue-75">
                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10">
                        <div className="special-font hero-heading text-white transition-all duration-1000 transform">
                            <b>redefine</b>
                        </div>
                        <div className="mb-5 max-w-64 font-robert-regular transition-all duration-1000 transform text-blue-100">
                            Enter the Metagame <br /> Unleash the Play Economy
                        </div>
                        <Button
                            id="watch-trailer"
                            title="Watch Trailer"
                            onClick={handleWatchTrailer}
                            leftIcon={<span className="mr-2">⋙</span>}
                            containerClass="bg-yellow-300 text-black"
                            className="custom-class text-[18px] font-bold"
                        />
                        {isVideoOpen && (
                            <VideoPlayer videoSrc="/videos/trailer.mp4" onClose={handleCloseVideo} />
                        )}
                    </div>
                </div>
                <div>
                    <div className={`absolute-center absolute z-50 lg:size-72 size-48 cursor-pointer overflow-hidden rounded-2xl 
                        ${isVideoOpen ? "pointer-events-none opacity-0" : "opacity-100"
                        }`}>
                        <div
                            onClick={handleMiniVdClick}
                            className="origin-center scale-50 opacity-0 justify-center items-center transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
                        >
                            <video
                                ref={nextVdRef}
                                src={getVideoSrc((currentIndex % totalVideos) + 1)}
                                loop
                                muted
                                id="current-video"
                                className="origin-center scale-150 object-cover"
                                onLoadedData={handleVideoLoad}
                            />
                        </div>
                    </div>
                    <video
                        ref={nextVdRef}
                        src={getVideoSrc(currentIndex)}
                        loop
                        muted
                        id="next-video"
                        className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                        onLoadedData={handleVideoLoad}
                    />
                    <video
                        src={getVideoSrc(
                            currentIndex === totalVideos - 1 ? 1 : currentIndex
                        )}
                        autoPlay
                        loop
                        muted
                        className="absolute left-0 top-0 size-full object-cover object-center"
                        onLoadedData={handleVideoLoad}
                    />
                </div>
                <div className="absolute bottom-5 right-5 z-50 flex items-center justify-end">
                    <div
                        id="foreground-text"
                        className="special-font hero-heading text-white transition-all duration-1000 transform"
                    >
                        {texts[(currentIndex - 1) % texts.length]}
                    </div>
                </div>
            </div>
            <div className={`absolute bottom-5 right-5 flex z-0 items-center justify-end ${isVideoOpen ? "pointer-events-none opacity-0" : "opacity-100"
                }`}>
                <div
                    id="background-text"
                    className="special-font hero-heading text-white transition-all duration-1000 transform"
                >
                    {texts[(currentIndex - 1) % texts.length]}
                </div>
            </div>
        </div>
    );
};

export default Hero;
