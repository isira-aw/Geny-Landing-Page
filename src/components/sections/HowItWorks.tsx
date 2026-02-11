import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Smartphone, Cloud, Settings } from 'lucide-react';

const steps = [
    {
        title: 'Install Device',
        description: 'Plug-and-play hardware installation on your target infrastructure.',
        icon: Settings,
    },
    {
        title: 'Connect to Cloud',
        description: 'Secure handshake and automatic registration with our cloud platform.',
        icon: Cloud,
    },
    {
        title: 'Monitor Dashboard',
        description: 'Access real-time analytics and controls from any modern device.',
        icon: Smartphone,
    }
];

export const HowItWorks = () => {
    return (
        <SectionWrapper id="how-it-works">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">How It <span className="text-neon-blue">Works</span></h2>
                <p className="text-slate-400 max-w-2xl mx-auto italic">From hardware to cloud in minutes.</p>
            </div>

            <div className="relative">
                {/* Animated Line (Desktop) */}
                <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-1 bg-slate-800">
                    <motion.div
                        className="h-full bg-neon-blue shadow-[0_0_10px_#00f3ff]"
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            className="flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.3 }}
                        >
                            <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center mb-8 relative">
                                <div className="absolute inset-0 rounded-full border border-neon-blue/20 animate-ping" />
                                <step.icon className="w-10 h-10 text-neon-blue" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-slate-400 max-w-xs">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
