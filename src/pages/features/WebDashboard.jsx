import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TextParallaxContent, ExampleContent } from '@/components/ui/text-parallax-content-scroll';
import { useNavigate } from 'react-router-dom';

const WebDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white text-black font-sans">
            <Navbar />
            <div className="pt-20">
                <TextParallaxContent
                    imgUrl="https://i.pinimg.com/1200x/5a/6f/ec/5a6fec780413d9d4d6720bc9ebe69355.jpg"
                    subheading="Anywhere Access"
                    heading="Web Dashboard"
                >
                    <ExampleContent
                        title="Command Center In The Cloud"
                        text1="No more dedicated PC in the basement. Our secure, web-based dashboard lets you control your entire system from your laptop, tablet, or smartphone."
                        text2="Access and manage your school's bell schedule from anywhere with an internet connection. Perfect for snow days or remote administration."
                        ctaText="Login Demo"
                    />
                </TextParallaxContent>

                <TextParallaxContent
                    imgUrl="https://i.pinimg.com/1200x/18/01/34/18013464a304457d7d7aee22fdf6c89a.jpg"
                    subheading="Insights"
                    heading="System Analytics"
                >
                    <ExampleContent
                        title="Data-Driven Decisions"
                        text1="View system health, uptime reports, and usage logs to ensure compliance and reliability."
                        text2="Our dashboard uses modern metrics to show you exactly how your bells are performing and when maintenance is required."
                        ctaText="View Reports"
                    />
                </TextParallaxContent>

                <TextParallaxContent
                    imgUrl="https://i.pinimg.com/1200x/75/e5/65/75e565ce73a49e5067a2d081981d2937.jpg"
                    subheading="Responsive"
                    heading="Mobile Ready"
                >
                    <ExampleContent
                        title="Fully Responsive Design"
                        text1="Our dashboard isn't just a desktop site shrunk down. It's fully responsive and optimized for touch."
                        text2="Manage your school from your phone while walking the halls. Supports FaceID login for quick and secure access."
                        ctaText="Mobile Features"
                    />
                </TextParallaxContent>
            </div>
            <div className="bg-white py-20 px-8 text-center border-t border-neutral-200">
                <h2 className="text-4xl font-bold mb-8 text-neutral-900">See the power of the cloud</h2>
                <div className="flex justify-center gap-4">
                    <button className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-neutral-800 transaction-colors" onClick={() => navigate(-1)}>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default WebDashboard;
