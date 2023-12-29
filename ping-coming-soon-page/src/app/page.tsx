import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import dashboardImg from "/public/illustration-dashboard.png";
import logo from "/public/logo.svg";
import EmailForm from "@/components/emailForm";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen py-12">
      <header className="py-9 mt-0.5">
        <div className="relative w-[5.375rem] h-[1.625rem] ">
          <Image alt="" src={logo.src} fill />
        </div>
      </header>
      <main className="flex flex-col justify-between items-center w-full sm:w-[40rem]">
        <div className="text-center">
          <h1 className="text-2xl sm:text-5xl text-gray font-light pb-5">
            We are launching{" "}
            <span className="text-veryDarkBlue font-bold ">soon!</span>
          </h1>
          <p className="text-sm sm:text-xl">Subscribe and get notified</p>
        </div>
        <div className="w-full my-2">
          <EmailForm />
        </div>

        <div className="relative w-full aspect-[64/39] mt-12 mb-[2rem]">
          <Image className="" alt="" src={dashboardImg.src} fill />
        </div>
      </main>
      <footer>
        <div className="flex flex-row gap-3 p-6 pt-6 justify-center items-center text-primaryBlue text-sm">
          <FaFacebookF className="box-content hover:text-white hover:bg-primaryBlue hover:border-primaryBlue rounded-full p-2 border border-secondaryBlue transition-all duration-200 ease-out" />
          <FaTwitter className="box-content hover:text-white hover:bg-primaryBlue hover:border-primaryBlue rounded-full p-2 border border-secondaryBlue transition-all duration-200 ease-out" />
          <FaInstagram className="box-content hover:text-white hover:bg-primaryBlue hover:border-primaryBlue rounded-full p-2 border border-secondaryBlue transition-all duration-200 ease-out" />
        </div>
        <div className="text-gray text-xs">
          &copy; Copyright Ping. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
