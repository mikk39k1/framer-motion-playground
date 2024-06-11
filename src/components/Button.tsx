"use client";

import { motion } from 'framer-motion'

const Button = () => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-white p-4 rounded-2xl font-semibold text-2xl bg-gradient-to-r from-[#9C39FF] from-0% via-[#9B36FF] via-61% to-[#8913FF] to-100%">
            Get Started for Free
        </motion.button>

    )
}

export default Button