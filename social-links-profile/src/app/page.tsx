import Image from "next/image";

import profilePic from "/public/avatar-jessica.jpeg";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-offBlack">
      <main className="flex flex-col justify-center items-center bg-darkGrey text-white p-8 rounded-xl gap-2">
        <div className="relative h-20 aspect-square rounded-full overflow-hidden">
          <Image src={profilePic} alt="" fill />
        </div>
        <h1 className="text-xl">Jessica Randall</h1>
        <div className="text-primaryGreen text-sm">London, United Kingdom</div>
        <div className="text-xs py-4">
          "Front-end developer and avid reader."
        </div>

        <div className="flex flex-col gap-3 w-full">
          <button className="bg-grey rounded-xl p-2 w-full">GitHub</button>
          <button className="bg-grey rounded-xl p-2 w-full">
            Frontend Mentor
          </button>
          <button className="bg-grey rounded-xl p-2 w-full">LinkedIn</button>
          <button className="bg-grey rounded-xl p-2 w-full">Twitter</button>
          <button className="bg-grey rounded-xl p-2 w-full">Instagram</button>
        </div>
      </main>
    </div>
  );
}
