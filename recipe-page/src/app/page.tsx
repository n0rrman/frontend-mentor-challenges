import Image from "next/image";

import { young, outfit } from "./fonts";
import foodImage from "/public/image-omelette.jpeg";

export default function Home() {
  return (
    <div
      className={`flex justify-center items-center min-h-screen ${outfit.className}`}
    >
      <main className="flex flex-col gap-6 max-w-full md:max-w-[46rem] bg-white md:px-10 md:pt-10 md:pb-7 rounded-none md:rounded-3xl my-0 md:my-[7.7rem]">
        <section className="">
          <div className="relative w-full aspect-[2.1866666667] md:rounded-xl overflow-hidden">
            <Image src={foodImage} alt="" fill />
          </div>
          <h1
            className={`${young.className} pt-[2.5rem] pb-4 text-3xl md:text-[2.5rem] px-8 md:px-0`}
          >
            Simple Omelette Recipe
          </h1>

          <p className="text-wengeBrown px-8 md:px-0">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </section>
        <section className="px-7 py-6 mt-2 rounded-xl bg-roseWhite space-y-2 mx-8 md:mx-0">
          <h2 className="text-darkRaspberry font-bold text-xl">
            Preparation time
          </h2>

          <ul className="list-disc list-inside flex flex-col gap-2 px-2 py-1">
            <li className="text-darkRaspberry text-sm">
              <span className="text-wengeBrown text-base">
                <span className="ml-[0.8rem] font-bold">Total</span>:
                Approximately 10 minutes
              </span>
            </li>
            <li className="text-darkRaspberry text-sm">
              <span className="text-wengeBrown text-base">
                <span className="ml-[0.8rem] font-bold">Preparation</span>: 5
                minutes
              </span>
            </li>
            <li className="text-darkRaspberry text-sm">
              <span className="text-wengeBrown text-base">
                <span className="ml-[0.8rem] font-bold">Cooking</span>: 5
                minutes
              </span>
            </li>
          </ul>
        </section>

        <section className="px-8 md:px-0">
          <h2
            className={`${young.className} text-nutmeg text-[1.75rem] pb-4 pt-0.5`}
          >
            Ingredients
          </h2>

          <ul className="list-disc list-inside flex flex-col gap-2 text-nutmeg text-xs px-2">
            <li>
              <span className="text-wengeBrown text-base ml-4">
                2-3 large eggs
              </span>
            </li>
            <li>
              <span className="text-wengeBrown text-base ml-4">
                Salt, to taste
              </span>
            </li>
            <li>
              <span className="text-wengeBrown text-base ml-4">
                Pepper, to taste
              </span>
            </li>
            <li>
              <span className="text-wengeBrown text-base ml-4">
                1 tablespoon of butter or oil
              </span>
            </li>
            <li>
              <span className="text-wengeBrown text-base ml-4">
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </span>
            </li>
          </ul>
        </section>

        <hr className="my-2" />

        <section className="text-sm pt-1 px-8 md:px-0">
          <h2 className={`${young.className} text-nutmeg text-[1.75rem] pb-5`}>
            Instructions
          </h2>
          <ol className="pl-6 list-decimal list-outside flex flex-col gap-2 py-2 font-bold text-base text-nutmeg">
            <li className="pl-4">
              <div className="font-normal text-wengeBrown">
                <span className="font-bold">Beat the eggs</span>: In a bowl,
                beat the eggs with a pinch of salt and pepper until they are
                well mixed. You can add a tablespoon of water or milk for a
                fluffier texture.
              </div>
            </li>

            <li className="pl-4">
              <div className="font-normal text-wengeBrown">
                <span className="font-bold">Heat the pan</span>: Place a
                non-stick frying pan over medium heat and add butter or oil.
              </div>
            </li>

            <li className="pl-4">
              <div className="font-normal text-wengeBrown">
                <span className="font-bold">Cook the omelette</span>: Once the
                butter is melted and bubbling, pour in the eggs. Tilt the pan to
                ensure the eggs evenly coat the surface.
              </div>
            </li>

            <li className="pl-4">
              <div className="font-normal text-wengeBrown">
                <span className="font-bold">Add fillings (optional)</span>: When
                the eggs begin to set at the edges but are still slightly runny
                in the middle, sprinkle your chosen fillings over one half of
                the omelette.
              </div>
            </li>
            <li className="pl-4">
              <div className="font-normal text-wengeBrown">
                <span className="font-bold">Fold and serve</span>: As the
                omelette continues to cook, carefully lift one edge and fold it
                over the fillings. Let it cook for another minute, then slide it
                onto a plate.
              </div>
            </li>
            <li className="pl-4">
              <div className="font-normal text-wengeBrown">
                <span className="font-bold">Enjoy</span>: Serve hot, with
                additional salt and pepper if needed.
              </div>
            </li>
          </ol>
        </section>

        <hr />

        <section className="px-8 md:px-0">
          <h2 className={`${young.className} text-nutmeg text-[1.75rem] pb-1`}>
            Nutrition
          </h2>

          <p className="py-3">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>

          <table className="w-full">
            <tbody className="flex flex-col pl-0.5">
              <tr className=" border-b grid grid-cols-2 w-full px-7 py-[0.67rem]">
                <td className="">Calories</td>
                <td className=" text-nutmeg font-bold pl-1.5">277kcal</td>
              </tr>

              <tr className=" border-b grid grid-cols-2 w-full px-7 py-[0.67rem]">
                <td>Carbs</td>
                <td className="text-nutmeg font-bold pl-1.5">0g</td>
              </tr>

              <tr className=" border-b grid grid-cols-2 w-full px-7 py-[0.67rem]">
                <td>Protein</td>
                <td className="text-nutmeg font-bold pl-1.5">20g</td>
              </tr>

              <tr className=" grid grid-cols-2 w-full px-7 py-[0.67rem]">
                <td className="">Fat</td>
                <td className="text-nutmeg font-bold pl-1.5">22g</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
