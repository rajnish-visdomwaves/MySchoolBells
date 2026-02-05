import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TextParallaxContent, ExampleContent } from '@/components/ui/text-parallax-content-scroll';
import { useNavigate } from 'react-router-dom';

const ZoneControl = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white text-black font-sans">
            <Navbar />
            <div className="pt-20">
                <TextParallaxContent
                    imgUrl="https://i.pinimg.com/1200x/9e/9e/1e/9e9e1eb720e0a540fa2f690e6b40392e.jpg"
                    subheading="Granular Access"
                    heading="Zone Control"
                >
                    <ExampleContent
                        title="Precision Where You Need It"
                        text1="Don't ring the bell in the library when it's gym time. Our granular zone control lets you target specific areas of your campus with unique schedules and alerts."
                        text2="Create logical groups for Elementary, Middle, and High School wings within the same campus."
                        ctaText="View Zone Map"
                    />
                </TextParallaxContent>

                <TextParallaxContent
                    imgUrl="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2600&auto=format&fit=crop"
                    subheading="Visual Management"
                    heading="Interactive Map"
                >
                    <ExampleContent
                        title="Interactive Campus Map"
                        text1="Upload your floor plan and manage devices visually. Click on a room or wing to check status, mute bells, or change schedules instantly."
                        text2="See heatmaps of active zones and wireless signal strength across your facility."
                        ctaText="See Maps"
                    />
                </TextParallaxContent>

                <TextParallaxContent
                    imgUrl="https://i.pinimg.com/1200x/4b/5f/20/4b5f201c35da82e7b80c2da09fb3f11a.jpg"
                    subheading="Flexibility"
                    heading="Wireless Mesh"
                >
                    <ExampleContent
                        title="Maintenance & Testing"
                        text1="Easily test specific bells or zones without disrupting the whole school. Toggle zones on or off with a simple switch."
                        text2="Our devices connect wirelessly, allowing you to expand your system to portable classrooms and outdoor fields without running new cables."
                        ctaText="Tech Specs"
                    />
                </TextParallaxContent>
            </div>
            <div className="bg-white py-20 px-8 text-center border-t border-neutral-200">
                <h2 className="text-4xl font-bold mb-8 text-neutral-900">Take control of your campus</h2>
                <div className="flex justify-center gap-4">
                    <button className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-neutral-800 transaction-colors" onClick={() => navigate(-1)}>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default ZoneControl;
