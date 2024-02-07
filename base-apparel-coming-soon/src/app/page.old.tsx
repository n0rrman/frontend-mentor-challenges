import Image from "next/image";

import bgImg from "/public/bg-pattern-desktop.svg";
import logo from "/public/logo.svg";
import heroMobile from "/public/hero-mobile.jpg";
import heroDesktop from "/public/hero-desktop.jpg";

import EmailForm from "@/components/emailForm";

export default function Home() {
  return (
    <div className="flex flex-col-reverse sm:flex-row text-center sm:text-left">
      <div className="absolute top-0 z-10 px-[10.3rem] py-[4.1rem]">
        <div className="relative z-10 w-[9.875rem] h-[2.0625rem]">
          <Image alt="" src={logo.src} fill />
        </div>
      </div>
      <main className="z-0 px-[10.3rem] w-[51.875rem] flex flex-col justify-start items-center bg-gradient-to-br from-gradOneStart to-gradOneEnd">
        <div className="relative w-full">
          <div className="absolute z-0 h-screen w-full">
            <Image className="z-0 " fill alt="" src={bgImg.src} />
          </div>
          <div className="pr-14 z-10">
            <h1 className="relative mt-[14.7rem] z-50 uppercase text-8xl sm:text-[4rem] leading-16 sm:leading-[4.375rem] tracking-[1.1rem] text-darkishRed">
              <div className="text-desaturatedRed font-light leading-16 sm:leading-[4rem]">
                We&apos;re
              </div>
              coming soon
            </h1>
            <p className="text-desaturatedRed py-5 leading-7 text-3xl sm:text-base">
              Hello fellow shoppers! We&apos;re currently building our new
              fashion store. Add your email below to stay up-to-date with
              announcements and our launch deals.
            </p>
            <div className="pt-[1.2rem]">
              <EmailForm />
            </div>
          </div>
        </div>
      </main>
      <picture className="mt-36 sm:mt-0 h-auto w-auto object-cover">
        <source
          className="w-auto h-auto object-cover"
          media="(min-width: 640px)"
          srcSet={heroDesktop.src}
        />
        <img
          className="w-full h-auto sm:h-full object-cover"
          src={heroMobile.src}
          alt=""
        />
      </picture>
    </div>
  );
}
