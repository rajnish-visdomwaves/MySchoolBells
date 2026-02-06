import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { moduleCategories, services } from '@/data/schoolBellsData';
import { ArrowRight } from 'lucide-react';

const SchoolModules = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="modules" className="py-24 bg-neutral-950 text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                        Comprehensive School Management
                    </h2>
                    <p className="text-lg text-neutral-400">
                        Everything you need to manage your institution, from admissions to alumni, all in one unified platform.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {moduleCategories.map((category, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${activeTab === idx
                                ? 'bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/25'
                                : 'bg-transparent border-white/10 text-neutral-400 hover:border-white/30 hover:text-white'
                                }`}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="min-h-[400px]">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="text-center mb-10">
                            <p className="text-xl text-neutral-300">{moduleCategories[activeTab].description}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {moduleCategories[activeTab].serviceIds.map((serviceId) => {
                                const service = services.find(s => s.id === serviceId);
                                if (!service) return null;

                                const Icon = service.icon;

                                return (
                                    <Link
                                        to={`/features/${service.id}`}
                                        key={service.id}
                                        className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400/20 to-orange-600/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform duration-300">
                                                {Icon && <Icon size={24} />}
                                            </div>
                                            <ArrowRight className="text-neutral-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" size={20} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange-400 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-neutral-400 leading-relaxed">
                                            {service.desc}
                                        </p>
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SchoolModules;
