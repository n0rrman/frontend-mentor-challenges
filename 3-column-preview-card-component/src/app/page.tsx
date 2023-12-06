import sedansIcon from '/public/icon-sedans.svg';
import suvsIcon from '/public/icon-suvs.svg';
import luxuryIcon from '/public/icon-luxury.svg';
import CardSection from '@/components/cardSection';

export default function Home() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-veryLightGray/95 text-veryLightGray/95">
        <main className="flex flex-col lg:flex-row justify-center rounded-lg overflow-hidden items-center h-auto lg:w-[57.5rem] max-w-[30rem] mx-3 sm:mx-8 lg:max-w-full lg:h-[31.25rem] my-12 lg:mt-[5.56rem]">

          <CardSection
            title="Sedans"
            color="brightOrange"
            icon={sedansIcon}
          >
            Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.
          </CardSection>

          <CardSection
            title="SUVs"
            color="darkCyan"
            icon={suvsIcon}
          >
              Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.
          </CardSection>

          <CardSection
            title="Luxury"
            color="veryDarkCyan"
            icon={luxuryIcon}
          >
              Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
          </CardSection>

        </main>
      </div>  
    );
  }