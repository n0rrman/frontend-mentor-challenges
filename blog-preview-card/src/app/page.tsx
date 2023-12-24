import Image from "next/image";

import profileImg from "/public/image-avatar.webp";
import illustrationImg from "/public/illustration-article.svg";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-primaryYellow">
      <main className="flex flex-col gap-3.5 w-96 py-[1.18rem] px-[1.45rem] border border-neutralBlack bg-neutralWhite shadow-[8px_8px_0px_0px_rgb(0,0,0)] rounded-[1.25rem]">
        <div className="relative w-full h-[13rem] rounded-[1rem] overflow-hidden mb-1.5">
          <Image fill src={illustrationImg.src} alt="" />
        </div>
        <div className="group hover:cursor-pointer space-y-[0.89rem]">
          <div className="px-3 w-min text-sm font-bold py-[0.3rem] bg-primaryYellow inline-block rounded">
            Learning
          </div>
          <div className="text-sm">Published 21 Dec 2023</div>
          <h1 className="font-bold text-2xl group-hover:text-primaryYellow transition-colors duration-200 ease-out">
            HTML & CSS foundations
          </h1>
          <p className="text-neutralGrey tracking-[-0.005rem]">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="flex flex-row justify-start items-center pt-2 pb-1">
          <div className="relative w-8 h-8">
            <Image src={profileImg.src} alt="" fill />
          </div>
          <div className="font-bold px-3 text-sm">Greg Hooper</div>
        </div>
      </main>
    </div>
  );
}
