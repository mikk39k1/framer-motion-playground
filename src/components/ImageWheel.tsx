"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const ImageWheel = () => {
    const outerImages = [
        { src: '/images/claude3.png', alt: '1', width: 50, height: 50 },
        { src: '/images/dal-e logo.webp', alt: '2', width: 70, height: 70 },
        { src: '/images/gemini-pro.png', alt: '3', width: 50, height: 50 },
        { src: '/images/gpt (1).jpg', alt: '4', width: 70, height: 70 },
        { src: '/images/llama-2-70b.png', alt: '5', width: 50, height: 50 },
        { src: '/images/stability-ai.jpg', alt: '6', width: 70, height: 70 },
    ];

    const innerImages = [
        { src: '/images/claude3.png', alt: '1', width: 70, height: 70 },
        { src: '/images/dal-e logo.webp', alt: '2', width: 50, height: 50 },
        { src: '/images/gemini-pro.png', alt: '3', width: 70, height: 70 },
        { src: '/images/gpt (1).jpg', alt: '4', width: 50, height: 50 },
        { src: '/images/llama-2-70b.png', alt: '5', width: 70, height: 70 },
        { src: '/images/stability-ai.jpg', alt: '6', width: 50, height: 50 },
    ];

    const outerRadius = 250;
    const innerRadius = 150;
    const containerSize = 600;
    const rotationDuration = 30;

    return (
        <motion.div
            className={`h-[${containerSize}px] w-[${containerSize}px] relative`}
            animate={{
                rotate: 360,
            }}
            transition={{
                repeat: Infinity,
                duration: rotationDuration,
                ease: 'linear'
            }}
        >
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
                                className='rounded-full'
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
                className={`h-[${containerSize}px] w-[${containerSize}px] relative`}
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
                className='absolute'
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
                    src='/images/intelliOptima-logo.png'
                    alt='intelliOptima logo'
                    width={100}
                    height={100}
                />
            </motion.div>
        </motion.div>
    );
}

export default ImageWheel;
