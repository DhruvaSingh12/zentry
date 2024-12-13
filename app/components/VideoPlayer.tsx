"use client";

import clsx from "clsx";
import React, { useRef, useState, useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

interface VideoPlayerProps {
  videoSrc: string;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverWidth, setHoverWidth] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [idleTimeout, setIdleTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const hoverPosition = e.clientX - rect.left;
    setHoverWidth(hoverPosition);

    if (idleTimeout) {
      clearTimeout(idleTimeout); 
    }

    setShowControls(true);
    const newTimeout = setTimeout(() => {
      setShowControls(false);
    }, 5000);

    setIdleTimeout(newTimeout);
  };

  const handleMouseLeave = () => {
    setHoverWidth(0);
  };

  const handleTogglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (event: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const boundingRect = event.currentTarget.getBoundingClientRect();
      const clickPosition = event.clientX - boundingRect.left;
      const newTime = (clickPosition / boundingRect.width) * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    return () => {
      if (idleTimeout) {
        clearTimeout(idleTimeout);
      }
    };
  }, [idleTimeout]);

  return (
    <div
      className="fixed inset-0 z-[9999] h-dvh w-dvw flex items-center overflow-hidden justify-center bg-black bg-opacity-100"
      onClick={handleTogglePlayPause}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-20 right-6 z-[10000] text-white text-lg font-bold bg-gray-800 rounded-full py-3 
        px-[18px] hover:ring-1 transition-transform duration-500 hover:ring-white hover:scale-105"
      >
        ✖
      </button>

      <div className="w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-cover"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          autoPlay
        />

        {(isHovered || showControls) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-yellow-300">
            <div className="flex flex-row justify-between items-center px-6 bottom-4 fixed w-full">
              <div className="special-font hero-heading mb-6">
                {formatTime(currentTime)}
              </div>
              <div className="special-font flex bottom-4 flex-row hover:cursor-pointer gap-2 hero-heading mb-6">
                {isPlaying ? (
                  <>
                    <FaPause className="mr-4" />
                    <span>PAUSE</span>
                  </>
                ) : (
                  <>
                    <FaPlay className="mr-4" />
                    <span>PLAY</span>
                  </>
                )}
              </div>
            </div>

            <div
              className="w-full fixed h-4 right-0 bottom-0 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleSeek(e);
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={clsx(
                  "absolute h-4 bottom-0 bg-yellow-100/50 pointer-events-none"
                )}
                style={{ width: `${hoverWidth}px` }}
              />
              <div
                className={clsx(
                  "absolute h-4 bottom-0 bg-yellow-300 pointer-events-none"
                )}
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
