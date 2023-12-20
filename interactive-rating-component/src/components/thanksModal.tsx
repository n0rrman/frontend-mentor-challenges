import Image from "next/image";

import thanksImg from "/public/illustration-thank-you.svg";

interface ThanksModalProps {
  score: number;
}

export default function ThanksModal(props: ThanksModalProps) {
  return (
    <div className="flex flex-col justify-around items-center text-center h-full text-white">
      <div className="relative w-[10.125rem] h-[6.75rem]">
        <Image alt="thank you" src={thanksImg.src} fill />
      </div>
      <div className="bg-darkBlue ml-2 text-[0.91rem] tracking-wide py-2 px-4 text-primaryOrange/60 rounded-3xl">
        You selected {props.score} out of 5
      </div>

      <div>
        <h1 className="pl-2 text-[1.7rem] tracking-wide pb-2">Thank you!</h1>

        <p className="text-mediumGray text-[0.9rem] tracking-wide -mx-1 leading-6">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don&apos;t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
