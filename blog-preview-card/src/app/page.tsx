import Image from "next/image";

import profileImg from "/public/image-avatar.webp";
import illustrationImg from "/public/illustration-article.svg";

export default function Home() {
  return (
    <div className="flex font-semibold justify-center items-center min-h-screen bg-primaryYellow">
      <main className="flex flex-col m-6 gap-3 w-96 py-[1.18rem] px-[1.45rem] border border-neutralBlack bg-neutralWhite shadow-[8px_8px_0px_0px_rgb(0,0,0)] rounded-[1.25rem]">
        <div className="relative w-full h-auto py-1 rounded-[1rem] overflow-hidden mb-1.5">
          <Image
            className="object-cover"
            width={336}
            height={201}
            src={illustrationImg.src}
            alt=""
          />
        </div>
        <div className="group hover:cursor-pointer space-y-[0.89rem]">
          <div className="px-3 w-min text-xs sm:text-sm font-extrabold py-[0.25rem] bg-primaryYellow inline-block rounded">
            Learning
          </div>
          <div className="text-xs sm:text-sm pt[0.2rem]">
            Published 21 Dec 2023
          </div>
          <h1 className="font-extrabold text-xl sm:text-2xl group-hover:text-primaryYellow transition-colors duration-200 ease-out">
            HTML & CSS foundations
          </h1>
          <p className="text-sm sm:text-base text-neutralGrey tracking-[-0.005rem]">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="flex flex-row group hover:cursor-pointer justify-start items-center pt-3 pb-1">
          <div className="relative w-8 h-8 rounded-full group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[4px_4px_0px_0px_hsl(var(--color-neutralBlack))] duration-200 transition-transform ease-out  ">
            <Image src={profileImg.src} alt="" fill />
          </div>
          <div className="font-extrabold px-3 text-sm group-hover:text-primaryYellow transition-colors duration-200 ease-out">
            Greg Hooper
          </div>
        </div>
      </main>
    </div>
  );
}
