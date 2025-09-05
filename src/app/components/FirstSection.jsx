'use client'
import React from 'react'
import { Card, Canvas3D, RepositoryButtons, ImageSlider, CardGrid } from "./index";
import { architettura } from '../assets';
import Image from 'next/image';
import { homeCardStyles, titlesStyles } from '../styles/styles';
import { contents } from '../costants';
import { Car } from 'lucide-react';


const FirstSection = () => {
    return (
        <>
            <section id='architettura' className="z-0 flex flex-col gap-[200px] md:gap-0 items-center justify-center w-full h-full px-10 pb-5 sm:px-0 scroll-mt-[100px]">
                <h1 className={titlesStyles}>Architettura</h1>
                <div className="flex flex-col-reverse items-center justify-center gap-16 w-full 2xl:h-full h-[500px] lg:flex-row ">
                    <Card card={contents.architettura}/>
                    <div className={`flex items-center justify-center w-1/2 h-full bg-glass/60 ${homeCardStyles}`}>
                        <Image src={architettura} alt="architettura" className="object-contain w-full h-full" />
                    </div>
                </div>
                <CardGrid/>
            </section>
            <section id='tecnologie' className="z-0 flex flex-col gap-[200px] md:gap-0 items-center justify-center w-full h-full px-10 pb-12 sm:px-0 scroll-mt-[125px]">
                <h1 className={titlesStyles}>Hardware</h1>
                <div className="flex flex-col-reverse items-center justify-center w-full 2xl:h-full h-[500px] pb-12 lg:flex-row ">
                    <Card card={contents.tecnologie}/>
                    <div className="flex items-center justify-center w-full h-full 2xl:h-[500px] md:w-1/2">
                        <Canvas3D className="2xl:w-[550px] 2xl:h-full md:w-[450px] w-full " />
                    </div>
                </div>
            </section>
                <section id="funzionalita" className="z-0 flex flex-col gap-[200px] md:gap-0 items-center justify-center w-full h-full px-10 pb-12 sm:px-0 scroll-mt-[125px]">
                    <h1 className={titlesStyles}>Funzionalità</h1>
                    <div className="flex flex-col-reverse items-center justify-center w-full 2xl:h-full h-[500px] pb-12 pt-18 lg:flex-row">
                        <div className="flex items-center justify-center w-1/2 h-full">
                            <ImageSlider/>
                        </div>
                        <Card card={contents.funzionalita} />
                    </div>            
            </section>
            
            <div id="demo-section" className="flex flex-col items-center justify-center w-full h-[500px] gap-4 mt-23">
                <h1 className="mb-5 text-4xl font-bold text-center text-secondary">Demo</h1>
                <div className="w-full max-w-4xl overflow-hidden rounded-lg bg-black/50 backdrop-blur-sm">
                    <video 
                        className="object-cover w-full h-full"
                        controls
                        preload="metadata"
                    >
                        <source src="DemoDigitAIR.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>

        </>
    )
}

export default FirstSection