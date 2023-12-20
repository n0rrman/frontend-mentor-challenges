import Image from "next/image";
import { useState } from "react";

import starIcon from "/public/icon-star.svg";

interface ReviewModalProps {
  onSubmit: (score: number) => void;
}

export default function ReviewModal(props: ReviewModalProps) {
  const [score, setScore] = useState(0);

  const handleClick = (e: any) => {
    console.log(e.target.id);
    setScore(e.target.id);
  };

  const renderedButtons = [1, 2, 3, 4, 5].map((val) => {
    return (
      <div
        onClick={handleClick}
        className={`${
          val == score
            ? "bg-white"
            : "bg-darkBlue hover:cursor-pointer hover:bg-primaryOrange hover:text-white active:brightness-75"
        } flex justify-center text-[0.95rem] items-center active:scale-95 select-none rounded-full text-lightGray overflow-hidden w-2 h-2 p-[1.6rem] transition-all duration-200 ease-out`}
        key={val}
        id={`${val}`}
      >
        {val}
      </div>
    );
  });

  return (
    <div className="flex flex-col justify-between items-start h-full text-white">
      <div className="rounded-full p-4 bg-darkBlue">
        <div className="relative w-4 h-4">
          <Image fill src={starIcon.src} alt="" />
        </div>
      </div>
      <div>
        <h1 className="text-[1.7rem] tracking-wide">How did we do?</h1>
        <p className="pt-[0.4rem] tracking-wide text-lightGray text-[0.9rem] leading-6">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="flex flex-row justify-between w-full">
        {renderedButtons}
      </div>
      <button
        onClick={(e) => props.onSubmit(score)}
        className="flex justify-center items-center bg-primaryOrange w-full active:scale-y-95 active:scale-x-[0.99] active:brightness-90 rounded-3xl text-[0.97rem] uppercase py-2.5 tracking-widest hover:bg-white hover:text-primaryOrange transition-colors duration-200 ease-out"
      >
        Submit
      </button>
    </div>
  );
}
