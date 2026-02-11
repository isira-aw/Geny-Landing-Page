import { ButtonHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', fullWidth, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

        const variants = {
            primary: 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30',
            secondary: 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700',
            outline: 'border-2 border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white',
            ghost: 'text-slate-400 hover:text-white hover:bg-slate-800/50',
            neon: 'bg-transparent border border-neon-blue text-neon-blue shadow-[0_0_10px_rgba(0,243,255,0.2)] hover:bg-neon-blue/10 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]',
        };

        const sizes = {
            sm: 'text-xs px-3 py-1.5',
            md: 'text-sm px-5 py-2.5',
            lg: 'text-base px-8 py-3',
        };

        return (
            <button
                ref={ref}
                className={twMerge(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    fullWidth ? 'w-full' : '',
                    className
                )}
                {...props}
            />
        );
    }
);

// Framer Motion version
export const MotionButton = motion(Button);
