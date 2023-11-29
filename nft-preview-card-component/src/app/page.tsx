import Image from 'next/image';

import nfgImg from 'public/image-equilibrium.jpg';
import avatarImg from 'public/image-avatar.png';
import clockIcon from 'public/icon-clock.svg';
import ethereumIcon from 'public/icon-ethereum.svg';
import viewIcon from 'public/icon-view.svg';

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-mainBlue min-h-screen">
      <main className="w-[21.875rem] bg-cardBlue rounded-xl m-6 text-white box-shadow-xl">
        <div className="p-6">
          <div className="group relative rounded-lg overflow-hidden">
            <div className="absolute flex items-center justify-center transition-color duration-100 opacity-0 group-hover:opacity-100 group-hover:cursor-pointer ease-out group-hover:bg-cyan/50 w-full h-full">
              <Image
                src={viewIcon}
                alt="view NFT" 
              />
            </div>
            <Image
              src={nfgImg}
              alt=""
              />
          </div>
          <div className="space-y-3 sm:space-y-4 pt-6">
            <h1 className="text-[1.25rem] tracking-wider inline font-semibold ease-out hover:text-cyan hover:cursor-pointer transition-color duration-100">
              Equilibrium #3429
            </h1>
            <p className="text-normal sm:text-lg font-light leading-[1.65rem] text-softBlue">
              Our Equilibrium collection promotes balance and calm.
            </p>
            <div className="flex flex-row font-light sm:py-1 justify-between">
              <div className="text-cyan flex flex-row space-x-2">
                <Image 
                  className="object-contain inline"
                  src={ethereumIcon}
                  alt=""
                  />
                <div>
                  0.041 ETH
                </div>
              </div>
              <div className="text-softBlue space-x-2 flex flex-row">
                <Image 
                className="object-contain inline"
                src={clockIcon}
                alt=""
              />
              <div>
                3 days left
              </div>
            </div>
          </div>
          <div className="border-t border-lineBlue"></div>
            <div className="flex flex-row justify-start items-center text-softBlue tracking-wide pt-1 sm:pb-2">
              <Image
                className="inline border border-white rounded-full w-[2rem] h-[2rem] mr-4"
                src={avatarImg}
                alt=""
              />
              <div className="text-[0.95rem]">
                Creation of <span className="text-white hover:text-cyan hover:cursor-pointer transition-color ease-out duration-100">Jules Wyvern</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}