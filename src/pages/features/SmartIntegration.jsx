import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TextParallaxContent, ExampleContent } from '@/components/ui/text-parallax-content-scroll';
import { useNavigate } from 'react-router-dom';

const SmartIntegration = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white text-black font-sans">
            <Navbar />
            <div className="pt-20">
                <TextParallaxContent
                    imgUrl="https://i.pinimg.com/736x/75/08/e3/7508e3990857d8ab2c6b83d89bf7eda1.jpg"
                    subheading="Universal Connect"
                    heading="Smart Integration"
                >
                    <ExampleContent
                        title="Works With What You Have"
                        text1="Modernizing your school doesn't mean ripping out walls or replacing every speaker. Our smart controllers bridge the gap between legacy hardware and modern software."
                        text2="Seamlessly connects with your existing PA systems and speakers. No need for expensive hardware overhauls."
                        ctaText="Check Compatibility"
                    />
                </TextParallaxContent>

                <TextParallaxContent
                    imgUrl="https://i.pinimg.com/1200x/34/62/d0/3462d003fa1e309bdb937a2f619711ce.jpg"
                    subheading="Hardware"
                    heading="Plug & Play"
                >
                    <ExampleContent
                        title="Universal Hardware Support"
                        text1="Whether you have a 1980s Bogen PA system or modern IP speakers, we can control it. Our adapters handle various voltages, impedance loads, and input types."
                        text2="Continues to operate perfectly even if the internet goes down, thanks to local caching on our smart controllers."
                        ctaText="Hardware List"
                    />
                </TextParallaxContent>

                <TextParallaxContent
                    imgUrl="https://i.pinimg.com/736x/f7/9e/0e/f79e0efa0b7e826fd08a4ca01d0a652e.jpg"
                    subheading="Developer Friendly"
                    heading="Open API"
                >
                    <ExampleContent
                        title="Enterprise Protocols"
                        text1="We speak the language of modern IT. Our system integrates with VoIP phones, standardized network clocks, and building automation systems."
                        text2="Developers can access our open API to integrate bell schedules with digital signage or HVAC systems via REST, MQTT, or WebSocket."
                        ctaText="API Docs"
                    />
                </TextParallaxContent>
            </div>
            <div className="bg-white py-20 px-8 text-center border-t border-neutral-200">
                <h2 className="text-4xl font-bold mb-8 text-neutral-900">Bridge the gap to the future</h2>
                <div className="flex justify-center gap-4">
                    <button className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-neutral-800 transaction-colors" onClick={() => navigate(-1)}>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default SmartIntegration;
