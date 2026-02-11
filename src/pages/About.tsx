import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { Target, Eye } from 'lucide-react';

export const About = () => {
    const timeline = [
        { year: '2022', title: 'Company Founded', desc: 'Started with a vision to simplify industrial IoT.' },
        { year: '2023', title: 'Seed Funding', desc: 'Raised $2M to grow our engineering team.' },
        { year: '2024', title: 'Product Launch', desc: 'Released our flagship AC and Generator monitors.' },
        { year: '2025', title: 'Market Expansion', desc: 'Entered the US data center monitoring market.' },
    ];

    return (
        <div className="flex flex-col pt-10">
            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Mission to <br /><span className="text-neon-blue">Digitalize</span> Infrastructure</h1>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            At Geny IoT, we believe that every piece of infrastructure deserves a digital twin.
                            Our mission is to provide the hardware-software bridge that enables
                            enterprises to monitor, predict, and optimize their critical systems in real-time.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                                <p className="text-slate-500 text-sm">Engineers & Experts</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">12</h3>
                                <p className="text-slate-500 text-sm">US States Covered</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-video rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Office" className="w-full h-full object-cover opacity-60" />
                            <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>

            <SectionWrapper background="darker">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <Card className="p-10 border-blue-900/50 bg-blue-900/10">
                        <Target className="w-12 h-12 text-neon-blue mb-6" />
                        <h2 className="text-3xl font-bold mb-4 text-white">Our Vision</h2>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            To be the world's most trusted partner in industrial intelligence,
                            creating a future where downtime is a relic of the past.
                        </p>
                    </Card>
                    <Card className="p-10 border-blue-900/50 bg-blue-900/10">
                        <Eye className="w-12 h-12 text-neon-blue mb-6" />
                        <h2 className="text-3xl font-bold mb-4 text-white">Our Values</h2>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            Integrity in data, excellence in hardware, and an unwavering
                            commitment to our customers' operational success.
                        </p>
                    </Card>
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">Our <span className="text-neon-blue">Journey</span></h2>
                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-[17px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                <div className="flex-1 hidden md:block" />
                                <div className="relative z-10 w-10 h-10 rounded-full bg-neon-blue border-4 border-slate-900 shadow-[0_0_15px_#00f3ff]" />
                                <div className="flex-1 bg-slate-900/50 border border-slate-800 p-6 rounded-2xl md:mx-8">
                                    <span className="text-neon-blue font-bold mb-1 block">{item.year}</span>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-slate-400">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};
