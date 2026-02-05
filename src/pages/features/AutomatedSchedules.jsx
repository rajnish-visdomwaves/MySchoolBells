import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TextParallaxContent, ExampleContent } from '@/components/ui/text-parallax-content-scroll';
import { useNavigate } from 'react-router-dom';
import Visual from '/automated/Visual.webp';
import Emergency from '/automated/Emergency.webp';
import Precision from '/automated/PrecisionTime.webp';

const AutomatedSchedules = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white text-black font-sans">
            <Navbar />
            <div className="pt-20"> {/* Add padding for fixed navbar */}
                <TextParallaxContent
                    imgUrl={Precision}
                    subheading="Precision Timing"
                    heading="Automated Schedules"
                >
                    <ExampleContent
                        title="Eliminate the Manual Grind"
                        text1="Manually ringing bells or reprogramming old mechanical timers is antiquated. My School Bells brings cloud-based precision to your campus, ensuring that every second counts."
                        text2="Program your entire academic calendar in advance. Holidays, early dismissals, and exam weeks—handled instantly."
                        ctaText="Request Audit"
                    />
                </TextParallaxContent>

                <TextParallaxContent
                    imgUrl={Visual}
                    subheading="Visual Control"
                    heading="Drag & Drop Planning"
                >
                    <ExampleContent
                        title="Visual Scheduler"
                        text1="Our intuitive interface makes creating complex schedules as easy as moving blocks on a calendar. Visual conflicts are highlighted immediately, preventing overlap errors before they happen."
                        text2="Synced with NTP servers to ensure your bells ring exactly when they should, down to the millisecond."
                        ctaText="See Demo"
                    />
                </TextParallaxContent>

                <TextParallaxContent
                    imgUrl={Emergency}
                    subheading="Emergency Ready"
                    heading="Instant Overrides"
                >
                    <ExampleContent
                        title="Snow Days & Emergencies"
                        text1="Unexpected school closure? Early release due to weather? Activate pre-configured special schedules with a single tap, disabling regular bells instantly."
                        text2="Notify all staff members automatically via SMS and Email when an override is triggered."
                        ctaText="Safety Features"
                    />
                </TextParallaxContent>
            </div>

            <div className="bg-white py-20 px-8 text-center border-t border-neutral-200">
                <h2 className="text-4xl font-bold mb-8 text-neutral-900">Ready to upgrade?</h2>
                <div className="flex justify-center gap-4">
                    <button className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-neutral-800 transaction-colors" onClick={() => navigate(-1)}>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default AutomatedSchedules;
