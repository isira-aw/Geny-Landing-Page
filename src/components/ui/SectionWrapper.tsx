import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
    background?: 'default' | 'darker' | 'none';
}

export const SectionWrapper = ({
    children,
    id,
    className,
    background = 'default',
}: SectionWrapperProps) => {
    const bgStyles = {
        default: 'bg-slate-900',
        darker: 'bg-slate-950',
        none: 'bg-transparent',
    };

    return (
        <section
            id={id}
            className={twMerge(
                'py-20 relative overflow-hidden',
                bgStyles[background],
                className
            )}
        >
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {children}
            </div>
        </section>
    );
};
