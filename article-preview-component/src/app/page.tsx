import Image from "next/image";

import profilePic from "/public/avatar-michelle.jpg";
import productImg from "/public/drawers.jpg";
// import shareIcon from "/public/icon-share.svg";

// import { FaShare } from "react-icons/fa";
// import { IoIosShareAlt } from "react-icons/io";
import { PiShareFatFill } from "react-icons/pi";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-lightGrayishBlue">
      <div className="flex flex-col md:flex-row text-veryDarkBlue w-[45.625rem] bg-white rounded-xl shadow-xl ">
        <div className="rounded-l-xl overflow-hidden w-full">
          <div className="relative h-full w-full">
            <Image
              className="object-left object-cover contrast-105 scale-[1.005]"
              src={productImg}
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

          <p className="text-[0.8125rem] text-desaturatedBlue pb-2">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>

          <div className="flex flex-row items-center justify-center">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image src={profilePic} alt="" fill />
            </div>
            <div className="flex flex-col flex-1 ml-4 text-[0.8125rem]">
              <div className="font-bold">Michelle Appleton</div>
              <div className=" text-grayishBlue">28 Jun 2020</div>
            </div>
            <div className="group hover:cursor-pointer">
              <div className="flex text-lg justify-center items-center  rounded-full group-hover:text-lightGrayishBlue  group-hover:bg-desaturatedBlue text-desaturatedBlue bg-lightGrayishBlue h-8 w-8">
                <PiShareFatFill />
                {/* <Image
                  src={shareIcon}
                  className=""
                  alt=""
                  width={15}
                  height={15}
                /> */}
                <div className="group-hover:flex self-end -translate-y-[3.7rem] absolute items-center justify-center group-hover:cursor-pointer hidden bg-veryDarkBlue h-[3.4375rem] rounded-lg w-[15.5rem] text-grayishBlue">
                  <div className="uppercase tracking-[0.3rem] text-sm">
                    Share
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
