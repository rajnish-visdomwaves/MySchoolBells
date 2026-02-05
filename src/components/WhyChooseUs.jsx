import React from 'react';
import { CircularTestimonials } from '@/components/ui/circular-testimonials';

const WhyChooseUs = () => {
    return (
        <section id='why-choose-us' className="py-20 px-4 bg-zinc-900/50">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Why Choose My School Bells?
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
                    Don't just take our word for it. Hear from the administrators and educators who have transformed their campuses.
                </p>

                <div className="flex justify-center">
                    <CircularTestimonials
                        testimonials={testimonials}
                        autoplay={true}
                        colors={{
                            name: "#ffffff",
                            designation: "#fb923c",
                            testimony: "#d4d4d8",
                            arrowBackground: "#27272a",
                            arrowForeground: "#ffffff",
                            arrowHoverBackground: "#f59e0b",
                        }}
                        fontSizes={{
                            name: "1.75rem",
                            designation: "1rem",
                            quote: "1.25rem",
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

const testimonials = [
    {
        quote:
            "Switching to My School Bells was the single best infrastructure decision we made this year. The automated scheduling saved our admin staff hours of work every single week.",
        name: "Dr. Anjali Gupta",
        designation: "Principal, Lotus Valley International",
        src: "https://www.k12digest.com/wp-content/uploads/2020/09/Pallavi-Upadhyaya-PrincipalDPS-RNE-Ghaziabad-1_800x480-768x461.jpg"
    },
    {
        quote:
            "I love that we can customize the music for passing periods. The students are so much calmer when they walk into class hearing upbeat tunes instead of a harsh buzzer.",
        name: "Priya Sharma",
        designation: "Cultural Coordinator",
        src: "https://media.istockphoto.com/id/1331422830/photo/confident-smiling-indian-school-teacher-with-students-in-background.jpg?s=612x612&w=0&k=20&c=Y6yICEM3uqYlF0f-PyNPUuVXyjcOyoaqToKZv8vyNZY="
    },
    {
        quote:
            "As an IT Admin, the API integration allowed me to sync the bells with our existing clocks and digital signage. It just works seamlessly.",
        name: "Rahul Nair",
        designation: "IT Systems Administrator",
        src: "https://i.pinimg.com/1200x/39/64/02/396402e14dd1435ab7a75f9341155a88.jpg"
    }
];

export default WhyChooseUs;
