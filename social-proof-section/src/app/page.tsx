import ReviewCard from "@/components/reviewCard";
import RatingBar from "@/components/ratingBar";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-row justify-center items-center max-h-1/2 max-w-[70rem]">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold text-darkMagenta">
            10,000+ of our users love our products.
          </h1>
          <p className="text-grayishMagenta">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        <div className="w-1/2 flex flex-col">
          <RatingBar className="self-start" by="Reviews" stars={2} />
          <RatingBar className="self-center" by="Report Gury" stars={1} />
          <RatingBar className="self-end" by="BestTech" stars={5} />
        </div>
      </div>

      <div className="flex flex-row space-x-10 text-white">
        <ReviewCard
          className="place-self-end"
          name="Colton Smith"
          title="Verified Buyer"
        >
          "We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent!"
        </ReviewCard>

        <ReviewCard name="Irene Roberts" title="Verified Buyer">
          "Customer service is always excellent and very quick turn around.
          Completely delighted with the simplicity of the purchase and the speed
          of delivery."
        </ReviewCard>

        <ReviewCard name="Anne Wallace" title="Verified Buyer">
          "Put an order with this company and can only praise them for the very
          high standard. Will definitely use them again and recommend them to
          everyone!"
        </ReviewCard>
      </div>
    </main>
  );
}
