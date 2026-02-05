import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TextParallaxContent, ExampleContent } from '@/components/ui/text-parallax-content-scroll';
import { useNavigate } from 'react-router-dom';

const CustomAlerts = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white text-black font-sans">
            <Navbar />
            <div className="pt-20">
                <TextParallaxContent
                    imgUrl="https://i.pinimg.com/1200x/89/46/93/8946932a6e5f673a66be27d4e8f84a63.jpg"
                    subheading="Critical Safety"
                    heading="Custom Alerts"
                >
                    <ExampleContent
                        title="Communication When It Matters"
                        text1="In an emergency, every second counts. My School Bells gives you the power to instantly broadcast critical information across your entire campus."
                        text2="Turn every speaker in your school into a PA system. Broadcast live voice or pre-recorded messages instantly."
                        ctaText="View Safety Docs"
                    />
                </TextParallaxContent>

                <TextParallaxContent
                    imgUrl="https://i.pinimg.com/1200x/af/52/27/af5227f17ebcd4df328a0d2184bfb825.jpg"
                    subheading="Instant Action"
                    heading="Lockdown Protocol"
                >
                    <ExampleContent
                        title="Start a Lockdown in 0.5 Seconds"
                        text1="Our panic button interface allows designated staff to initiate pre-configured emergency protocols instantly. This includes distinct alarm sounds and visual strobes."
                        text2="Automatically dial 911 and notify district administrators the moment a lockdown is triggered."
                        ctaText="See Protocol"
                    />
                </TextParallaxContent>

                <TextParallaxContent
                    imgUrl="https://nfire.in/wp-content/uploads/2024/10/IOT.jpg.webp"
                    subheading="Integration"
                    heading="Fire & Weather"
                >
                    <ExampleContent
                        title="Text-to-Speech Announcements"
                        text1="Don't just make a noise—send a message. Type your announcement and have it read in a natural voice."
                        text2="Integrate with existing fire alarm systems to trigger specific messaging when smoke detectors are activated."
                        ctaText="Integrations"
                    />
                </TextParallaxContent>
            </div>
            <div className="bg-white py-20 px-8 text-center border-t border-neutral-200">
                <h2 className="text-4xl font-bold mb-8 text-neutral-900">Prioritize Safety Today</h2>
                <div className="flex justify-center gap-4">
                    <button className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-neutral-800 transaction-colors" onClick={() => navigate(-1)}>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default CustomAlerts;
