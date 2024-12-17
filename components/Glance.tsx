"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import AnimatedTitle from "./AnimatedTitle";
import { FaCircle } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Glance = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
    });

    return () => ctx.revert();
  }, []);


  return (
    <div  ref={containerRef} className="flex flex-col px-6 py-20 bg-black text-blue-50">
      <div className="flex flex-col items-center gap-5 mb-8">
        <p className="text-blue-50 text-start font-general font-semibold uppercase text-[10px]">Our universe in a nutshell</p>
        <div className="flex flex-col gap-y-1 items-center lg:items-start justify-center">
          <AnimatedTitle
            title="Zentry at a"
            containerClass="!text-[120px] !text-blue-50"
          />
          <AnimatedTitle
            title="glance"
            containerClass="!text-[120px] !text-blue-50"
          />
        </div>
      </div>
      <div className="flex lg:flex-row lg:gap-x-8 flex-col gap-y-8 justify-center">

        <div className="flex flex-col gap-y-8 items-center lg:items-end lg:pt-[100px]">

          <div className="w-[350px] lg:w-[500px] border z-10 border-blue-50/40 rounded-lg hover:scale-105 transition-transform duration-500 flex flex-row items-center gap-x-4 relative">
            <div className="w-1/2 items-start">
              <p className="font-general text-blue-50 font-bold text-[14px] absolute top-3 left-4">Products</p>
              <p className="font-zentry text-blue-50 special-font text-[90px] absolute top-5 left-4"><b>4+</b></p>
            </div>
            <div className="w-1/2 p-0">
              <video
                className="w-full object-cover rounded-2xl h-full"
                autoPlay
                loop
                muted
                playsInline
                src="/videos/products.mp4"
              />
            </div>
          </div>

          <div className="w-[230px] lg:w-[300px] lg:h-[300px] h-[230px] bg-yellow-300 border hover:scale-105 transition-transform duration-500 rounded-lg p-3 relative">
            <p
              className="absolute font-zentry text-black special-font text-[150px] lg:text-[190px]"
              style={{
                transform: 'matrix3d(1, -0.2, 0, 0.0039, 0, 0.821053, 0, 0, 0, 0, 1, 0, 40, -10.1832, 0, 1)',
              }}
            >
              <b>20+</b>
            </p>
            <p className="font-general text-black font-bold text-[12px] absolute bottom-3 right-4">Partners</p>
          </div>

          <div className="w-[350px] lg:w-[500px] h-[70vh] lg:h-[90vh] z-10 bg-[rgb(88,68,252)] hover:scale-105 transition-transform duration-500 rounded-lg relative">
            <div className="h-[30%]">
              <p className="font-general text-black font-bold text-[12px] absolute top-3 left-4">Treasury</p>
              <p className="absolute left-4 text-black font-zentry special-font text-[100px] lg:text-[150px]">100<b>M+</b></p>
            </div>
            <div className="h-[55%] relative flex items-center justify-center">
              <Image
                src="/img/zentry-black.png"
                alt="Next Image"
                width={500}
                height={500}
                className="w-36 h-36 z-10"
              />
              <div
                className="absolute w-80 h-80 border-[32px] border-black border-t-transparent rounded-full animate-spin-medium" />
              <div
                className="absolute w-56 h-56 border-[32px] border-r-gray-300 border-l-yellow-300 border-t-transparent border-b-transparent rounded-full animate-spin-medium-reverse" />
            </div>
            <div className="h-[15%] mt-6 lg:mt-8 flex flex-row gap-2 text-[12px] px-3 lg:px-6 uppercase justify-between font-general text-blue-50">
              <div className="flex flex-row gap-2">
                <FaCircle size={16} className="text-black" />
                <p>Liquid token <br /> 70%</p>
              </div>
              <div className="flex flex-row gap-2">
                <FaCircle size={16} className="text-yellow-300" />
                <p>Investments <br /> 20%</p>
              </div>
              <div className="flex flex-row gap-2">
                <FaCircle size={16} className="text-blue-50" />
                <p>NFT Assets <br /> 10%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 items-center lg:items-start">

          <div className="w-[350px] lg:w-[500px] h-[60vh] lg:h-[90vh] bg-[rgb(88,68,252)] hover:scale-105 transition-transform duration-500 rounded-lg relative">
            <div className="absolute">
              <p className="font-general text-black font-bold text-[12px] absolute top-3 left-4">Residents</p>
              <p className="absolute left-4 text-black font-zentry special-font text-[135px] lg:text-[200px]"><b>500K+</b></p>
            </div>
            <div className="h-[100%] absolute bottom-0 flex items-center justify-center">
              <Image
                src='/img/gallery-1.webp'
                alt="image"
                width={500}
                height={500}
                className="w-full h-full object-center  z-10"
              />
            </div>
          </div>

          <div className="w-[230px] lg:w-[300px] lg:h-[300px] h-[230px] bg-black border border-blue-50/40 hover:scale-105 transition-transform duration-500 rounded-lg p-3 relative">
            <div className="text-start flex flex-col gap-y-0">
              <p className="font-zentry absolute top-1 left-4 text-blue-50 text-start special-font text-[36px] lg:text-[50px]">
                W<b>o</b>rld Cl<b>a</b>ss
              </p>
              <p className="font-zentry absolute top-[50px] left-4 text-blue-50 text-start special-font text-[36px] lg:text-[50px]">
                B<b>a</b>ckers
              </p>
            </div>

            <p className="font-general text-blue-50 font-semibold text-end uppercase text-[8px] lg:text-[10px] absolute bottom-5 right-4">
              coinbase ventures<br />
              binance labs<br />
              defiance capital<br />
              hashed<br />
              pantera capital<br />
              animoca brands<br />
              play ventures<br />
              skyvision capital<br />
              vessel capital<br />
              arche fund
            </p>
          </div>

          <div className="w-[350px] lg:w-[500px] h-[250px] lg:h-[300px] border border-black bg-blue-50 rounded-lg hover:scale-105 transition-transform duration-500  p-3 relative">
            <div className="w-1/2 items-start">
              <p className="font-general text-black font-bold text-[14px] absolute top-2 left-4">Revenue generated</p>
              <p className="font-general text-black font-bold text-[14px] absolute top-6 left-4">2024</p>
            </div>
            <div className="h-[100%] absolute w-[100%] flex items-center justify-center">
              <div className="text-black font-zentry special-font text-[240px] lg:text-[335px]">
                <b>10M</b>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="w-full h-[20vh]"/>
    </div >
  );
};

export default Glance;
