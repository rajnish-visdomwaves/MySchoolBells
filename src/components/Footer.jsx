import React from 'react';
import { FaSchool, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-white/10 text-gray-400 py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <FaSchool className="text-orange-400 text-2xl" />
                            <span className="text-xl font-bold text-white">My School Bells</span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Revolutionizing school management with AI-powered automation and seamless integration.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Platform</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Security</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Roadmap</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter / Social */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Connect</h4>
                        <div className="flex gap-4 mb-6">
                            {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                        <p className="text-xs text-gray-500">
                            © {currentYear} My School Bells. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
