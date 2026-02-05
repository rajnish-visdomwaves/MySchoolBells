import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
    // A ref to scope all animations to this component
    const scopeRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Fade Up elements with .animate-fade-up class
            const fadeUps = document.querySelectorAll('.animate-fade-up');
            fadeUps.forEach((el) => {
                gsap.fromTo(el,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            // Stagger lists with .animate-stagger class (for direct children)
            const staggerLists = document.querySelectorAll('.animate-stagger-container');
            staggerLists.forEach((list) => {
                const children = list.children;
                gsap.fromTo(children,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: list,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

        }, scopeRef);

        return () => ctx.revert();
    }, []);

    return scopeRef;
};
