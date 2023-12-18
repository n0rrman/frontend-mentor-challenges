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
      className={`${props.className} bg-darkMagenta w-46 sm:w-[21.875rem] p-8 rounded-lg`}
    >
      <div className="flex flex-row">
        <div className="relative w-10 h-10 sm:w-10 sm:h-10 overflow-hidden rounded-full mr-5">
          <Image alt="profile picture" fill src={props.profilePic.src} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-sm sm:text-base">{props.name}</h1>
          <h2 className="text-base text-softPink">{props.title}</h2>
        </div>
      </div>
      <div className="text-white py-4">{props.children}</div>
    </div>
  );
}
