import Image from 'next/image';

import bannerImg from 'public/illustration-hero.svg';
import musicIcon from 'public/icon-music.svg';
import desktopBg from 'public/pattern-background-desktop.svg';
import mobileBg from 'public/pattern-background-mobile.svg';


export default function Home() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-paleBlue">
        <div className="absolute inset-0">
          <picture className="w-auto h-auto">
            <source media="(min-width: 60rem)" srcSet={desktopBg.src}/>
            <img className="w-[100vw] h-[50vh] object-cover" src={mobileBg.src} alt=""/>
          </picture>
        </div>
        <main className="flex z-10 flex-col text-darkBlue justify-center items-center w-[28.125rem] rounded-2xl overflow-hidden shadow-xl bg-white">
          <Image 
            src={bannerImg}
            alt=""
          />
          <div className="p-11">
            <div className="text-center">
              <h1 className="text-[1.75rem] font-extrabold">
                Order Summary
              </h1>
              <p className="p-3 leading-[1.7rem] text-desaturatedBlue">
                You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
              </p>
            </div>
            <div className="bg-veryPaleBlue rounded-2xl flex items-center justify-between m-[0.3rem] px-6 py-6">
              <div className="flex flex-row">
                <Image
                  src={musicIcon} 
                  alt=""
                  />
                <div className="flex flex-col px-5">
                  <div className="text-[1.05rem] font-bold">
                    Annual Plan
                  </div>
                  <div className="text-desaturatedBlue">
                    $59.99/year
                  </div>
                </div>
              </div>
              <div className="text-sm font-bold underline text-brightBlue hover:cursor-pointer hover:text-brightBlue/50 transition-colors duration-100 ease-in-out">
                Change
              </div>
            </div>
            <div className="text-[0.96rem] bg-brightBlue text-veryPaleBlue text-center rounded-xl shadow-xl shadow-brightBlue/25 font-bold mx-1 my-8 py-[0.85rem] hover:cursor-pointer hover:bg-brightBlue/50 transition-colors duration-100 ease-in-out">
              Proceed to Payment
            </div>
            <div className="text-[0.96rem] text-center font-bold text-desaturatedBlue hover:cursor-pointer hover:text-darkBlue transition-colors duration-100 ease-in-out">
              Cancel Order
            </div>
          </div>
        </main>
      </div>  
    );
  }