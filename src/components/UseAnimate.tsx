"use client"
import { useAnimate } from "framer-motion";

const UseAnimate = () => {
    const [scope, animate] = useAnimate();

    const handleAnimate = async () => {
        console.log("Animating")
        await animate("#target", { x: 150 })
        await animate("#target", { y: 150, rotate: 360 }, { duration: 0.5})
        await animate("#target", {borderRadius: "100%"}, {duration: 0.5})
        await animate("#target", {
            x: -150,
            borderRadius: "25px",
            rotate: 180,
            backgroundColor: "#f59e0b",
        })
        await animate("button", { rotate: 360 })
        await animate("#target", {
            y: 0,
            borderRadius: "0px",
            rotate: 0,
        }, { duration: 0.5 })
        await animate("#target", { x: 0 , backgroundColor: "#4f46e5"}, { duration: 0.5 })

        await animate("button", { rotate: 0 })

    }


    return (
        <div ref={scope}>
            <div id="target" className="h-24 w-24 bg-violet-500" />
            <button
                onClick={() => handleAnimate()}
                className="mt-4 rounded-md bg-slate-900 px-4 py-2 text-white">
                Trigger Animation
            </button>

        </div>
    )
}

export default UseAnimate;