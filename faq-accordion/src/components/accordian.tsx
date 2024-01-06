"use client";

import { useState } from "react";

interface AccordianProps {
  data: {
    id: number;
    heading: string;
    content: string;
  }[];
}

export default function Accordian(props: AccordianProps) {
  const [expandedId, setExpandedId] = useState(-1);

  const handleClick = (id: number) => {
    setExpandedId(id === expandedId ? -1 : id);
  };

  const renderedData = props.data.map((section) => {
    const expandedSection = <div>{section.content}</div>;
    const colapsedSection = <></>;
    return (
      <div onClick={(e) => handleClick(section.id)} key={section.id}>
        <div>{section.heading}</div>
        {section.id === expandedId ? expandedSection : colapsedSection}
      </div>
    );
  });

  return <div>{renderedData}</div>;
}
