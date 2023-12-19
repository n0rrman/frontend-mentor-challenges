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
    <main className="flex justify-center items-start md:items-center min-h-screen">
      <div className="absolute left-0 top-0 z-0 w-full md:w-auto">
        <picture className="object-cover">
          <source media="(min-width: 48rem)" srcSet={bgtopDesktop.src} />
          <img className="w-full" src={bgtopMobile.src} alt="" />
        </picture>
      </div>
      <div className="absolute right-0 bottom-0 w-full md:w-auto">
        <picture className="">
          <source media="(min-width: 48rem)" srcSet={bgBottomDesktop.src} />
          <img className="w-full" src={bgBottomMobile.src} alt="" />
        </picture>
      </div>
      <div className="flex flex-col justify-between p-[1.4rem] sm:p-10 lg:p-20 w-full sm:max-w-[79.4rem] z-10">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="w-full sm:w-[26rem]">
            <h1 className="text-[2.5rem] tracking-[-0.03em] leading-8 sm:leading-[3rem] sm:text-[3.45rem] mt-[3.75rem] lg:-mt-2.5 px-6 text-center sm:text-left sm:p-0 font-bold text-darkMagenta">
              10,000+ of our users love our products.
            </h1>
            <p className="text-lg leading-[1.57rem] text-grayishMagenta text-center sm:tracking-[-0.003em] sm:leading-snug sm:text-left pt-6 md:pt-[1.65rem] pb-4 sm:pb-16 lg:pb-5">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div className="lg:w-1/2 flex flex-col pt-3.5 sm:pt-12 lg:pt-2.5 -mr-0 lg:-mr-2">
            <RatingBar
              className="self-stretch sm:self-start lg:self-start"
              by="Reviews"
              stars={5}
            />
            <RatingBar
              className="self-stretch sm:self-center"
              by="Report Guru"
              stars={5}
            />
            <RatingBar
              className="self-stretch sm:self-end sm:place-self-start"
              by="BestTech"
              stars={5}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row h-72 space-y-3.5 lg:space-y-9 space-x-0 sm:space-x-[1.875rem] text-white pt-10 sm:pt-12 -mt-0.5">
          <ReviewCard
            className="place-self-center sm:place-self-start md:place-self-end"
            name="Colton Smith"
            profilePic={coltonImg}
            title="Verified Buyer"
          >
            We needed the same printed design as the one we had ordered a week
            prior. Not only did they find the original order, but we also
            received it in time. Excellent!
          </ReviewCard>

          <ReviewCard
            className="place-self-stretch sm:place-self-center"
            name="Irene Roberts"
            profilePic={ireneImg}
            title="Verified Buyer"
          >
            Customer service is always excellent and very quick turn around.
            Completely delighted with the simplicity of the purchase and the
            speed of delivery.
          </ReviewCard>

          <ReviewCard
            className="place-self-center sm:place-self-end md:place-self-start"
            name="Anne Wallace"
            profilePic={anneImg}
            title="Verified Buyer"
          >
            Put an order with this company and can only praise them for the very
            high standard. Will definitely use them again and recommend them to
            everyone!
          </ReviewCard>
        </div>
      </div>
    </main>
  );
}
