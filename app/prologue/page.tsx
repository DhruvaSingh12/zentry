"use client";

import React, { useState } from 'react';
import PrologueHero from './components/PrologueHero';

const ProloguePage: React.FC = () => {

    const [isVideoOpen, setIsVideoOpen] = useState(false);
    
      const toggleVideoPlayer = () => {
        setIsVideoOpen((prevState) => !prevState);
      };

    return (
        <div className={`${isVideoOpen ? "overflow-hidden" : "bg-blue-50"} h-screen w-full`}>
            <PrologueHero isVideoOpen={isVideoOpen} toggleVideoPlayer={toggleVideoPlayer} />
        </div>
    );
};

export default ProloguePage;