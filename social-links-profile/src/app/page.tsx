import Image from "next/image";

import profilePic from "/public/avatar-jessica.jpeg";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-offBlack">
      <main className="flex flex-col justify-between items-center bg-darkGrey text-white p-6 sm:p-10 rounded-xl gap-1.5 w-96 m-6">
        <div className="relative mb-5 h-[5.5rem] aspect-square rounded-full overflow-hidden">
          <Image src={profilePic} alt="" fill />
        </div>
        <h1 className="text-2xl tracking-[0.020rem] leading-[2.1rem]">
          Jessica Randall
        </h1>
        <div className="text-primaryGreen text-sm pb-5 font-semibold">
          London, United Kingdom
        </div>
        <div className="text-[0.875rem] pb-4">
          &ldquo;Front-end developer and avid reader.&rdquo;
        </div>

        <div className="flex flex-col gap-4 w-full text-[0.875rem] font-semibold">
          <button className="bg-grey rounded-lg p-3 w-full transition-all duration-200 ease-in-out hover:bg-primaryGreen hover:text-darkGrey">
            GitHub
          </button>
          <button className="bg-grey rounded-lg p-3 w-full transition-all duration-200 ease-in-out hover:bg-primaryGreen hover:text-darkGrey">
            Frontend Mentor
          </button>
          <button className="bg-grey rounded-lg p-3 w-full transition-all duration-200 ease-in-out hover:bg-primaryGreen hover:text-darkGrey">
            LinkedIn
          </button>
          <button className="bg-grey rounded-lg p-3 w-full transition-all duration-200 ease-in-out hover:bg-primaryGreen hover:text-darkGrey">
            Twitter
          </button>
          <button className="bg-grey rounded-lg p-3 w-full transition-all duration-200 ease-in-out hover:bg-primaryGreen hover:text-darkGrey">
            Instagram
          </button>
        </div>
      </main>
    </div>
  );
}
