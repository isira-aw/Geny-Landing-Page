import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import { X, Maximize2 } from 'lucide-react';

const categories = ['All', 'AC', 'Generator', 'CPU'];

const items = [
    { id: 1, category: 'AC', title: 'Industrial Chiller', type: 'AC Monitoring', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800' },
    { id: 2, category: 'Generator', title: 'Backup Power Unit', type: 'Generator System', image: 'https://images.unsplash.com/photo-1454165833767-1316b34460d9?auto=format&fit=crop&q=80&w=800' },
    { id: 3, category: 'CPU', title: 'Server Rack 01', type: 'CPU Analytics', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800' },
    { id: 4, category: 'AC', title: 'HVAC Controller', type: 'AC Monitoring', image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800' },
    { id: 5, category: 'Generator', title: 'Fuel Sensor Kit', type: 'Generator System', image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800' },
    { id: 6, category: 'CPU', title: 'Core Node Dashboard', type: 'CPU Analytics', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800' },
];

export const Gallery = () => {
    const [filter, setFilter] = useState('All');
    const [selectedItem, setSelectedItem] = useState<null | typeof items[0]>(null);

    const filteredItems = filter === 'All' ? items : items.filter(item => item.category === filter);

    return (
        <SectionWrapper id="gallery">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Solution <span className="text-neon-blue">Showcase</span></h2>

                <div className="flex flex-wrap justify-center gap-2">
                    {categories.map(cat => (
                        <Button
                            key={cat}
                            variant={filter === cat ? 'neon' : 'ghost'}
                            className="rounded-full"
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </Button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence>
                    {filteredItems.map(item => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="relative group cursor-pointer overflow-hidden rounded-xl bg-slate-800 border border-slate-700"
                            onClick={() => setSelectedItem(item)}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-neon-blue text-xs font-bold mb-1 uppercase bg-neon-blue/10 px-2 py-0.5 rounded w-fit">{item.type}</p>
                                        <h3 className="text-white font-bold">{item.title}</h3>
                                    </div>
                                    <Maximize2 className="text-white w-5 h-5 opacity-50" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                            onClick={() => setSelectedItem(null)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-slate-800/50 hover:bg-slate-800 text-white rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover min-h-[300px]" />
                                <div className="p-8 flex flex-col">
                                    <p className="text-neon-blue font-bold uppercase tracking-widest text-sm mb-2">{selectedItem.type}</p>
                                    <h2 className="text-3xl font-bold mb-4">{selectedItem.title}</h2>
                                    <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                                        This specialized monitoring solution provides deep visibility into your {selectedItem.category} infrastructure.
                                        Equipped with high-sensitivity sensors and connected directly to our AI-driven cloud platform.
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-center gap-3 text-slate-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                                            <span>Real-time telemetry streaming</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                                            <span>Automated alert system</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                                            <span>Remote configuration interface</span>
                                        </li>
                                    </ul>
                                    <div className="mt-auto">
                                        <Button color="primary" fullWidth size="lg">Contact Sales for Details</Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </SectionWrapper>
    );
};
