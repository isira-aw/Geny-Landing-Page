import { HTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, hoverEffect = true, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={twMerge(
                    'bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 transition-all duration-300',
                    hoverEffect && 'hover:bg-slate-800/60 hover:border-slate-600 hover:shadow-xl hover:shadow-blue-900/20 hover:-translate-y-1',
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

export const MotionCard = motion(Card);
