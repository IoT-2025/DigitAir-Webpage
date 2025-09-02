'use client'
import React from 'react'
import { Card, Canvas3D } from "./index";
import { architettura } from '../assets';
import Image from 'next/image';
import { homeCardStyles, titlesStyles } from '../styles/styles';
import { contents } from '../costants';


const FirstSection = () => {
    return (
        <>
            <div id='architecture' className="w-full h-[50px] md:h-[20px] 2xl:h-[100px] "/>
            <section className="z-0 flex flex-col gap-[200px] md:gap-0 items-center justify-center w-full h-full px-10 pb-12 sm:px-0">
                <div className="flex flex-col-reverse items-center justify-center gap-16 w-full 2xl:h-full h-[500px] pb-12 lg:flex-row ">
                    <Card card={contents.architettura}/>
                    <div className={`flex items-center justify-center w-1/2 h-full bg-glass/60 ${homeCardStyles}`}>
                        <Image src={architettura} alt="architettura" className="object-contain w-full h-full" />
                    </div>
                </div>
            </section>
            <div id='products' className="w-full h-[25px] md:h-[15px] 2xl:h-[50px] " />
            <section className="z-0 flex flex-col gap-[200px] md:gap-0 items-center justify-center w-full h-full px-10 pb-12 sm:px-0">
                <h1 className={titlesStyles}>Progettazione</h1>
                <div className="flex flex-col-reverse items-center justify-center w-full 2xl:h-full h-[500px] pb-12 lg:flex-row ">
                    <Card />
                    <div className="flex items-center justify-center w-full h-full 2xl:h-[500px] md:w-1/2">
                        <Canvas3D className="2xl:w-[550px] 2xl:h-full md:w-[450px] w-full " />
                    </div>
                </div>
                <div className="flex flex-col-reverse items-center justify-center w-full 2xl:h-full h-[500px] pb-12 lg:flex-row">
                    <div className="flex items-center justify-center w-1/2 h-full">
                        Mettere immagine qua
                    </div>
                    <Card />
                </div>
            </section>

        </>
    )
}

export default FirstSection