"use client";

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

type Path = {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    direction: string;
    };

const ChatBubbleAnimation = () => {


  // Define the paths
  const paths = [
    { startX: 220, startY: 150, endX: 430, endY: 290, direction: 'top-left' },
    { startX: 680, startY: 150, endX: 475, endY: 290, direction: 'top-right' },
    { startX: 220, startY: 770, endX: 430, endY: 630, direction: 'bottom-left' },
    { startX: 680, startY: 770, endX: 475, endY: 630, direction: 'bottom-right' }
  ];

  const createPath = (path: Path) => {
    // Function to generate SVG path data based on the direction and coordinates
    const { startX, startY, endX, endY, direction } = path;
    let midX, midY, finalPath;
    switch (direction) {
      case 'top-left':
        midX = endX - 20;
        midY = startY + 20;
        finalPath = `M${startX},${startY} L${midX},${startY} Q${endX},${startY} ${endX},${midY} L${endX},${endY}`;
        break;
      case 'top-right':
        midX = endX + 20;
        midY = startY + 20;
        finalPath = `M${startX},${startY} L${midX},${startY} Q${endX},${startY} ${endX},${midY} L${endX},${endY}`;
        break;
      case 'bottom-left':
        midX = endX - 20;
        midY = startY - 20;
        finalPath = `M${startX},${startY} L${midX},${startY} Q${endX},${startY} ${endX},${midY} L${endX},${endY}`;
        break;
      case 'bottom-right':
        midX = endX + 20;
        midY = startY - 20;
        finalPath = `M${startX},${startY} L${midX},${startY} Q${endX},${startY} ${endX},${midY} L${endX},${endY}`;
        break;
      default:
        break;
    }
    return finalPath;
  };

  const bubblePaths = paths.map(createPath);

  return (
    <div>
      {bubblePaths.map((path, index) => (
        <motion.div
          key={index}
          className="chat-bubble"
          initial={{ offsetDistance: '0%' }}
          animate={{ offsetDistance: '100%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
            delay: index * 0.5 // Stagger the start time for each bubble
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundImage: 'url("/images/chat-bubble 1.png")',
            width: '40px',
            height: '40px',
            backgroundSize: 'cover'
          }}
        >
          <svg width="0" height="0">
            <path id={`path-${index}`} d={path} />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default ChatBubbleAnimation;