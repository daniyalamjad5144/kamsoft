import React from 'react';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    variant = 'primary',
    className,
    icon,
    ...props
}) => {
    const baseStyles = "rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 active:scale-95";

    const variants = {
        primary: "bg-primaryRed text-white hover:bg-red-600 shadow-[0_10px_20px_rgba(255,59,63,0.3)] hover:shadow-[0_15px_30px_rgba(255,59,63,0.4)] hover:-translate-y-1",
        blue: "bg-primaryBlue text-white hover:bg-blue-700 shadow-[0_4px_14px_0_rgba(52,93,255,0.39)] hover:shadow-[0_6px_20px_rgba(52,93,255,0.23)] hover:-translate-y-1",
        outline: "bg-white text-darkNavy border-2 border-gray-200 hover:border-darkNavy hover:bg-darkNavy hover:text-white",
        outlineWhite: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-darkNavy shadow-[0_4px_14px_0_rgba(255,255,255,0.1)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.23)]",
    };

    // Default sizing, can be completely overridden by passing in different padding/text size classes via className because of twMerge
    const defaultSize = "px-8 py-4 text-lg";

    return (
        <button
            className={twMerge(baseStyles, defaultSize, variants[variant], className)}
            {...props}
        >
            {children}
            {icon && <span>{icon}</span>}
        </button>
    );
};

export default Button;
