"use client";

import { FaDiscord, FaTwitter, FaYoutube, FaMedium, FaLinkedin, FaInstagram } from "react-icons/fa";
import CustomLink from "./Link";
import Image from "next/image";

const socialLinks = [
  { href: "https://discord.com/invite/zentry", icon: <FaDiscord /> },
  { href: "https://x.com/zentry", icon: <FaTwitter /> },
  { href: "https://www.youtube.com/@zentryhq", icon: <FaYoutube /> },
  { href: "https://medium.com/zentry/", icon: <FaMedium /> },
  { href: "https://www.linkedin.com/company/zentryhq/", icon: <FaLinkedin /> },
];

const Footer: React.FC = () => {
  return (
    <div className="relative w-screen flex flex-col bg-[rgb(82,66,253)] py-6 text-black">
      <div className="relative container flex xl:flex-row flex-col items-center justify-between gap-y-10 gap-x-5 lg:gap-x-8 px-2 lg:px-20 py-12 text-sm">
        <div className="w-[260px] items-center justify-center flex flex-row">
          <Image
            src='/img/zentry.png'
            alt="Zentry Logo"
            width={500}
            height={500}
            priority
            className="w-[240px] transition-transform hover:scale-105 h-[200px] items-center"
          />
        </div>

        <div className="flex flex-row lg:gap-10 w-full lg:w-fit items-center justify-between px-2">
          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="font-bold items-start uppercase tracking-wide text-[14px]">Explore</h3>
            <ul className="space-y-[2px] items-center font-bold">
              <li>
                <CustomLink href="/">Home</CustomLink>
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
          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="font-bold items-center uppercase tracking-wide text-[14px]">Products</h3>
            <ul className="space-y-[2px] items-center font-bold">
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
        <div className="flex flex-col items-center gap-y-4">
          <h3 className="font-bold uppercase tracking-wide text-[14px]">Follow Us</h3>
          <ul className="flex lg:gap-6 gap-1">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <CustomLink href={link.href} className="text-4xl">
                  {link.icon}
                </CustomLink>
              </li>
            ))}
          </ul>
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
