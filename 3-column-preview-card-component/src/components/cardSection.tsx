import Image from 'next/image';

import { lexenda, bigShoulder } from '@/app/fonts';

export default function CardSection({ title, color, icon, children }) {
    // text-brightOrange
    // text-darkCyan
    // text-veryDarkCyan
    // bg-brightOrange
    // bg-darkCyan
    // bg-veryDarkCyan
    // hover:bg-brightOrange
    // hover:bg-darkCyan
    // hover:bg-veryDarkCyan
    return(
        <div className={`flex flex-col justify-between w-[19.125rem] ${lexenda.className} lg:w-62 bg-${color} h-full p-12`}>
            <div className="space-y-8">
                <Image 
                    src={icon}
                    alt=""
                    />
                <h1 className={`${bigShoulder.className} text-veryLightGray text-3xl uppercase`}>
                    {title}
                </h1>
                <p className="text-transparentWhite/75">
                    {children}
                </p>
            </div>
            <div>
                <div className={`rounded-3xl border-2 border-veryLightGray text-${color} bg-veryLightGray hover:cursor-pointer p-2 w-2/3 text-center hover:bg-${color} hover:text-veryLightGray transition-color duration-100 ease-out`}>
                    Learn More
                </div>
            </div>
      </div>
    );
};