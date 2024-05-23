"use client"
import { useAnimate, motion } from "framer-motion";


const UseAnimate = () => {
    const [scope, animate] = useAnimate();

    


    return (
        <div ref={scope}>
            <motion.div whileHover={{
                scale: 1.6,
                x: 30,
                rotate: 35,
                borderRadius: "50%",
                transition: {
                    duration: 0.9
                }
            }} 
            animate={{
                scale: 1,
                x: 0,
                rotate: 0,
                borderRadius: "0%",
                transition: {
                    duration: 0.9
            
                }
            }}
            id="target" className=" h-24 w-24 bg-violet-500" />
           

        </div>
    )
}

export default UseAnimate;