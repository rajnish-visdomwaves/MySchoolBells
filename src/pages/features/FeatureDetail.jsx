import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { services } from '@/data/schoolBellsData';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const FeatureDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = services.find(s => s.id === id);

    if (!service) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
                <Navbar />
                <h1 className="text-4xl font-bold mb-4">Feature Not Found</h1>
                <p className="mb-8 text-neutral-400">The feature you are looking for does not exist.</p>
                <button
                    onClick={() => navigate(-1)}
                    className="px-6 py-2 bg-orange-500 rounded-full font-bold hover:bg-orange-600 transition-colors"
                >
                    Go Back
                </button>
            </div>
        );
    }

    const Icon = service.icon;

    return (
        <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-orange-500/30">
            <Navbar />

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-neutral-950 to-neutral-950 -z-10" />
                <div className="max-w-6xl mx-auto">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-neutral-400 hover:text-white mb-8 transition-colors group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Features
                    </button>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-6">
                                <Icon size={20} />
                                <span className="font-medium text-sm">Targeted Module</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent leading-tight">
                                {service.title}
                            </h1>
                            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                                {service.fullDesc}
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur-lg opacity-20" />
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features & Benefits Grid */}
            <div className="bg-white text-black py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
                    {/* Key Features */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-10 h-1 bg-orange-500 block" />
                            Key Features
                        </h2>
                        <ul className="space-y-4">
                            {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-200 group">
                                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <CheckCircle size={16} />
                                    </div>
                                    <span className="text-lg font-medium text-neutral-800">{feature}</span>

                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-10 h-1 bg-blue-500 block" />
                            Why Choose This?
                        </h2>
                        <div className="grid gap-4">
                            {service.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                                    <p className="text-lg text-neutral-600">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Modules */}
            {service.otherModules && service.otherModules.length > 0 && (
                <div className="py-20 px-6 bg-neutral-50/50 border-t border-neutral-200">
                    <div className="max-w-6xl mx-auto">
                        <h3 className="text-2xl font-bold mb-8 text-black text-center">Related Modules</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {service.otherModules.map((mod) => (
                                <Link
                                    key={mod.id}
                                    to={`/features/${mod.id}`}
                                    className="block p-6 bg-white rounded-xl shadow-sm border border-neutral-200 hover:border-orange-500/50 hover:shadow-md transition-all text-center group"
                                >
                                    <h4 className="font-semibold text-neutral-800 group-hover:text-orange-600 transition-colors">{mod.title}</h4>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};
export default FeatureDetail;
