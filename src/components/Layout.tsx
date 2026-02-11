import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col bg-slate-900 text-white overflow-hidden">
            <Navbar />
            <main className="flex-grow pt-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>
            <Footer />

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-50 p-4 bg-green-500 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-white"
                >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.005.572 1.943.87 3.056.87 3.167 0 5.769-2.587 5.769-5.767 0-3.18-2.586-5.767-5.768-5.767zm0 13c-1.144 0-2.261-.31-3.218-.891l-.229-.136-1.554.407.414-1.512-.137-.233c-.569-.974-.871-2.106-.871-3.268.001-3.766 3.064-6.829 6.83-6.829 3.766 0 6.83 3.063 6.83 6.829 0 3.766-3.064 6.83-6.83 6.83zm3.769-5.116c-.207-.103-1.223-.605-1.413-.674-.189-.069-.327-.103-.464.103-.138.207-.534.674-.654.813-.12.138-.241.155-.448.052-.207-.103-.875-.323-1.666-1.03-.616-.55-1.033-1.229-1.154-1.437-.121-.207-.013-.319.09-.422.093-.093.207-.242.31-.363.103-.121.138-.207.207-.345.069-.138.034-.258-.017-.363-.052-.103-.465-1.121-.637-1.533-.166-.403-.335-.348-.464-.354-.121-.006-.258-.007-.396-.007-.138 0-.362.052-.551.258-.19.207-.724.708-.724 1.725 0 1.017.741 2.001.845 2.138.103.137 1.458 2.227 3.535 3.123 1.345.58 1.868.58 2.502.484.701-.106 1.49-.609 1.701-1.197.21-.588.21-1.092.147-1.2-.062-.108-.231-.172-.438-.275z" />
                </svg>
                <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Chat with us!
                </span>
            </a>
        </div>
    );
};
