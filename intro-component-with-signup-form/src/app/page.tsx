import bgMobile from "/public/bg-intro-mobile.png";
import bgDesktop from "/public/bg-intro-desktop.png";

import SignUpForm from "@/components/sign-up-form";

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-primaryRed min-h-screen">
      <div className="absolute inset-0 z-0">
        <picture className="w-screen h-screen object-cover">
          <source media="(min-width: 40rem)" srcSet={bgDesktop.src} />
          <img
            className="w-screen h-screen object-cover"
            src={bgMobile.src}
            alt=""
          />
        </picture>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center z-10">
        <div className="flex flex-col gap-5 text-white w-[30rem]">
          <div className="text-5xl font-bold">
            Learn to code by watching others
          </div>

          <div>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 w-[33.75rem]">
          <div className="p-5 bg-accentBlue text-white rounded-xl w-full text-center">
            <div>
              <span>Try it free 7 days</span> then $20/mo. thereafter
            </div>
          </div>

          <div className="w-full">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
}
