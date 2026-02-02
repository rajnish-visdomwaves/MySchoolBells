import React, { useState, useEffect } from 'react';
import { FaSchool, FaBars, FaTimes } from 'react-icons/fa';
import { cn } from '@/lib/utils';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Features', href: '#features' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-black/50 backdrop-blur-md border-b border-white/10 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <FaSchool className="text-orange-400 text-2xl" />
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-yellow-300">
                            My School Bells
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                        <button className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium transition-all backdrop-blur-sm">
                            Sign In
                        </button>
                        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black text-sm font-bold transition-all shadow-lg shadow-orange-500/20">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden transition-transform duration-300 flex flex-col items-center justify-center space-y-8",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl text-white font-light hover:text-orange-400 transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
                <div className="flex flex-col gap-4 mt-8">
                    <button className="px-8 py-3 rounded-full bg-white/10 border border-white/20 text-white text-lg font-medium">
                        Sign In
                    </button>
                    <button className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black text-lg font-bold">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
