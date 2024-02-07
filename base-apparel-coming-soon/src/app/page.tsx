import Image from "next/image";

import bgImg from "/public/bg-pattern-desktop.svg";
import logo from "/public/logo.svg";
import heroMobile from "/public/hero-mobile.jpg";
import heroDesktop from "/public/hero-desktop.jpg";

import EmailForm from "@/components/emailForm";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Image alt="" src={logo.src} fill />
      </div>
      <div className="relative">
        <Image className=" " fill alt="" src={bgImg.src} />
      </div>
      <div>We&apos;re</div>
      <div>coming soon</div>

      <p>
        Hello fellow shoppers! We&apos;re currently building our new fashion
        store. Add your email below to stay up-to-date with announcements and
        our launch deals.
      </p>
      <EmailForm />
      <picture className="">
        <source
          className=""
          media="(min-width: 640px)"
          srcSet={heroDesktop.src}
        />
        <img className="" src={heroMobile.src} alt="" />
      </picture>
    </main>
  );
}
