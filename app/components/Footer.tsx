"use client";

import { FaDiscord, FaTwitter, FaYoutube, FaMedium, FaLinkedin, FaInstagram } from "react-icons/fa";
import CustomLink from "./Link";
import Image from "next/image";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
  { href: "https://linkedin.com", icon: <FaLinkedin /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
];

const Footer: React.FC = () => {
  return (
    <div className="relative w-screen flex flex-col bg-[rgb(82,66,253)] py-6 text-black">
      <div className="relative container mx-auto flex flex-wrap items-start justify-between gap-5 lg:gap-10 px-2 lg:px-6 py-16 text-sm z-10 md:flex-nowrap">
        <div className="flex justify-center w-full md:w-auto">
          <Image
            src='/img/zentry.png'
            alt="Zentry Logo"
            width={200}
            height={200}
            priority
            className="w-auto h-auto"
          />
        </div>

        <div className="flex flex-row gap-4 w-full lg:w-fit items-center justify-center px-2">
          <div className="flex flex-col items-center gap-4 w-full md:w-auto">
            <h3 className="font-bold items-center uppercase tracking-wide text-[14px]">Explore</h3>
            <ul className="space-y-[2px] items-center">
              <li>
                <CustomLink href="#home">Home</CustomLink>
              </li>
              <li>
                <CustomLink href="#prologue">Prologue</CustomLink>
              </li>
              <li>
                <CustomLink href="#about">About</CustomLink>
              </li>
              <li>
                <CustomLink href="#contact">Contact</CustomLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-4 w-full md:w-auto">
            <h3 className="font-bold items-center uppercase tracking-wide text-[14px]">Products</h3>
            <ul className="space-y-[2px] items-center">
              <li>
                <CustomLink href="#radiant">Radiant</CustomLink>
              </li>
              <li>
                <CustomLink href="#nexus">Nexus</CustomLink>
              </li>
              <li>
                <CustomLink href="#zigma">Zigma</CustomLink>
              </li>
              <li>
                <CustomLink href="#azul">Azul</CustomLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col px-0 lg:px-4 items-center gap-y-4 md:w-auto">
          <h3 className="font-bold uppercase tracking-wide text-[14px]">Follow Us</h3>
          <ul className="flex lg:gap-6 gap-1">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <CustomLink href={link.href} className="text-2xl">
                  {link.icon}
                </CustomLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center gap-3 w-full md:w-auto">
          <h3 className="font-bold uppercase tracking-wide text-md">Stay Updated</h3>
          <p className="text-gray-900 text-center text-sm">
            Subscribe to our newsletter to receive the latest updates and exclusive offers.
          </p>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full max-w-xs rounded-md bg-gray-300 px-4 py-2 placeholder-gray-800 focus:outline-none"
            />
            <button className="rounded-md bg-black text-white px-4 py-2 transition-transform hover:scale-105">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 pt-6 items-center px-8 flex flex-row justify-between text-xs text-black">
        <div className="flex items-center flex-row gap-2"><p>© ZENTRY 2024.</p><p> ALL RIGHTS RESERVED</p></div>

        <p className="hover:underline cursor-pointer text-[12px]">PRIVACY POLICY</p>
      </div>
    </div>
  );
};

export default Footer;
