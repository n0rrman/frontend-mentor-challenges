"use client";

import { useState } from "react";

import ReviewModal from "@/components/reviewModal";
import ThanksModal from "@/components/thanksModal";

export default function Home() {
  const [reviewScored, setReviewScore] = useState(0);

  const handleSubmitReview = (score: number) => {
    setReviewScore(score);
  };

  const renderModal = () => {
    if (reviewScored <= 0) {
      return <ReviewModal onSubmit={handleSubmitReview} />;
    } else {
      return <ThanksModal score={reviewScored} />;
    }
  };

  return (
    <div className="flex justify-center items-center bg-veryDarkBlue min-h-screen">
      <main className="max-w-[25.75rem] h-[26rem] mt-1 rounded-[2rem] mx-5 p-8 pr-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-darkBlue to-darkerBlue">
        {renderModal()}
      </main>
    </div>
  );
}
