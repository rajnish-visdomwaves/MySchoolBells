import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/ui/animated-shader-hero';
import ShuffleHero from '@/components/ui/shuffle-grid';
import { HoverEffect } from '@/components/ui/card-hover-effect';

const Home = () => {
    const handleStart = () => {
        console.log("Get Started Clicked");
    };

    const handleLearnMore = () => {
        console.log("Learn More Clicked");
        const featuresSection = document.getElementById('features');
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30">
            <Navbar />

            <main>
                <Hero
                    // trustBadge={{
                    //     text: "Trusted by 500+ Top Schools",
                    //     icons: ["🔔", "🎓", "📚"]
                    // }}
                    headline={{
                        line1: "My School Bells",
                        line2: "Smart Automation"
                    }}
                    subtitle="Revolutionize your campus timing with AI-driven precision. The intelligent bell management system that keeps your school running in perfect harmony."
                    buttons={{
                        primary: {
                            text: "Get Started Free",
                            onClick: handleStart
                        },
                        secondary: {
                            text: "Explore Features",
                            onClick: handleLearnMore
                        }
                    }}
                />

                <ShuffleHero />

                <div className="max-w-5xl mx-auto px-8">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent text-center">Services</h2>
                    <HoverEffect items={schoolFeatures} />
                </div>

                {/* Placeholder for content below fold to enable scrolling */}
                <section id="features" className="py-20 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                            Why Choose My School Bells?
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Experience the future of educational scheduling with our cutting-edge focused features.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

const schoolFeatures = [
    {
        title: "Automated Schedules",
        description:
            "Precision timing for classes, breaks, and exams. Set it and forget it with our reliable automation system.",
        link: "#",
    },
    {
        title: "Custom Alerts",
        description:
            "Easily configure emergency notifications, regular announcements, and special event chimes.",
        link: "#",
    },
    {
        title: "Music Integration",
        description:
            "Replace harsh bells with pleasant chimes or custom music tracks to create a better campus atmosphere.",
        link: "#",
    },
    {
        title: "Zone Control",
        description:
            "Manage bells for different buildings or wings separately. ideal for large campuses with multiple blocks.",
        link: "#",
    },
    {
        title: "Web Dashboard",
        description:
            "Access and manage your school's bell schedule from anywhere, on any device, with our intuitive cloud interface.",
        link: "#",
    },
    {
        title: "Smart Integration",
        description:
            "Seamlessly connects with your existing PA systems and speakers. No need for expensive hardware overhauls.",
        link: "#",
    },
];

export default Home;
