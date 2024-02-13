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
        className="z-30 pt-8 sm:pt-[4.05rem] ml-8 sm:ml-[10.3rem]"
      >
        <div className="relative w-[6.5rem] sm:w-[9.875rem] aspect-[4.7878787879]">
          <Image alt="" src={logo.src} fill />
        </div>
      </section>

      <section id="hero" className="row-span-2 z-20 h-full w-full">
        <picture className="h-full w-full">
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
        className="absolute grid grid-cols-1 sm:grid-cols-[0.5763888889fr_0.4236111111fr] grid-rows-1 inset-0 z-10"
      >
        <div className="relative bg-gradient-to-br from-gradOneStart to-gradOneEnd">
          <Image className="hidden sm:block" fill alt="" src={bgImg.src} />
        </div>
      </section>

      <section id="form" className="flex flex-col text-desaturatedRed">
        <div className="z-20 mx-8 sm:mx-[10.3rem] w-[27.9rem] flex flex-col gap-2 text-center sm:text-left">
          <h1 className="text-[2.5rem] sm:text-[4rem] leading-[2.7rem] sm:leading-[4.4rem] uppercase font-light tracking-[0.7rem] sm:tracking-[1.1rem] pb-3">
            We&apos;re
            <span className="block text-darkishRed font-bold -my-0.5">
              coming soon
            </span>
          </h1>

          <p className="text-sm sm:text-[1rem] leading-7">
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
