import Image from "next/image";

import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa6";

import { openSans, poppins } from "./fonts";
import mockupsImg from "/public/illustration-mockups.svg";
import logoImg from "/public/logo.svg";
import desktopBg from "/public/bg-desktop.svg";
import mobileBg from "/public/bg-mobile.svg";

export default function Home() {
  return (
    <div className="flex flex-col justify-around md:justify-between min-h-screen bg-violet overflow-hidden text-white">
      <picture className="absolute inset-0 z-0">
        <source
          className=""
          media="(min-width: 48rem)"
          srcSet={desktopBg.src}
        />
        <img
          className="h-auto md:h-full w-full md:w-auto object-contain md:object-cover md:object-left"
          // className="h-auto w-full md:w-auto md:h-full"
          src={mobileBg.src}
          alt=""
        />
      </picture>

      <header className="py-2 px-9 md:py-10 md:px-[4.3rem] z-10">
        <div className="relative h-20 w-32 md:w-[13.4rem]">
          <Image className="" src={logoImg.src} fill alt="huddle logo" />
        </div>
      </header>

      <main
        className={`${poppins.className} flex flex-col md:flex-row justify-center items-start z-10`}
      >
        <div className="relative w-full h-[20rem] md:h-[31.5rem]">
          <Image
            className="px-[2.5rem] md:px-0 object-scale-down md:object-none md:object-right pb-12 md:pb-0"
            src={mockupsImg.src}
            fill
            alt=""
          />
        </div>
        <div className="text-center md:text-left px-8 md:px-[3.4rem] md:w-[70rem]">
          <h1 className="pt-0 md:pt-11 md:pr-8 text-[1.475rem] sm:text-3xl lg:text-[2.5rem] font-semibold lg:leading-[3.7rem]">
            Build The Community Your Fans Will Love
          </h1>

          <div
            className={`${openSans.className} md:pr-6 text-[0.94rem] sm:text-[1.075rem] leading-relaxed md:leading-[1.65rem] tracking-wide font-normal py-4 md:py-5`}
          >
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </div>
          <button className="bg-white text-xs md:text-lg text-violet px-20 md:px-16 py-3 md:py-3.5 mt-4 md:mt-1 rounded-[3rem] shadow-xl shadow-onyx-900 hover:text-white hover:bg-magenta transition-all duration-100 ease-out">
            Register
          </button>
        </div>
      </main>

      <footer className="flex justify-center md:justify-end items-center mt-10 sm:-mt-2.5 z-10 pb-10 pr-0 md:pr-20 space-x-2 md:space-x-4">
        <div className="border p-2 md:p-2.5 border-white rounded-full text-xs md:text-lg hover:cursor-pointer hover:text-magenta hover:border-magenta transition-all duration-100 ease-ou">
          <FaFacebookF />
        </div>
        <div className="border p-2 md:p-2.5 border-white rounded-full text-xs md:text-lg hover:cursor-pointer hover:text-magenta hover:border-magenta transition-all duration-100 ease-ou">
          <FaTwitter />
        </div>
        <div className="border p-2 md:p-[0.55rem] border-white rounded-full text-xs md:text-xl hover:cursor-pointer hover:text-magenta hover:border-magenta transition-all duration-100 ease-ou">
          <FaInstagram />
        </div>
      </footer>
    </div>
  );
}
