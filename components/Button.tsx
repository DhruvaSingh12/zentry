import clsx from "clsx";
import { ReactNode } from "react";

type ButtonProps = {
  id?: string;
  title: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  containerClass?: string;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
  className,
  onClick,
}) => {
  return (
    <div className={className}>
      <button
        id={id}
        className={clsx(
          "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black transition-all hover:rounded-md hover:skew-x-6",
          containerClass
        )}
        onClick={onClick}
      >
        {leftIcon}

        <div className="relative inline-flex overflow-hidden font-general text-xs uppercase">
          <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
            {title}
          </div>
          <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
            {title}
          </div>
        </div>

        {rightIcon}
      </button>
    </div>
  );
};

export default Button;
