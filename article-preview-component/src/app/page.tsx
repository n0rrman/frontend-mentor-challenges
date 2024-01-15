import Image from "next/image";

import profilePic from "/public/avatar-michelle.jpg";
import productImg from "/public/drawers.jpg";
import shareIcon from "/public/icon-share.svg";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-lightGrayishBlue">
      <div className="flex flex-col md:flex-row text-veryDarkBlue w-[45.625rem] bg-white rounded-xl shadow-xl ">
        <div className="rounded-l-xl overflow-hidden w-full">
          <div className="relative h-full w-full brightness-105">
            <Image
              className="object-left object-cover"
              src={productImg}
              // width={660} height={528}
              fill
              alt=""
            />
          </div>
        </div>
        <main className="flex flex-col gap-3 px-10 py-8 max-w-[27.8rem]">
          <h1 className="text-xl font-bold">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>

          <p className="text-[0.8rem] text-desaturatedBlue">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>

          <div className="flex flex-row items-center justify-center">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image src={profilePic} alt="" fill />
            </div>
            <div className="flex flex-col flex-1 ml-4">
              <div className="text-sm font-bold">Michelle Appleton</div>
              <div className="text-sm text-grayishBlue">28 Jun 2020</div>
            </div>
            <div className="flex justify-center items-center rounded-full bg-lightGrayishBlue h-8 w-8">
              <Image src={shareIcon} alt="" width={15} height={15} />
            </div>
          </div>

          <div className="hidden">Share</div>
        </main>
      </div>
    </div>
  );
}
