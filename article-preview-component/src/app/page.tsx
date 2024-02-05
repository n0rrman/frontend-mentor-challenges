import Image from "next/image";

import Link from "next/link";

import profilePic from "/public/avatar-michelle.jpg";
import productImg from "/public/drawers.jpg";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { PiShareFatFill } from "react-icons/pi";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-lightGrayishBlue">
      <div className="flex flex-col md:flex-row text-veryDarkBlue w-[22.5rem] md:w-[37rem] lg:w-[45.625rem] bg-white rounded-xl shadow-xl m-6 transition-all">
        <div className="rounded-t-xl md:rounded-tr-none md:rounded-l-xl overflow-hidden w-full">
          <div className="relative h-48 md:h-full w-full ">
            <Image
              className="object-left object-cover contrast-105 scale-[1.005]"
              src={productImg}
              fill
              alt=""
            />
          </div>
        </div>
        <main className="flex flex-col gap-3 px-8 md:px-10 pt-8 md:max-w-[27.8rem] relative">
          <h1 className="text-base md:text-lg lg:text-xl font-bold">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>

          <p className="text-[0.8125rem] text-desaturatedBlue pb-2">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I&apos;ve got some simple tips to
            help you make any room feel complete.
          </p>

          <div className="flex flex-row items-center justify-center h-[2rem] md:mt-1 group mt-3 mb-4 md:mb-9">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image src={profilePic} alt="" fill />
            </div>
            <div className="flex flex-col flex-1 ml-4 text-[0.8125rem]">
              <div className="font-bold">Michelle Appleton</div>
              <div className=" text-grayishBlue">28 Jun 2020</div>
            </div>
            <div className="hover:cursor-pointer flex justify-end items-end">
              <div className="flex text-lg justify-center items-center rounded-full group-hover:text-lightGrayishBlue group-hover:bg-desaturatedBlue text-desaturatedBlue bg-lightGrayishBlue h-8 w-8 z-40 transition-all">
                <PiShareFatFill className="z-50" />
              </div>
            </div>
            <div
              className="flex absolute items-center self-center md:self-end justify-start pl-10 md:pl-0 md:justify-center bg-veryDarkBlue h-[4rem] md:h-[3.4375rem] rounded-b-xl md:rounded-xl w-full md:w-[15.5rem] text-grayishBlue z-10 shadow-xl
              translate-x-0 md:translate-x-[6.5rem] lg:translate-x-[10.4rem]
              translate-y-0 md:translate-y-[-3.5rem]
              transition-all
              group-hover:opacity-100 opacity-0
            "
            >
              <div className="uppercase tracking-[0.3rem] text-xs">Share</div>
              <div className="text-white ml-5 flex flex-row gap-4 text-xl z-10">
                <Link href="http://facebook.com">
                  <ImFacebook2 />
                </Link>
                <Link href="http://twitter.com">
                  <FaTwitter />
                </Link>
                <Link href="http://pinterest.com">
                  <FaPinterest />
                </Link>
              </div>
              <div className="hidden md:block md:absolute rotate-45 bg-veryDarkBlue w-5 h-5 translate-y-6 z-0" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
