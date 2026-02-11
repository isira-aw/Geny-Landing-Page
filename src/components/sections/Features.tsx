import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';
import { Zap, Shield, Globe, History, Radio, Bot } from 'lucide-react';

const features = [
    {
        title: 'Real-time Monitoring',
        description: 'Instant heartbeat checks and performance metrics with sub-second latency.',
        icon: Radio,
    },
    {
        title: 'AI Predictions',
        description: 'Neural networks analyze trends to predict hardware failure before it happens.',
        icon: Bot,
    },
    {
        title: 'Remote Access',
        description: 'Control your industrial hardware from anywhere in the world via secure tunnel.',
        icon: Zap,
    },
    {
        title: '7-Day History',
        description: 'Complete data retention for auditing and performance optimization.',
        icon: History,
    },
    {
        title: 'High Security',
        description: 'End-to-end encryption for all telemetry and control commands.',
        icon: Shield,
    },
    {
        title: 'Cloud Connectivity',
        description: 'Seamless integration with AWS, Azure, and Google Cloud platforms.',
        icon: Globe,
    }
];

export const Features = () => {
    return (
        <SectionWrapper id="features" background="darker">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Elite <span className="text-neon-blue">Edge</span> Features</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Our platform is built on enterprise-grade infrastructure to ensure
                    reliability in the most demanding environments.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card hoverEffect={false} className="border-slate-800 bg-slate-900/20 hover:border-slate-700 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-6">
                                <feature.icon className="w-6 h-6 text-neon-blue" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};
