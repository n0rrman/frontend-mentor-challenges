import Image from "next/image";

import calcIcon from "public/icon-calculator.svg";
import karmaIcon from "public/icon-karma.svg";
import superIcon from "public/icon-supervisor.svg";
import teamIcon from "public/icon-team-builder.svg";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-veryLightGray min-h-screen text-veryDarkBlue">
      <main className="flex flex-col items-center justify-center px-8">
        <div className="pt-12 flex flex-col justify-center items-center">
          <h2 className="font-extralight text-2xl md:text-[2.265rem] pt-10 md:pt-0">
            Reliable, efficient delivery
          </h2>
          <h1 className="font-semibold text-2xl md:text-[2.265rem] pt-1 md:pt-5">
            Powered by Technology
          </h1>
          <p className="font-extralight text-[0.975rem] text-center w-auto md:w-[32rem] py-4 md:pt-7 md:pb-6">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 pt-12 pb-8 p-0 md:p-10 gap-6 md:gap-[1.85rem]">
          <div className="justify-self-center flex flex-col justify-between rounded-lg overflow-hidden shadow-xl bg-white w-[20rem] h-42 lg:w-[21.875rem] lg:h-[15.625rem] xl:row-span-2 xl:my-auto">
            <div className="p-6 md:px-8 md:py-7 border-t-4 border-primaryCyan">
              <h2 className="font-semibold text-[1.225rem] pb-2">Supervisor</h2>
              <p className="font-extralight text-[0.777rem] leading-6 tracking-wide">
                Monitors activity to identify project roadblocks
              </p>
            </div>
            <div className="flex justify-end pb-6 pr-6 md:pb-8 md:pr-8">
              <Image src={superIcon} alt="" />
            </div>
          </div>

          <div className="justify-self-center flex flex-col justify-between rounded-lg overflow-hidden shadow-xl bg-white w-[20rem] h-42 lg:w-[21.875rem] lg:h-[15.625rem] lg:h-[15.625rem]">
            <div className="px-8 py-7 border-t-4 border-primaryRed">
              <h2 className="font-semibold text-[1.225rem] pb-2">
                Team Builder
              </h2>
              <p className="font-extralight text-[0.777rem] leading-6 tracking-wide">
                Scans our talent network to create the optimal team for your
                project
              </p>
            </div>
            <div className="flex justify-end pb-6 pr-6 md:pb-8 md:pr-8">
              <Image src={teamIcon} alt="" />
            </div>
          </div>

          <div className="justify-self-center flex flex-col justify-between rounded-lg overflow-hidden shadow-xl bg-white w-[20rem] h-42 lg:w-[21.875rem] lg:h-[15.625rem] xl:order-last">
            <div className="px-8 py-7 border-t-4 border-primaryOrange">
              <h2 className="font-semibold text-[1.225rem] pb-2">Karma</h2>
              <p className="font-extralight text-[0.777rem] leading-6 tracking-wide">
                Regularly evaluates our talent to ensure quality
              </p>
            </div>
            <div className="flex justify-end pb-8 pr-8">
              <Image src={karmaIcon} alt="" />
            </div>
          </div>

          <div className="justify-self-center flex flex-col justify-between rounded-lg overflow-hidden shadow-xl bg-white w-[20rem] h-42 lg:w-[21.875rem] lg:h-[15.625rem] xl:my-auto xl:col-3 xl:row-span-2">
            <div className="px-8 py-7 border-t-4 border-primaryBlue ">
              <h2 className="font-semibold text-[1.225rem] pb-2">Calculator</h2>
              <p className="font-extralight text-[0.777rem] leading-6 tracking-wide">
                Uses data from past projects to provide better delivery
                estimates
              </p>
            </div>
            <div className="flex justify-end pb-8 pr-8">
              <Image src={calcIcon} alt="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
