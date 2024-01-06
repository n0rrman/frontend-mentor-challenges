import Image from "next/image";

import Accordian from "@/components/accordian";

import bgMobile from "/public/background-pattern-mobile.svg";
import bgDesktop from "/public/background-pattern-desktop.svg";

import minusIcon from "/public/icon-minus.svg";
import plusIcon from "/public/icon-plus.svg";
import starIcon from "/public/icon-star.svg";

export default function Home() {
  const data = [
    {
      id: 0,
      heading: "What is Frontend Mentor, and how will it help me?",
      content:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      id: 1,
      heading: "Is Frontend Mentor free?",
      content:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      id: 2,
      heading: "Can I use Frontend Mentor projects in my portfolio?",
      content:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      id: 3,
      heading:
        "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      content:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-lightPink">
      <div className="absolute top-0 w-full h-[270px]">
        <div className="relative w-screen h-full object-cover">
          {/* <Image className="object-cover" src={bgDesktop.src} alt="" fill /> */}
        </div>
      </div>
      <main className="bg-white max-w-[37.5rem]">
        <h1 className="text-darkPurple text-3xl font-bold">FAQs</h1>
        <Accordian data={data} />
      </main>
    </div>
  );
}
