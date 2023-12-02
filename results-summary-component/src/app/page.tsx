import { promises as fs } from 'fs';
import Image from 'next/image';


interface CategoryItem {
  "category": string,
  "score": number,
  "icon": string,
  "color": string,
}

export default async function Home() {

  const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf-8');
  const data = JSON.parse(file);

  // bg-primaryRed/5
  // bg-primaryYellow/5
  // bg-primaryTeal/5
  // bg-primaryCobalt/5

  // text-primaryRed
  // text-primaryYellow
  // text-primaryTeal
  // text-primaryCobalt
  const renderedScores = data.map((item: CategoryItem ) => {
    // const logo = require(items.icon) as string;
    return ( 
    <div className={`flex flex-row items-center justify-between my-4 p-4 sm:my-[1rem] sm:p-[0.875rem] rounded-xl bg-primary${item.color}/5`} key={item.category}>
      <div className="flex flex-row items-center">
      <div className="relative h-4 w-4 sm:w-5 sm:h-5 mr-3 ml-[0.15rem]">
        <Image
          className=""
          src={item.icon}
          fill
          alt=""
          />
      </div>
      <div className={`sm:text-lg text-primary${item.color}`}>
      {item.category} 
      </div>
      </div>
      <div>
      <span className="sm:text-lg font-bold">{item.score} </span> <span className="sm:mx-[0.2rem] sm:text-lg font-thin text-neutralGray/50"> / 100</span>
      </div>
    </div>
      );
      
  });

  return (
    <div className="flex justify-center items-start md:items-center min-h-screen">

    <main className="flex flex-col shadow-xl shadow-neutralBlue md:rounded-3xl overflow-hidden md:flex-row w-screen sm:w-11/12 md:w-auto md:max-w-[46rem]">

      <div className="flex flex-col justify-center p-6 sm:p-10 items-center rounded-b-3xl md:rounded-[2rem] bg-gradient-to-b from-gradientSlate/80 bg-gradientRoyal text-center md:w-1/2">
      <h1 className="text-neutralWhite/60 text-lg sm:tracking-[0.01em] sm:text-[1.5rem]">
        Your Result
      </h1>
      <div className="flex m-6 sm:m-9 flex-col justify-center items-center bg-gradient-to-b from-gradienetViolet/90 via-75% via-gradientPersian/30 rounded-full w-[8.6rem] h-[8.6rem] sm:w-[12.4rem] sm:h-[12.4rem]">
        <div className="font-extrabold text-[3.6rem] sm:text-[4.5rem] text-neutralWhite">
          76
        </div>
        <div className="text-neutralWhite/50 sm:text-lg sm:-mt-[1rem]">
          of 100
        </div>
      </div>

      <h3 className="text-2xl md:text-[2rem] md:-ml-[0.33rem] md:tracking-[0.01rem] text-neutralWhite">
        Great
      </h3>

      <p className="text-normal md:text-lg md:leading-[1.45rem] text-neutralWhite/60 w-72 md:w-auto px-2 mx-2 mt-5 sm:mb-4">
        You scored higher than 65% of the people who have taken these tests.
      </p>
      </div>
      <div className="md:w-1/2 p-6 sm:py-[1.7rem] sm:px-10">
      <h3 className="text-lg sm:text-2xl font-bold sm:py-3">Summary</h3>
        {renderedScores}
        <div className="flex text-lg justify-center items-center bg-neutralGray text-white p-[0.9rem] mt-10 rounded-[2rem] hover:cursor-pointer hover:bg-gradient-to-b hover:from-gradientSlate/80 hover:bg-gradientRoyal transition-color duration-100 ease-in-out">
          Continue
        </div>
      </div>

  


  
      </main>
      </div>
    );
  }