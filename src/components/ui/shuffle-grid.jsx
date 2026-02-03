import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const ShuffleHero = () => {
    return (
        <section className="w-full px-8 py-20 bg-black text-white relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-7xl mx-auto">
                <div className="space-y-6">
                    <span className="block text-sm md:text-base text-orange-400 font-semibold tracking-wider uppercase">
                        Smart & Synchronized
                    </span>
                    <h3 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Orchestrate Your School's Rhythm
                    </h3>
                    <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg">
                        Say goodbye to manual ringing and confusing schedules. Our automated system ensures every class, break, and assembly starts exactly on time, creating a seamless flow for students and staff.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <button className={cn(
                            "bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold py-3 px-8 rounded-full",
                            "transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                        )}>
                            View Solutions
                        </button>
                        <button className={cn(
                            "bg-white/10 text-white font-medium py-3 px-8 rounded-full border border-white/10",
                            "transition-all duration-300 hover:bg-white/20 hover:border-white/30",
                            "backdrop-blur-sm"
                        )}>
                            Request Demo
                        </button>
                    </div>
                </div>
                <ShuffleGrid />
            </div>
        </section>
    );
};

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

// Simplified Square Data with Reliable Unsplash IDs
const squareData = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600",
        alt: "Teacher in classroom"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&q=80&w=600",
        alt: "School hallway"
    },
    {
        id: 3,
        src: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg",
        alt: "Students studying"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=600",
        alt: "Modern classroom"
    },
    {
        id: 5,
        src: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
        alt: "Graduation cap"
    },
    {
        id: 6,
        src: "https://images.pexels.com/photos/10880679/pexels-photo-10880679.jpeg",
        alt: "Auditorium seats"
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600",
        alt: "Library books"
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=600",
        alt: "Empty classroom"
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600",
        alt: "Student writing"
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=600",
        alt: "Library interior"
    },
    {
        id: 11,
        src: "https://images.pexels.com/photos/30889597/pexels-photo-30889597.jpeg",
        alt: "Students laughing"
    },
    {
        id: 12,
        src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=600",
        alt: "School clock"
    },
    {
        id: 13,
        src: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?auto=format&fit=crop&q=80&w=600",
        alt: "Student with backpack"
    },
    {
        id: 14,
        src: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=600",
        alt: "Science laboratory"
    },
    {
        id: 15,
        src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?auto=format&fit=crop&q=80&w=600",
        alt: "Group discussion"
    },
    {
        id: 16,
        src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600",
        alt: "Library aisle"
    }
];

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full rounded-lg overflow-hidden relative group bg-gray-900"
        >
            <img
                src={sq.src}
                alt={sq.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
        </motion.div>
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        shuffleSquares();
                    } else {
                        if (timeoutRef.current) {
                            clearTimeout(timeoutRef.current);
                            timeoutRef.current = null;
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const shuffleSquares = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current); // Clear any existing timeout
        setSquares(generateSquares());
        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div ref={containerRef} className="grid grid-cols-4 grid-rows-4 h-[450px] gap-2">
            {squares.map((sq) => sq)}
        </div>
    );
};

export default ShuffleHero;
