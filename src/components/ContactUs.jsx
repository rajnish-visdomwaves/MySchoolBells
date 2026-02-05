import React from 'react';

const ContactUs = () => {
    return (
        <section id="contact" className="py-15 px-4 bg-gradient-to-b from-black to-zinc-900">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Get In Touch
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                    Ready to modernize your school's schedule? Contact us for a personalized demo or to request a quote.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div>
                        <h3 className="text-orange-400 font-bold text-xl mb-2">Sales Inquiries</h3>
                        <p className="text-gray-300">sales@myschoolbells.com</p>
                        <p className="text-gray-300">+91 9876543210</p>
                    </div>
                    <div>
                        <h3 className="text-yellow-400 font-bold text-xl mb-2">Support</h3>
                        <p className="text-gray-300">support@myschoolbells.com</p>
                        <p className="text-gray-300">24/7 Technical Assistance</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
