import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/ui/animated-shader-hero';
import ShuffleHero from '@/components/ui/shuffle-grid';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutUs from '@/components/AboutUs';
import ContactUs from '@/components/ContactUs';

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

    const schoolFeatures = [
        {
            title: "Automated Schedules",
            description:
                "Precision timing for classes, breaks, and exams. Set it and forget it with our reliable automation system.",
            link: "/features/automated-schedules",
        },
        {
            title: "Custom Alerts",
            description:
                "Easily configure emergency notifications, regular announcements, and special event chimes.",
            link: "/features/custom-alerts",
        },
        {
            title: "Music Integration",
            description:
                "Replace harsh bells with pleasant chimes or custom music tracks to create a better campus atmosphere.",
            link: "/features/music-integration",
        },
        {
            title: "Zone Control",
            description:
                "Manage bells for different buildings or wings separately. ideal for large campuses with multiple blocks.",
            link: "/features/zone-control",
        },
        {
            title: "Web Dashboard",
            description:
                "Access and manage your school's bell schedule from anywhere, on any device, with our intuitive cloud interface.",
            link: "/features/web-dashboard",
        },
        {
            title: "Smart Integration",
            description:
                "Seamlessly connects with your existing PA systems and speakers. No need for expensive hardware overhauls.",
            link: "/features/smart-integration",
        },
    ];

    return (
        <>
            <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30">
                <Navbar />

                <main>
                    <Hero
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

                    <div id="features" className="max-w-7xl mx-auto px-8 py-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                        FEATURES
                    </h2>
                        <HoverEffect items={schoolFeatures} />
                    </div>

                    <AboutUs />
                    <ContactUs />
                    <WhyChooseUs />
                </main>

                <Footer />
            </div>
        </>
    );
};

export default Home;
