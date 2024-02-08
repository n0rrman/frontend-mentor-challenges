import Image from "next/image";

import bgImg from "/public/bg-pattern-desktop.svg";
import logo from "/public/logo.svg";
import heroMobile from "/public/hero-mobile.jpg";
import heroDesktop from "/public/hero-desktop.jpg";

import EmailForm from "@/components/emailForm";

export default function Home() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-[0.5763888889fr_0.4236111111fr] min-h-screen">
      <section id="logo" className="w-full z-30 pt-16 mx-40">
        <div className="relative w-[9.875rem] h-[2.0625rem]">
          <Image alt="" src={logo.src} fill />
        </div>
      </section>

      <section id="hero" className="row-span-2 z-20 h-full w-full">
        <picture className="h-full w-full object-cover">
          <source
            className="w-full object-cover"
            media="(min-width: 40rem)"
            srcSet={heroDesktop.src}
          />
          <img
            className="object-size h-full w-full"
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
        <div className="z-20 mx-40 flex flex-col gap-8">
          <h1 className="text-7xl uppercase font-light">
            We&apos;re
            <span className="block text-darkishRed font-normal">
              coming soon
            </span>
          </h1>

          <p>
            Hello fellow shoppers! We&apos;re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <EmailForm />
        </div>
      </section>
    </main>
  );
}
