import Image from "next/image";

import calcIcon from "public/icon-calculator.svg";
import karmaIcon from "public/icon-karma.svg";
import superIcon from "public/icon-supervisor.svg";
import teamIcon from "public/icon-team-builder.svg";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-veryLightGray min-h-screen text-veryDarkBlue">
      <main className="flex flex-col items-center justify-center">
        <h2 className="font-extralight text-[2.265rem] pt-8">
          Reliable, efficient delivery
        </h2>
        <h1 className="font-semibold text-[2.265rem] -mt-1">
          Powered by Technology
        </h1>
        <p className="font-extralight text-[0.975rem] text-center w-[32rem] py-4">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 pt-12 pb-8 p-5 gap-[1.85rem]">
          <div className="rounded-lg overflow-hidden shadow-xl bg-white w-[21.875rem] h-[15.625rem] xl:row-span-2 xl:my-auto">
            <div className="px-8 py-7 border-t-4 border-primaryCyan">
              <h2 className="font-semibold text-[1.225rem] pb-2">Supervisor</h2>
              <p className="font-extralight text-sm">
                Monitors activity to identify project roadblocks
              </p>
            </div>
            <div className="flex justify-end pb-8 pr-8">
              <Image src={superIcon} alt="" />
            </div>
          </div>

          {/* <div className="flex flex-col space-y-6"> */}
          <div className="rounded-lg overflow-hidden shadow-xl bg-white w-[21.875rem] h-[15.625rem]">
            <div className="p-8 border-t-4 border-primaryRed">
              <h2 className="font-semibold text-lg pb-2">Team Builder</h2>
              <p className="font-extralight text-sm">
                Scans our talent network to create the optimal team for your
                project
              </p>
            </div>
            <div className="flex justify-end pb-8 pr-8">
              <Image src={teamIcon} alt="" />
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-xl bg-white w-[21.875rem] h-[15.625rem] xl:order-last">
            <div className="p-8 border-t-4 border-primaryOrange">
              <h2 className="font-semibol text-lg pb-2d">Karma</h2>
              <p className="font-extralight text-sm">
                Regularly evaluates our talent to ensure quality
              </p>
            </div>
            <div className="flex justify-end pb-8 pr-8">
              <Image src={karmaIcon} alt="" />
            </div>
          </div>
          {/* </div> */}

          <div className="rounded-lg overflow-hidden shadow-xl bg-white w-[21.875rem] h-[15.625rem] xl:my-auto xl:col-3 xl:row-span-2">
            <div className="p-8 border-t-4 border-primaryBlue ">
              <h2 className="font-semibold text-lg pb-2">Calculator</h2>
              <p className="font-extralight text-sm">
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
