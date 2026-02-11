import { Monitor, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-blue-600/20 p-2 rounded-lg">
                                <Monitor className="text-neon-blue w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold text-white">
                                Geny<span className="text-neon-blue">IoT</span>
                            </span>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Revolutionizing infrastructure monitoring with advanced IoT solutions.
                            Real-time analytics for CPU, AC, and Generator systems.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Products', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-slate-400 hover:text-neon-blue transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Products</h3>
                        <ul className="space-y-4">
                            {['AC Monitoring', 'Generator System', 'CPU Analytics', 'Cloud Platform'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-slate-400 hover:text-neon-blue transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                                <span className="text-slate-400">1234 Innovation Drive,<br />Tech Valley, CA 94043</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-blue-500" />
                                <span className="text-slate-400">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-blue-500" />
                                <span className="text-slate-400">contact@genyiot.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Geny IoT Solutions. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-slate-500 hover:text-white text-sm">Privacy Policy</a>
                        <a href="#" className="text-slate-500 hover:text-white text-sm">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};