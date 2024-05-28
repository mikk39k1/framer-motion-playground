"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedShowcase = () => {
    const lowerContainerRef = useRef<HTMLDivElement>(null);
    const upperContainerRef = useRef<HTMLDivElement>(null);

    const upperImages = [
        { src: "/images/claude3.png", alt: "claude3", width: 80, height: 80 },
        { src: "/images/dal-e logo.webp", alt: "dall-e", width: 80, height: 80 },
        { src: "/images/gemini-pro.png", alt: "Gemini", width: 80, height: 80 },
        { src: "/images/gpt (1).jpg", alt: "Gemini", width: 80, height: 80 },
        { src: "/images/gpt (1).jpg", alt: "Gemini", width: 80, height: 80 },
        { src: "/images/gemini-pro.png", alt: "Gemini", width: 80, height: 80 },
        { src: "/images/dal-e logo.webp", alt: "dall-e", width: 80, height: 80 },
        { src: "/images/claude3.png", alt: "claude3", width: 80, height: 80 },
    ];

    const lowerImages = [
        { src: "/images/gpt (1).jpg", alt: "Gemini", width: 80, height: 80 },
        { src: "/images/gemini-pro.png", alt: "Gemini", width: 80, height: 80 },
        { src: "/images/dal-e logo.webp", alt: "dall-e", width: 80, height: 80 },
        { src: "/images/claude3.png", alt: "claude3", width: 80, height: 80 },
        { src: "/images/gpt (1).jpg", alt: "Gemini", width: 80, height: 80 },
        { src: "/images/gemini-pro.png", alt: "Gemini", width: 80, height: 80 },
        { src: "/images/dal-e logo.webp", alt: "dall-e", width: 80, height: 80 },
        { src: "/images/claude3.png", alt: "claude3", width: 80, height: 80 },
    ];

    useEffect(() => {
        const lowerContainer = lowerContainerRef.current;
        const upperContainer = upperContainerRef.current;
        if (!lowerContainer || !upperContainer) return;
        const scrollWidth: number = lowerContainer.scrollWidth / 2;

        let lowerStart = 0;
        let upperStart = scrollWidth;
        const speed = 0.5; 

        const scrollLeft = () => {
            lowerStart += speed;
            if (lowerStart >= scrollWidth) {
                lowerStart = 0;
            }
            lowerContainer.scrollLeft = lowerStart;
            requestAnimationFrame(scrollLeft);
        };

        const scrollRight = () => {
            upperStart -= speed;
            if (upperStart <= 0) {
                upperStart = scrollWidth;
            }
            upperContainer.scrollLeft = upperStart;
            requestAnimationFrame(scrollRight);
        };

        scrollLeft();
        scrollRight();
    }, []);

    return (
        <div
            style={{
                backgroundImage: "url('/images/animated-showcase.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
            className="flex flex-col justify-around h-[500px] w-[650px] border border-gray-300 shadow-xl rounded-2xl p-4 overflow-hidden"
        >
            <div>
                <div ref={upperContainerRef} className="overflow-x-hidden opacity-80">
                    <motion.div
                        className="flex justify-around"
                        style={{ display: 'flex', width: '200%' }}
                    >
                        {upperImages.concat(upperImages).map((image, index) => (
                            <Image
                                className="shadow-xl rounded-3xl mr-4"
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                            />
                        ))}
                    </motion.div>
                </div>
                <div ref={lowerContainerRef} className="overflow-x-hidden mt-8 opacity-80">
                    <motion.div
                        className="flex justify-around"
                        style={{ display: 'flex', width: '200%' }}
                    >
                        {lowerImages.concat(lowerImages).map((image, index) => (
                            <Image
                                className="shadow-xl rounded-3xl mr-4"
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="ml-4 mb-4 flex flex-col">
                <h2 className="font-semibold text-4xl mb-2 text-white">Animated Showcase Title</h2>
                <p className="w-3/4 text-lg text-white">Animated showcase description underneath the title that can describe a description of description.</p>
            </div>
        </div>
    );
};

export default AnimatedShowcase;
