import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Monitor, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={twMerge(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
                scrolled ? 'bg-slate-900/70 backdrop-blur-md border-slate-800 py-3' : 'bg-transparent py-5'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="bg-blue-600/20 p-2 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                        <Monitor className="text-neon-blue w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        Geny<span className="text-neon-blue">IoT</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={clsx(
                                'text-sm font-medium transition-colors hover:text-neon-blue',
                                location.pathname === link.path ? 'text-neon-blue' : 'text-slate-400'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-slate-300 hover:text-white"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={clsx(
                                        'flex items-center justify-between text-lg font-medium p-2 rounded-lg hover:bg-slate-800/50',
                                        location.pathname === link.path ? 'text-neon-blue' : 'text-slate-400'
                                    )}
                                >
                                    {link.name}
                                    <ChevronRight className="w-4 h-4 opacity-50" />
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 px-6 py-3 text-center rounded-lg bg-blue-600 text-white font-medium"
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
