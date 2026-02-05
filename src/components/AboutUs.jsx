import React from 'react';
import { FiClock, FiShield, FiHeart } from 'react-icons/fi';

const AboutUs = () => {
    return (
        <section id="about" className="py-20 px-8 max-w-7xl mx-auto">
            {/* Main Story */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                        About Us
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
                        At <span className="text-white font-semibold">My School Bells</span>, we are revolutionizing the way educational institutions manage their time. Founded by a dedicated team of former educators and tech innovators, we recognized that the heartbeat of every school—the schedule—was often stuck in the past.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
                        Our journey began with a simple question: <span className="text-orange-300 italic">"Why do modern schools still rely on 20-year-old hardware?"</span> This led us to develop a cloud-first platform that seamlessly integrates with existing infrastructure while bringing state-of-the-art automation, safety, and flexibility to campuses worldwide.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed text-justify">
                        Today, we empower administrators to focus on what truly matters—education—while we handle the precision of the daily rhythm.
                    </p>
                </div>
                <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-orange-500/10 group">
                    <img
                        src="https://i.pinimg.com/1200x/34/53/87/3453879bcf846d3346948446476476a9.jpg"
                        alt="Modern Education"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">Trusted Innovation</h3>
                        <p className="text-gray-300">Powering over 500+ Campuses</p>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors group">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform">
                        <FiClock size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Precision First</h3>
                    <p className="text-gray-400 leading-relaxed">
                        We believe in absolute accuracy. Our NTP-synced schedules ensure that every class starts and ends exactly when it should, eliminating drift and confusion.
                    </p>
                </div>

                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors group">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform">
                        <FiShield size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Uncompromised Safety</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Safety isn't an add-on; it's our foundation. From instant lockdowns to automated emergency broadcasts, our system is designed to protect.
                    </p>
                </div>

                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors group">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform">
                        <FiHeart size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Student Well-being</h3>
                    <p className="text-gray-400 leading-relaxed">
                        We replace jarring buzzers with calming tones and music options, creating a less stressful environment that promotes better mental health for students.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
