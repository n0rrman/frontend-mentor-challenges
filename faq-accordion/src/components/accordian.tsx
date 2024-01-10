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

    const expandedSection = (
      <div className="text-grayishPurple pb-6">{section.content}</div>
    );
    const colapsedSection = <></>;

    return (
      <div
        className="border-b border-l-grayishPurple last:border-b-0 group"
        onClick={(e) => handleClick(section.id)}
        key={section.id}
      >
        <div className="flex flex-row justify-between items-center py-6 font-bold text-lg text-darkPuple group-hover:cursor-pointer group-hover:text-[#AD28EB]">
          <h2>{section.heading}</h2>
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
              ? "text-base text-grayishPurple h-[7.5rem]"
              : "text-[0rem] text-white h-0 "
          } transition-all duration-200 ease-in-out`}
        >
          {section.content}
        </div>
        {/* {expanded ? expandedSection : colapsedSection} */}
      </div>
    );
  });

  return (
    <div className="transition-all duration-200 ease-in-out">
      {renderedData}
    </div>
  );
}
