import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import dashboardImg from "/public/illustration-dashboard.png";
import logo from "/public/logo.svg";
import EmailForm from "@/components/emailForm";

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen items-center pt-[5.15rem] pb-9 sm:py-12">
      <header className="pb-9 sm:pt-9 sm:pb-2 mt-0.5">
        <div className="relative w-[3.3rem] h-4 sm:w-[5.375rem] sm:h-[1.625rem] ">
          <Image alt="" src={logo.src} fill />
        </div>
      </header>
      <main className="flex flex-col justify-start sm:justify-center flex-1 items-center w-full sm:w-[40rem] px-7 sm:px-0">
        <div className="text-center">
          <h1 className="text-[1.35rem] sm:text-5xl text-gray font-light pb-3.5 sm:pb-5">
            We are launching{" "}
            <span className="text-veryDarkBlue font-bold ">soon!</span>
          </h1>
          <p className="text-[0.725rem] sm:text-xl">
            Subscribe and get notified
          </p>
        </div>
        <div className="w-full max-w-[20rem] sm:max-w-full my-0 sm:my-2.5 px-5 sm:px-0">
          <EmailForm />
        </div>

        <div className="relative w-full aspect-[64/39] mt-10 sm:mt-12 sm:p-0">
          <Image className="" alt="" src={dashboardImg.src} fill priority />
        </div>
      </main>
      <footer className="">
        <div className="flex flex-row gap-3  p-6 justify-center items-center text-primaryBlue text-[0.9rem] sm:text-sm">
          <FaFacebookF className="box-content hover:text-white hover:bg-primaryBlue hover:border-primaryBlue rounded-full p-2 border border-secondaryBlue transition-all duration-200 ease-out" />
          <FaTwitter className="box-content hover:text-white hover:bg-primaryBlue hover:border-primaryBlue rounded-full p-2 border border-secondaryBlue transition-all duration-200 ease-out" />
          <FaInstagram className="box-content hover:text-white hover:bg-primaryBlue hover:border-primaryBlue rounded-full p-2 border border-secondaryBlue transition-all duration-200 ease-out" />
        </div>
        <div className="text-gray text-[0.615rem] text-center sm:text-xs">
          &copy; Copyright Ping. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
