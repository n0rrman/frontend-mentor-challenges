import Image from "next/image";

import Accordian from "@/components/accordian";

import bgMobile from "/public/background-pattern-mobile.svg";
import bgDesktop from "/public/background-pattern-desktop.svg";

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
      heading: "How can I get help if I'm stuck on a challenge?",
      content:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-lightPink">
      <div className="absolute top-0 w-full h-[270px] ">
        <div className="relative w-screen h-full object-cover">
          {/* <Image className="object-cover" src={bgDesktop.src} alt="" fill /> */}
        </div>
      </div>
      <main className="bg-white w-[37.5rem] rounded-2xl px-10 py-3 shadow-2xl shadow-grayishPurple/25">
        <div className="flex flex-row justify-start items-center pt-3">
          <div className="relative w-10 h-10 mr-6">
            <Image src={starIcon.src} fill alt="" />
          </div>
          <h1 className="text-darkPurple text-[3.5rem] font-bold">FAQs</h1>
        </div>
        <Accordian data={data} />
      </main>
    </div>
  );
}
