import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSchool, FaBars, FaTimes } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { moduleCategories } from '@/data/schoolBellsData';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Features', href: '/#features' },
        { name: 'About', href: '/#about' },
        { name: 'Contact', href: '/#contact' },
        { name: 'Why Choose Us', href: '/#why-choose-us' },
    ];
    const handleMouseEnter = (menu) => {
        setActiveDropdown(menu);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-black/70 backdrop-blur-md border-b border-white/10 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 cursor-pointer">
                        <FaSchool className="text-orange-400 text-2xl" />
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-yellow-300">
                            My School Bells
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}

                        {/* Modules Dropdown */}
                        <div
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => handleMouseEnter('modules')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide flex items-center gap-1 group-hover:text-orange-400">
                                Modules
                                <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'modules' ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Mega Menu */}
                            <div className={`absolute top-full right-0 w-[600px] bg-neutral-900 border border-white/10 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-8 transition-all duration-300 origin-top-right ${activeDropdown === 'modules' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                                {moduleCategories.map((category, idx) => (
                                    <div key={idx} className="space-y-4">
                                        <h3 className="text-orange-400 font-bold text-sm tracking-wider border-b border-white/10 pb-2 mb-2">{category.title}</h3>
                                        <ul className="space-y-2">
                                            {category.serviceIds.slice(0, 5).map(id => {
                                                const serviceTitle = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                                                return (
                                                    <li key={id}>
                                                        <Link to={`/features/${id}`} className="text-gray-400 hover:text-white text-sm transition-colors block py-1 hover:translate-x-1 duration-200">
                                                            {serviceTitle}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                            {category.serviceIds.length > 5 && (
                                                <li>
                                                    <Link to="/#modules" className="text-orange-500 hover:text-orange-400 text-xs font-semibold mt-2 block">
                                                        + View All
                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
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
                    "fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden transition-transform duration-300 flex flex-col items-start justify-start pt-32 px-10 space-y-8 overflow-y-auto",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl text-white font-light hover:text-orange-400 transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}

                <div className="border-t border-white/10 pt-8 w-full">
                    <h3 className="text-orange-400 text-xl font-bold mb-6">Modules</h3>
                    <div className="space-y-8">
                        {moduleCategories.map((category, idx) => (
                            <div key={idx}>
                                <h4 className="text-white font-medium mb-3 opacity-80">{category.title}</h4>
                                <ul className="space-y-2 pl-4 border-l border-white/10">
                                    {category.serviceIds.slice(0, 4).map(id => {
                                        const serviceTitle = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                                        return (
                                            <li key={id}>
                                                <Link
                                                    to={`/features/${id}`}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="text-gray-400 hover:text-white text-sm block"
                                                >
                                                    {serviceTitle}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
