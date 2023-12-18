import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ReactNode } from "react";

import starIcon from "/public/icon-star.svg";

interface RatingBarProps {
  by: string;
  stars: number;
  className?: string;
}

export default function RatingBar(props: RatingBarProps) {
  return (
    <div className={props.className}>
      <div className="bg-lightMagenta text-darkMagenta font-bold p-10 sm:p-3 rounded-xl m-2 w-full sm:w-[27.5rem]">
        <div className="flex flex-col sm:flex-row items-center justify-start">
          <div className="flex flex-row items-center justify-center space-x-2 sm:px-4">
            <Image
              className={props.stars < 1 ? "opacity-25" : ""}
              src={starIcon}
              alt=""
            />
            <Image
              className={props.stars < 2 ? "opacity-25" : ""}
              src={starIcon}
              alt=""
            />
            <Image
              className={props.stars < 3 ? "opacity-25" : ""}
              src={starIcon}
              alt=""
            />
            <Image
              className={props.stars < 4 ? "opacity-25" : ""}
              src={starIcon}
              alt=""
            />
            <Image
              className={props.stars < 5 ? "opacity-25" : ""}
              src={starIcon}
              alt=""
            />
          </div>
          <div className="pl-5 text-lg">
            Rated {props.stars} Star{props.stars == 1 ? "" : "s"} in {props.by}
          </div>
        </div>
      </div>
    </div>
  );
}
