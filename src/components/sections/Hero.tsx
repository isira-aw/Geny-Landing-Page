import { motion } from 'framer-motion';
import { MotionButton } from '../ui/Button';
import { Monitor, Activity } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px]" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-neon-blue text-xs font-semibold mb-6"
                    >
                        <Activity className="w-3 h-3 animate-pulse" />
                        <span>Next-Gen IoT Solutions</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Smart IoT Monitoring <br />
                        <span className="text-gradient">Solutions for Modern</span> <br />
                        Infrastructure
                    </h1>

                    <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
                        Real-time monitoring for AC systems, Generators, and CPUs.
                        Optimize performance, prevent failures, and manage everything from a single unified dashboard.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <MotionButton
                            size="lg"
                            className="group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Solutions
                            <Monitor className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </MotionButton>
                        <MotionButton
                            variant="outline"
                            size="lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Watch Demo
                        </MotionButton>
                    </div>

                    <div className="mt-12 flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white">500+</span>
                            <span className="text-xs text-slate-400">Devices Active</span>
                        </div>
                        <div className="w-px h-8 bg-slate-700" />
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white">99.9%</span>
                            <span className="text-xs text-slate-400">Uptime Gaurantee</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    {/* Dashboard Mockup */}
                    <div className="relative z-10 p-4 rounded-2xl bg-slate-800/40 border border-white/5 backdrop-blur-sm shadow-2xl">
                        <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-700">
                            {/* Simplified Mockup UI */}
                            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="text-[10px] text-slate-500 font-mono">geny-dashboard-v2.0</div>
                            </div>
                            <div className="p-6 grid grid-cols-2 gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-24 bg-slate-800/50 rounded-lg flex flex-col p-3 border border-slate-700/50">
                                        <div className="w-8 h-1 bg-slate-700 rounded mb-2" />
                                        <div className="mt-auto flex items-end gap-1">
                                            {[40, 70, 45, 90, 65, 80].map((h, j) => (
                                                <motion.div
                                                    key={j}
                                                    className="w-full bg-blue-500/30 rounded-t"
                                                    initial={{ height: 0 }}
                                                    animate={{ height: `${h}%` }}
                                                    transition={{ duration: 1, delay: 0.5 + (j * 0.1) }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-10 -right-10 w-32 h-32 bg-neon-blue/20 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeIn" }}
                        className="absolute -bottom-20 -left-10 w-48 h-48 bg-blue-600/10 rounded-full blur-[80px]"
                    />
                </motion.div>
            </div>
        </section>
    );
};
