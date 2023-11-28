
import { inter, lexenda } from './fonts';
import mobileImg from 'public/image-header-mobile.jpg';
import desktopImg from 'public/image-header-desktop.jpg';

export default function Home() {
  return (
    <main id="container" className="lexenda flex justify-center text-white items-center bg-mainBgColor min-h-screen">

      <div id="card" className="flex flex-col md:flex-row-reverse w-[20.44rem] md:w-[69.65rem] overflow-hidden bg-cardBgColor m-6 rounded-lg ">

        <div id="img-container" className="relative">
        <div className="absolute bg-accentColor w-full h-full opacity-60 contrast-150 brightness-[0.6]"></div>
          <picture className="">
            <source className="" media="(min-width: 48rem)" srcSet={desktopImg.src}/>
            <img className="h-full object-cover" src={mobileImg.src} alt=""/>
          </picture>
        </div>


        <div className={`${inter.className} p-7 space-y-6 text-center flex flex-col justify-between md:text-left md:py-[3.6rem] md:px-[4.2rem] md:max-w-[35.625rem]`}>
          <div className="pt-[0.85rem]">  
            <h1 className="text-[1.67rem] leading-8 font-bold tracking-wide md:text-[2.1rem] md:leading-[2.8rem] md:tracking-[0.07rem]">
              Get <span className="text-accentColor">insights</span> that help your business grow.
            </h1>
            {/* <p className="opacity-75 py-4 text-sm leading-[1.6rem] tracking-[0.05rem]"> */}
            <p className="opacity-60 py-4 text-[0.935rem] leading-[1.6rem] md:text-[0.925rem] md:leading-[1.68] md:pt-[1.6rem] md:pb-[2rem] md:pr-12">
              Discover the benefits of data analytics and make better decisions regarding revenue, customer 
              experience, and overall efficiency.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-start md:space-x-[3.8rem] items-center space-y-6 md:p-1 md:space-y-0">
            <div>
              <div className="text-2xl font-bold md:pb-[0.3rem] md:text-[1.44rem]">
                10k+ 
              </div>
              <div className={`${lexenda.className} p-1 md:p-0 tracking-widest uppercase opacity-60 text-xs`}>
                companies
              </div>              
            </div>
            <div>
              <div className="text-2xl font-bold md:pb-[0.3rem] md:text-[1.44rem]">
                314
              </div>
              <div className={`${lexenda.className} p-1 md:p-0 tracking-widest uppercase opacity-60 text-xs`}>
                templates
              </div>  
            </div>
            <div>

            <div className="text-2xl font-bold md:pb-[0.3rem] md:text-[1.44rem]">
              12M+ 
            </div>
            <div className={`${lexenda.className} p-1 md:p-0 tracking-widest uppercase opacity-60 text-xs`}>
              queries
            </div>  
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}



  