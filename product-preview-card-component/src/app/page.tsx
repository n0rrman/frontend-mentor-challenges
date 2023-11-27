import Image from 'next/image';

import { montserrat, fraunces } from './fonts';

import productMobileImg from 'public/image-product-mobile.jpg';
import productDesktopImg from 'public/image-product-desktop.jpg';
import cartIcon from 'public/icon-cart.svg';


export default function Home() {
  return (
    <div className="bg-cream flex justify-center items-center min-h-screen">
      <main className="flex flex-col bg-white w-[21.25rem] rounded-lg overflow-hidden m-6 shadow-sm sm:w-[37.5rem] sm:flex-row">
        <picture className="sm:w-1/2 brightness-90 contrast-125">
          <source media="(min-width: 640px)" srcSet={productDesktopImg.src}/>
          <img src={productMobileImg.src} alt="perfume bottle"/>
        </picture>
        <div className={`${montserrat.className} flex flex-col p-8 justify-between space-y-4 sm:w-1/2`}>
          <h3 className="uppercase text-[0.75rem] opacity-90 tracking-[0.3rem] text-grayishBlue">
            Perfume
          </h3>
          <h1 className={`${fraunces.className} text-[2rem] leading-[2rem] text-darkBlue`}>
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-sm opacity-90 leading-[1.45rem] text-grayishBlue">
          A floral, solar and voluptuous interpretation composed by Olivier Polge, 
          Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex flex-row items-center justify-start py-1">
            <div className={`${fraunces.className} text-darkCyan text-[2rem]`}>
            $149.99
            </div>
            <div className="px-5 line-through text-grayishBlue text-xs">
            $169.99
            </div>
          </div>
          <div className="flex flex-row justify-center items-center text-sm rounded-lg text-center text-white bg-darkCyan hover:bg-darkerCyan hover:cursor-pointer transition-all duration-100 ease-out">
            <Image 
              className="w-4 h-4"
              src={cartIcon}
              alt="shopping cart icon"
            />
            <div className="py-[0.9rem] px-3 -mr-3">
              Add to Cart
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}