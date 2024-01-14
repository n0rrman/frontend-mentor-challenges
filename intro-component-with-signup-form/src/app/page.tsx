import bgMobile from "/public/bg-intro-mobile.png";
import bgDesktop from "/public/bg-intro-desktop.png";

import SignUpForm from "@/components/sign-up-form";

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-primaryRed min-h-screen p-6 md:p-8">
      <div className="absolute z-0 w-full h-full">
        <picture className="w-full h-full object-cover">
          <source media="(min-width: 40rem)" srcSet={bgDesktop.src} />
          <img
            className="w-full h-full object-cover"
            src={bgMobile.src}
            alt=""
          />
        </picture>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-8 items-center z-10">
        <div className="flex flex-col text-white max-w-[33.75rem] text-center md:text-left ">
          <div className="text-[1.75rem] md:text-[3.075rem] md:leading-[3.5rem] font-bold mt-1">
            Learn to code by watching others
          </div>

          <div className="font-light leading-[1.6rem] pt-7 pb-8 md:pb-0">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-6 w-full md:w-[33.75rem]">
          <div className="p-[1.15rem] bg-accentBlue text-white rounded-xl w-full text-center shadow-[0px_8px_0px_0px_rgba(0,0,0,0.15)]">
            <div className="text-neutralGrayish font-medium text-[0.97rem] px-6 md:px-0">
              <span className="text-white">Try it free 7 days</span> then
              $20/mo. thereafter
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
