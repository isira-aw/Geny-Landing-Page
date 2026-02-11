import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { MotionCard } from '../ui/Card';
import { Button } from '../ui/Button';
import { Wind, Zap, Cpu, ArrowRight } from 'lucide-react';

const products = [
    {
        title: 'AC Monitoring System',
        description: 'Advanced thermal sensors and power consumption tracking for industrial cooling units.',
        icon: Wind,
        color: 'text-blue-400',
        bgColor: 'bg-blue-400/10',
    },
    {
        title: 'Generator Monitoring',
        description: 'Fuel level monitoring, engine diagnostics, and remote start/stop capabilities.',
        icon: Zap,
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-400/10',
    },
    {
        title: 'CPU Monitoring System',
        description: 'High-precision latency tracking and hardware health metrics for data centers.',
        icon: Cpu,
        color: 'text-purple-400',
        bgColor: 'bg-purple-400/10',
    }
];

export const Products = () => {
    return (
        <SectionWrapper id="products" background="darker">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-4"
                >
                    Core <span className="text-neon-blue">Monitoring</span> Solutions
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-slate-400 max-w-2xl mx-auto"
                >
                    Precision-engineered hardware and software designed to give you total control
                    over your most critical assets.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <MotionCard
                        key={product.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col h-full group"
                    >
                        <div className={`w-14 h-14 rounded-2xl ${product.bgColor} flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform`}>
                            <product.icon className={`w-7 h-7 ${product.color}`} />
                        </div>

                        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-neon-blue transition-colors">
                            {product.title}
                        </h3>

                        <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                            {product.description}
                        </p>

                        <Button variant="outline" className="group/btn w-full justify-between">
                            Learn More
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                    </MotionCard>
                ))}
            </div>
        </SectionWrapper>
    );
};
