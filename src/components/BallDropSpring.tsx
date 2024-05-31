"use client";
import { animate, motion } from "framer-motion";
import { useState } from "react";

const BallDropSpring = () => {

    const [isBallDropped, setIsBallDropped] = useState(false);

    const handleClick = () => {
        setIsBallDropped(true);
    };


    return (
        <div>
            <motion.div 
              onClick={handleClick}
              animate={{
                y: isBallDropped ? 300 : 0,
                transition: { type: "spring", stiffness: 600, damping: 10 }
              }}
              className="h-20 w-20 rounded-full bg-red-400">

        </motion.div>
        </div >
    )
}

export default BallDropSpring;