import React from "react";
import classNames from "classnames";

type CustomLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const CustomLink: React.FC<CustomLinkProps> = ({ href, children, className }) => {
  return (
    <a
      href={href}
      className={classNames(
        "relative inline-block px-4 py-1 text-[22px] text-black hover:text-[rgb(82,66,253)] transition-transform duration-300",
        "hover:scale-105",
        "before:absolute before:inset-0 before:-z-10 before:rounded-md",
        "before:bg-black before:transition-all before:duration-300 before:transform",
        "before:skew-x-[-20deg] before:scale-x-0 hover:before:scale-x-100",
        className
      )}
    >
      <span className="relative z-10 transition-colors duration-300">
        {children}
      </span>
    </a>
  );
};

export default CustomLink;