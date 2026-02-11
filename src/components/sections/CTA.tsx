import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { MotionButton } from '../ui/Button';
import { Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CTA = () => {
    const navigate = useNavigate();

    return (
        <SectionWrapper id="cta" background="none" className="py-32">
            <div className="relative overflow-hidden rounded-3xl bg-blue-600 p-12 md:p-20 text-center shadow-[0_0_50px_rgba(37,99,235,0.3)]">
                {/* Decorative background orbits */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                    <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] border border-white/5 rounded-full" />
                    <div className="absolute -top-1/4 -right-1/4 w-[120%] h-[150%] border border-white/5 rounded-full" />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Upgrade Your Infrastructure <br />
                        Monitoring Today
                    </h2>
                    <p className="text-blue-100/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Join 500+ enterprises leveraging Geny IoT for real-time visibility and predictive maintenance.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <MotionButton
                            variant="secondary"
                            size="lg"
                            className="bg-white text-blue-600 hover:bg-slate-100"
                            onClick={() => navigate('/contact')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Us
                            <Mail className="ml-2 w-4 h-4" />
                        </MotionButton>
                        <MotionButton
                            variant="outline"
                            size="lg"
                            className="border-white/50 text-white hover:border-white hover:bg-white/10"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Pricing
                        </MotionButton>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};
