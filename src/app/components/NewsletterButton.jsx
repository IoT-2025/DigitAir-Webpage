"use client"
import React from 'react'
import { motion } from 'framer-motion'

const NewsletterButton = () => {
    return (
        <motion.button
            whileTap={{ scale: 0.95, boxShadow: "0px 1px 20px 1px rgba(0, 0, 0, 0.08)" }}
            className="2xl:text-3xl transition-all text-xl flex items-center xl:mb-24  justify-center bg-secondary text-tertiary md:rounded-2xl rounded-xl 2xl:w-[520px] 2xl:h-[100px] md:w-[380px] md:h-[70px] w-full h-[100px] hover:bg-secondary shadow-default-card">
            Guarda i nostri video
        </motion.button>
    )
}

export default NewsletterButton