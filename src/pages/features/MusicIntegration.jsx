import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TextParallaxContent, ExampleContent } from '@/components/ui/text-parallax-content-scroll';
import { useNavigate } from 'react-router-dom';

const MusicIntegration = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white text-black font-sans">
            <Navbar />
            <div className="pt-20">
                <TextParallaxContent
                    imgUrl="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2600&auto=format&fit=crop"
                    subheading="Campus Atmosphere"
                    heading="Music Integration"
                >
                    <ExampleContent
                        title="Set the Perfect Tone"
                        text1="Studies show that harsh buzzers increase anxiety. Switch to calming melodies or upbeat tracks to transition students between classes positively."
                        text2="Upload MP3s of your school fight song, popular hits, or calming classical pieces to create a unique environment."
                        ctaText="Listen to Samples"
                    />
                </TextParallaxContent>

                <TextParallaxContent
                    imgUrl="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2600&auto=format&fit=crop"
                    subheading="Curated Lists"
                    heading="Smart Playlists"
                >
                    <ExampleContent
                        title="Visual Playlist Management"
                        text1="Manage your school's audio just like you manage your personal streaming service. Drag and drop tracks, create folders for events, and preview sounds instantly."
                        text2="Create different moods for Monday mornings versus Friday afternoons with scheduled playlists."
                        ctaText="Browse Library"
                    />
                </TextParallaxContent>

                <TextParallaxContent
                    imgUrl="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2600&auto=format&fit=crop"
                    subheading="Audio Control"
                    heading="Auto-Leveling"
                >
                    <ExampleContent
                        title="Intelligent Audio Zoning"
                        text1="Our system automatically balances volume levels so music is never too loud or too soft."
                        text2="Play upbeat music in the cafeteria, soft chimes in the library, and standard bells in the hallways. Control the vibe of every zone independently."
                        ctaText="Explore Zones"
                    />
                </TextParallaxContent>
            </div>
            <div className="bg-white py-20 px-8 text-center border-t border-neutral-200">
                <h2 className="text-4xl font-bold mb-8 text-neutral-900">Hear the difference</h2>
                <div className="flex justify-center gap-4">
                    <button className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-neutral-800 transaction-colors" onClick={() => navigate(-1)}>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default MusicIntegration;
