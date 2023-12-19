import Image from "next/image";

import starIcon from "/public/icon-star.svg";

interface RatingBarProps {
  by: string;
  stars: number;
  className?: string;
}

export default function RatingBar(props: RatingBarProps) {
  return (
    <div className={props.className}>
      <div className="bg-lightMagenta text-darkMagenta font-bold p-3 md:p-[0.975rem] rounded-lg my-2 sm:m-2 w-full md:w-80 lg:w-[27.75rem]">
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center justify-start px-3.5 sm:px-4">
          <div className="flex flex-row items-center pt-1 sm:pt-0 justify-center space-x-2">
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
          <div className="pl-2 sm:pl-8 pt-2.5 sm:pt-0 medium text-[1.035rem] tracking-[0.01em]">
            Rated {props.stars} Star{props.stars == 1 ? "" : "s"} in {props.by}
          </div>
        </div>
      </div>
    </div>
  );
}
