"use client";

interface ExpandableSectionProps {
  heading: string;
  content: string;
  expanded?: boolean;
}

export default function ExpandableSection(props: ExpandableSectionProps) {
  return (
    <div>
      <div>{props.heading}</div>
      <div>{props.content}</div>
      {props.expanded ? "yes" : "no"}
    </div>
  );
}
