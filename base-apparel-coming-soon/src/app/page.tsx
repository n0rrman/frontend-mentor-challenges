import Image from "next/image";

import bgImg from "/public/bg-pattern-desktop.svg";
import logo from "/public/logo.svg";
import heroMobile from "/public/hero-mobile.jpg";
import heroDesktop from "/public/hero-desktop.jpg";

import EmailForm from "@/components/emailForm";

export default function Home() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-[0.5763888889fr_0.4236111111fr] min-h-screen">
      <section
        id="logo"
        className="z-30 pt-[1.95rem] -mb-5 sm:mb-0 sm:pt-[4.05rem] ml-8 sm:ml-20 xl:ml-[10.3rem] h-24"
      >
        <div className="relative w-[6.25rem] sm:w-[9.875rem] aspect-[4.7878787879]">
          <Image alt="" src={logo.src} fill />
        </div>
      </section>

      <section id="hero" className="row-span-2 h-full">
        <picture className="relative h-full w-full bg-red-500 z-30">
          <source media="(min-width: 40rem)" srcSet={heroDesktop.src} />
          <img
            className="object-contain object-top sm:object-cover h-full w-full"
            src={heroMobile.src}
            alt=""
          />
        </picture>
      </section>

      <section
        id="bg"
        className="absolute grid grid-cols-1 sm:grid-cols-[0.5763888889fr_0.4236111111fr] grid-rows-1 inset-0 z-0"
      >
        <div className="relative bg-gradient-to-br from-gradOneStart to-gradOneEnd">
          <Image className="hidden sm:block" fill alt="" src={bgImg.src} />
        </div>
      </section>

      <section
        id="form"
        className="relative flex w-full mx-auto items-start px-5 sm:px-0 max-w-[27.9rem] sm:items-start text-desaturatedRed"
      >
        <div className="flex flex-col text-center sm:text-left gap-3 translate-x-0 lg:-translate-x-[1.2rem] mx-5 lg:mx-0">
          <h1 className="text-[2.5rem] lg:text-[4rem] leading-[2.7rem] lg:leading-[4.4rem] uppercase font-light tracking-[0.7rem] sm:tracking-[1.1rem] pb-2">
            We&apos;re
            <span className="block text-darkishRed font-bold">coming soon</span>
          </h1>

          <p className="text-sm lg:text-[1rem] leading-5 lg:leading-7">
            Hello fellow shoppers! We&apos;re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>

          <div className="py-8">
            <EmailForm />
          </div>
        </div>
      </section>
    </main>
  );
}
