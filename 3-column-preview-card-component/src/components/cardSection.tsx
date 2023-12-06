import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { ReactNode } from 'react';


import { lexenda, bigShoulder } from '@/app/fonts';

interface CardSectionProps {
    title: string,
    color: string,
    icon: StaticImageData,
    children: ReactNode
}

export default function CardSection(props: CardSectionProps) {
    // text-brightOrange
    // text-darkCyan
    // text-veryDarkCyan
    // bg-brightOrange
    // bg-darkCyan
    // bg-veryDarkCyan
    // hover:bg-brightOrange
    // hover:bg-darkCyan
    // hover:bg-veryDarkCyan
    //  
    return(
        <div className={`flex flex-col justify-between ${lexenda.className} bg-${props.color} h-full w-full lg:w-1/3 p-12`}>
            <div className="">
                <Image 
                    src={props.icon}
                    alt=""
                    />
                <h1 className={`${bigShoulder.className} pt-[1.9rem] text-veryLightGray/95 text-[2.4rem] tracking-wide uppercase`}>
                    {props.title}
                </h1>
                <p className="text-[0.9rem] pt-[1.35rem] leading-[1.55rem] tracking-wide text-transparentWhite/70">
                    {props.children}
                </p>
            </div>
            <div>
                <div className={`rounded-3xl text-[0.965rem] border-2 border-veryLightGray/95 text-${props.color} mt-8 bg-veryLightGray/95 hover:cursor-pointer p-[0.65rem] px-7 w-fit text-center hover:bg-${props.color} hover:text-veryLightGray/95 transition-color duration-100 ease-out`}>
                    Learn More
                </div>
            </div>
      </div>
    );
};