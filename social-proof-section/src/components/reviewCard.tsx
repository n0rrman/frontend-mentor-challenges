import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface ReviewCardProps {
  name: string;
  title: string;
  profilePic: StaticImageData;
  children: ReactNode;
  className?: string;
}

export default function ReviewCard(props: ReviewCardProps) {
  return (
    <div
      className={`${props.className} bg-darkMagenta w-full sm:w-96 lg:w-[21.875rem] p-8 rounded-lg`}
    >
      <div className="flex flex-row py-2">
        <div className="relative w-10 h-10 sm:w-10 sm:h-10 overflow-hidden rounded-full mr-6">
          <Image alt="profile picture" fill src={props.profilePic.src} />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-base font-semibold tracking-wide">
            {props.name}
          </h1>
          <h2 className="-mt-1 text-base text-softPink tracking-wide block md:hidden lg:block">
            {props.title}
          </h2>
        </div>
      </div>
      <div className="text-white opacity text-[0.97rem] sm:text-[0.8rem] xl:text-[0.97rem] leading-[1.36rem] tracking-[0.019em] pt-4 pb-0 sm:pb-2">
        &lsquo;&lsquo; {props.children} &lsquo;&lsquo;
      </div>
    </div>
  );
}
