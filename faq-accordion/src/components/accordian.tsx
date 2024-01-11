"use client";

import { useState } from "react";
import Image from "next/image";

import minusIcon from "/public/icon-minus.svg";
import plusIcon from "/public/icon-plus.svg";

interface AccordianProps {
  data: {
    id: number;
    heading: string;
    content: string;
  }[];
}

export default function Accordian(props: AccordianProps) {
  const [expandedId, setExpandedId] = useState(0);

  const handleClick = (id: number) => {
    setExpandedId(id === expandedId ? -1 : id);
  };

  const renderedData = props.data.map((section) => {
    const expanded = section.id === expandedId;

    return (
      <div
        className="border-b border-l-grayishPurple last:border-b-0 group"
        onClick={(e) => handleClick(section.id)}
        key={section.id}
      >
        <div className="flex flex-row justify-between items-center py-[1.3rem] sm:py-[1.45rem] leading-5 sm:leading-auto font-bold text-base sm:text-lg text-darkPuple group-hover:cursor-pointer group-hover:text-[#AD28EB]">
          <h2 className="w-10/12 sm:w-full">{section.heading}</h2>
          <div className="relative w-8 h-8">
            <Image
              src={`${expanded ? minusIcon.src : plusIcon.src}`}
              alt=""
              fill
            />
          </div>
        </div>
        <div
          className={`${
            expanded
              ? "text-sm sm:text-base text-grayishPurple h-[8.7rem] md:h-[7.5rem]"
              : "text-[0rem] text-white h-0 "
          } transition-all duration-200 ease-in-out`}
        >
          {section.content}
        </div>
      </div>
    );
  });

  return <div className="pt-2 sm:pt-0">{renderedData}</div>;
}
