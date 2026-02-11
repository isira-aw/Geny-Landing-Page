import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const faqs = [
        { q: "How long does installation take?", a: "Most devices can be installed and connected in under 15 minutes." },
        { q: "Is there a subscription fee?", a: "Yes, we offer monthly and annual software-as-a-service plans." },
        { q: "Do you offer bulk discounts?", a: "Absolutely. Contact our sales team for enterprise-level pricing." },
        { q: "Is my data secure?", a: "We use banking-grade end-to-end encryption for all telemetry data." }
    ];

    return (
        <div className="flex flex-col pt-10">
            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's <span className="text-neon-blue">Connect</span></h1>
                        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                            Have questions about our monitoring solutions? Our team of experts
                            is ready to help you optimize your infrastructure.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-blue-500/20">
                                    <Mail className="w-6 h-6 text-neon-blue" />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm mb-1 font-bold">EMAIL US</p>
                                    <p className="text-white text-lg">contact@genyiot.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-blue-500/20">
                                    <Phone className="w-6 h-6 text-neon-blue" />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm mb-1 font-bold">CALL US</p>
                                    <p className="text-white text-lg">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-blue-500/20">
                                    <MapPin className="w-6 h-6 text-neon-blue" />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm mb-1 font-bold">OFFICE</p>
                                    <p className="text-white text-lg">Tech Valley, San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="p-8 md:p-12 border-slate-700 bg-slate-900/40">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors text-white" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                                        <input type="email" placeholder="john@example.com" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors text-white" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Message</label>
                                    <textarea rows={5} placeholder="How can we help you?" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors text-white resize-none" />
                                </div>
                                <Button variant="neon" fullWidth size="lg">Send Message</Button>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </SectionWrapper>

            <SectionWrapper background="darker">
                <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked <span className="text-neon-blue">Questions</span></h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/50">
                            <button
                                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                className="w-full p-6 flex items-center justify-between hover:bg-slate-800/50 transition-colors text-left"
                            >
                                <span className="font-bold text-white">{faq.q}</span>
                                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                            </button>
                            <motion.div
                                initial={false}
                                animate={{ height: activeFaq === i ? 'auto' : 0, opacity: activeFaq === i ? 1 : 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50">
                                    {faq.a}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Map Placeholder */}
            <div className="h-96 w-full bg-slate-950 flex items-center justify-center border-y border-slate-900 relative">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="flex flex-col items-center gap-4 relative z-10">
                    <MapPin className="w-12 h-12 text-neon-blue mb-2" />
                    <span className="text-slate-500 font-mono text-sm tracking-widest">GOOGLE MAPS EMBED PLACEHOLDER</span>
                </div>
            </div>
        </div>
    );
};
