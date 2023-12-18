import Image from "next/image";

import bgBottomDesktop from "/public/bg-pattern-bottom-desktop.svg";
import bgBottomMobile from "/public/bg-pattern-bottom-mobile.svg";
import bgtopDesktop from "/public/bg-pattern-top-desktop.svg";
import bgtopMobile from "/public/bg-pattern-top-mobile.svg";

import anneImg from "/public/image-anne.jpg";
import coltonImg from "/public/image-colton.jpg";
import ireneImg from "/public/image-irene.jpg";

import ReviewCard from "@/components/reviewCard";
import RatingBar from "@/components/ratingBar";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="absolute left-0 top-0">
        <picture className="">
          <source media="(min-width: 60rem)" srcSet={bgtopDesktop.src} />
          <img className="" src={bgtopMobile.src} alt="" />
        </picture>
      </div>
      <div className="absolute right-0 bottom-0">
        <picture className="">
          <source media="(min-width: 60rem)" srcSet={bgBottomDesktop.src} />
          <img className="" src={bgBottomMobile.src} alt="" />
        </picture>
      </div>
      <div className="flex flex-col justify-between p-6 sm:p-20 w-full sm:w-[80rem]">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2">
            <h1 className="text-[2.4rem] tracking-tight leading-8 sm:text-5xl p-8 text-center sm:text-left sm:p-0 font-bold text-darkMagenta">
              10,000+ of our users love our products.
            </h1>
            <p className="text-grayishMagenta">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div className="w-full sm:w-1/2 flex flex-col">
            <RatingBar
              className="self-center sm:self-start"
              by="Reviews"
              stars={2}
            />
            <RatingBar className="self-center" by="Report Gury" stars={1} />
            <RatingBar
              className="self-center sm:self-end"
              by="BestTech"
              stars={5}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 space-x-0 sm:space-x-7 text-white pt-1 sm:pt-10">
          <ReviewCard
            className="place-self-center sm:place-self-start"
            name="Colton Smith"
            profilePic={coltonImg}
            title="Verified Buyer"
          >
            "We needed the same printed design as the one we had ordered a week
            prior. Not only did they find the original order, but we also
            received it in time. Excellent!"
          </ReviewCard>

          <ReviewCard
            className=""
            name="Irene Roberts"
            profilePic={ireneImg}
            title="Verified Buyer"
          >
            "Customer service is always excellent and very quick turn around.
            Completely delighted with the simplicity of the purchase and the
            speed of delivery."
          </ReviewCard>

          <ReviewCard
            className="place-self-center sm:place-self-start"
            name="Anne Wallace"
            profilePic={anneImg}
            title="Verified Buyer"
          >
            "Put an order with this company and can only praise them for the
            very high standard. Will definitely use them again and recommend
            them to everyone!"
          </ReviewCard>
        </div>
      </div>
    </main>
  );
}
