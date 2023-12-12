import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface ReviewCardProps {
  name: string;
  title: string;
  // profilePic: StaticImageData;
  children: ReactNode;
  className?: string;
}

export default function ReviewCard(props: ReviewCardProps) {
  return (
    <div className={`${props.className} bg-darkMagenta w-72 p-4`}>
      <div>
        <h1 className="text-xl">{props.name}</h1>
        <h2 className="text-lg text-softPink">{props.title}</h2>
      </div>
      <div className="text-white">{props.children}</div>
    </div>
  );
}
