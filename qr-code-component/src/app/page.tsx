import Image from 'next/image';

import qrImg from 'public/image-qr-code.png';

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-lightGray min-h-screen">
      <div className="flex w-80 flex-col bg-white p-4 rounded-2xl text-center shadow-2xl">
        <Image
        className="rounded-xl"
        src={qrImg}
        alt="qr code"
        />
        <div className="flex flex-col justify-center items-center px-4 py-6 space-y-4">
          <h3 className="font-bold text-darkBlue leading-7 text-xxl">
            Improve your front-end skills by building projects
          </h3>
          <p className="opacity-80 text-grayishBlue leading-5">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}