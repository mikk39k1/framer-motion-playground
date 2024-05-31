"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

type ImageType = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

const ImageWheel = () => {
    const outerImages = [
        { src: 'https://intellioptima.eu-central-1.linodeobjects.com/claude3.png', alt: '1', width: 50, height: 50 },
        { src: 'https://intellioptima.eu-central-1.linodeobjects.com/dal-e logo.webp', alt: '2', width: 70, height: 70 },
        { src: 'https://intellioptima.eu-central-1.linodeobjects.com/gemini-pro.png', alt: '3', width: 50, height: 50 },
        { src: 'https://intellioptima.eu-central-1.linodeobjects.com/gpt.jpg', alt: '4', width: 70, height: 70 },
        { src: 'https://intellioptima.eu-central-1.linodeobjects.com/llama-2-70b.png', alt: '5', width: 50, height: 50 },
        { src: 'https://intellioptima.eu-central-1.linodeobjects.com/stability-ai.jpg', alt: '6', width: 70, height: 70 },
        { src: 'https://intellioptima.eu-central-1.linodeobjects.com/perplexity-icon.webp', alt: '6', width: 50, height: 50 },
        { src: 'https://intellioptima.eu-central-1.linodeobjects.com/Mixtral Logo.png', alt: '1', width: 70, height: 70 },
    ];

    const innerImages = [
        { src: 'https://intellioptima.eu-central-1.linodeobjects.com/Mixtral Logo.png', alt: '1', width: 70, height: 70 },
        { src: 'https://intellioptima.eu-central-1.linodeobjects.com/codellama-bucket.png', alt: '2', width: 50, height: 50 },
        { src: 'https://intellioptima.eu-central-1.linodeobjects.com/gemini-pro.png', alt: '3', width: 70, height: 70 },
        { src: 'https://intellioptima.eu-central-1.linodeobjects.com/llama-2-70b.png', alt: '4', width: 50, height: 50 },
        { src: 'https://intellioptima.eu-central-1.linodeobjects.com/logo-perplexity-Ai.webp', alt: '5', width: 70, height: 70 },
        { src: 'https://intellioptima.eu-central-1.linodeobjects.com/perplexity-icon.webp', alt: '6', width: 50, height: 50 },
    ];

    const outerRadius = 250;
    const innerRadius = 150;
    const rotationDuration = 30;

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        let outerRotation = 0;
        let innerRotation = 0;

        const drawCircleLines = (radius: number, rotation: number) => {
            if (!context) return;
            context.save();
            context.translate(canvas.width / 2, canvas.height / 2);
            context.rotate(rotation);
            context.beginPath();
            context.arc(0, 0, radius, 0, Math.PI * 2);
            context.strokeStyle = '#cccc';
            context.lineWidth = 1;
            context.lineCap = 'round';
            context.setLineDash([7, 7]);
            context.stroke();
            context.restore();
        };

        const drawBothCircles = () => {
            if (!context) return;
            context.clearRect(0, 0, canvas.width, canvas.height);
            drawCircleLines(innerRadius, innerRotation);
            drawCircleLines(outerRadius, outerRotation);
            outerRotation += Math.PI * 2 / (rotationDuration * 320);
            innerRotation -= Math.PI * 2 / (rotationDuration * 30);
        };

        const interval = setInterval(drawBothCircles, 1000 / 60);

        return () => clearInterval(interval);
    }, []);


    return (
        
        <motion.div
            className='h-[700px] w-[700px] absolute flex justify-center items-center'
            animate={{
                rotate: 360,
            }}
            transition={{
                repeat: Infinity,
                duration: rotationDuration,
                ease: 'linear'
            }}
        >
            
            <canvas
                ref={canvasRef}
                width="700"
                height="700"
                className='h-[700px] w-[700px] absolute flex justify-center items-center'
            >

            </canvas>
            <motion.div
                className='absolute flex justify-center items-center'
                animate={{
                    rotate: -360,
                }}
                transition={{
                    repeat: Infinity,
                    duration: rotationDuration,
                    ease: 'linear'
                }}
            >
            <Image
                    className='rounded-full shadow-xl border border-gray-50 p-4'
                    src='https://intellioptima.eu-central-1.linodeobjects.com/IntelliOptima-logo.png'
                    alt='intelliOptima logo'
                    width={120}
                    height={120}
                />
            </motion.div>
                
            {outerImages.map((outerImage, index) => {
                const angle = (index / outerImages.length) * Math.PI * 2;
                const x = outerRadius * Math.cos(angle) - outerImage.width / 2;
                const y = outerRadius * Math.sin(angle) - outerImage.height / 2;

                return (
                    <motion.div
                        key={index}
                        className='absolute'
                        style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                        }}
                    >
                        <motion.div
                            animate={{
                                rotate: -360,
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: 'loop',
                                duration: rotationDuration,
                                ease: 'linear'
                            }}
                        >
                            <Image
                                className='rounded-full shadow-xl'
                                src={outerImage.src}
                                alt={outerImage.alt}
                                width={outerImage.width}
                                height={outerImage.height}
                            />
                        </motion.div>
                    </motion.div>
                );
            })}
            <motion.div
                className='h-[700px] w-[700px] absolute flex justify-center items-center'
                animate={{
                    rotate: -720,
                }}
                transition={{
                    repeat: Infinity,
                    duration: rotationDuration,
                    ease: 'linear'
                }}
            >
        
                {innerImages.map((innerImage, index) => {
                    const angle = (index / innerImages.length) * Math.PI * 2;
                    const x = innerRadius * Math.cos(angle) - innerImage.width / 2;
                    const y = innerRadius * Math.sin(angle) - innerImage.height / 2;
                    return (
                        <motion.div
                            key={index}
                            className='absolute'
                            style={{
                                left: `calc(50% + ${x}px)`,
                                top: `calc(50% + ${y}px)`,
                            }}
                        >
                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                    duration: rotationDuration,
                                    ease: 'linear'
                                }}
                            >
                                <Image
                                    className='rounded-full shadow-xl'
                                    src={innerImage.src}
                                    alt={innerImage.alt}
                                    width={innerImage.width}
                                    height={innerImage.height}
                                />
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>
            <motion.div
                className='flex justify-center items-center'
                animate={{
                    rotate: -360,
                }}
                transition={{
                    repeat: Infinity,
                    duration: rotationDuration,
                    ease: 'linear'
                }}
            >
                
            </motion.div>
            
        </motion.div>
    );
}

export default ImageWheel;