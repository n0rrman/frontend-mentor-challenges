import Image from "next/image";

import { young, outfit } from "./fonts";
import foodImage from "/public/image-omelette.jpeg";

export default function Home() {
  return (
    <div
      className={`flex justify-center items-center min-h-screen ${outfit.className}`}
    >
      <main className="flex flex-col gap-7 max-w-[46rem] bg-white md:p-10 rounded-none md:rounded-3xl my-0 md:my-[7.5rem]">
        <section>
          <div className="relative w-full aspect-[2.1866666667] md:rounded-xl overflow-hidden">
            <Image src={foodImage} alt="" fill />
          </div>
          <h1 className={`${young.className} pt-8 pb-3.5 text-[2.5rem]`}>
            Simple Omelette Recipe
          </h1>

          <p className="text-wengeBrown">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </section>
        <section className="px-7 py-6 rounded-xl bg-roseWhite space-y-2">
          <h3 className="text-darkRaspberry font-bold text-xl">
            Preparation time
          </h3>

          <ul className="list-disc list-inside flex flex-col gap-2 px-2 py-1">
            <li className="text-darkRaspberry text-sm">
              <span className="text-wengeBrown text-base">
                <span className="ml-[0.8rem] font-bold">Total</span>:
                Approximately 10 minutes
              </span>
            </li>

            <li>
              <span className="font-bold">Preparation</span>: 5 minutes
            </li>
            <li>
              <span className="font-bold">Cooking</span>: 5 minutes
            </li>
          </ul>
        </section>

        <section>
          <h2 className={`${young.className} text-nutmeg text-[1.75rem] pb-5`}>
            Ingredients
          </h2>

          <ul className="list-disc list-inside flex flex-col gap-4">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </section>

        <hr />

        <section>
          <h3 className={`${young.className} text-nutmeg text-[1.75rem] pb-5`}>
            Instructions
          </h3>
          <ol className="pl-6 list-decimal list-outside flex flex-col gap-3">
            <li>
              <span className="font-bold">Beat the eggs</span>: In a bowl, beat
              the eggs with a pinch of salt and pepper until they are well
              mixed. You can add a tablespoon of water or milk for a fluffier
              texture.
            </li>

            <li>
              <span className="font-bold">Heat the pan</span>: Place a non-stick
              frying pan over medium heat and add butter or oil.
            </li>

            <li>
              <span className="font-bold">Cook the omelette</span>: Once the
              butter is melted and bubbling, pour in the eggs. Tilt the pan to
              ensure the eggs evenly coat the surface.
            </li>

            <li>
              <span className="font-bold">Add fillings (optional)</span>: When
              the eggs begin to set at the edges but are still slightly runny in
              the middle, sprinkle your chosen fillings over one half of the
              omelette.
            </li>
            <li>
              <span className="font-bold">old and serve</span>: As the omelette
              continues to cook, carefully lift one edge and fold it over the
              fillings. Let it cook for another minute, then slide it onto a
              plate.
            </li>
            <li>
              <span className="font-bold">Enjoy</span>: Serve hot, with
              additional salt and pepper if needed.
            </li>
          </ol>
        </section>

        <hr />

        <section>
          <h3 className={`${young.className} text-nutmeg text-[1.75rem] pb-5`}>
            Nutrition
          </h3>

          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>

          <table className="w-full">
            <tbody className="flex flex-col">
              <tr className=" border-b grid grid-cols-2 w-full px-7 py-3">
                <td className="">Calories</td>
                <td className=" text-nutmeg font-bold">277kcal</td>
              </tr>

              <tr className=" border-b grid grid-cols-2 w-full px-7 py-3">
                <td>Carbs</td>
                <td className="text-nutmeg font-bold">0g</td>
              </tr>

              <tr className=" border-b grid grid-cols-2 w-full px-7 py-3">
                <td>Protein</td>
                <td className="text-nutmeg font-bold">20g</td>
              </tr>

              <tr className=" grid grid-cols-2 w-full px-7 py-3">
                <td className="">Fat</td>
                <td className="text-nutmeg font-bold">22g</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
