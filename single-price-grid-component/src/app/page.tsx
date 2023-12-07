export default function Home() {
    return (
      <div className="flex justify-center items-center bg-lightGray min-h-screen py-16 px-7 ">
        <main className="text-lightGray flex flex-col max-w-[25rem] md:max-w-[39.7rem] rounded-lg shadow-2xl shadow-grayish/75 overflow-hidden">

          <div className="bg-white tracking-[-0.01rem] p-6 sm:p-10 space-y-[1.1rem]">
            <h1 className="text-cyan text-lg sm:text-2xl font-bold">
              Join our community
            </h1>

            <div>
              <h3 className="text-brightYellow font-bold text-sm sm:text-lg pb-2">
                30-day, hassle-free money back guarantee
              </h3>

              <p className="text-grayish leading-[1.5rem] py-[0.4rem] sm:py-0 text-xs tracking-[0.009rem] sm:leading-[1.6rem] sm:text-[0.95rem]">
                Gain access to our full library of tutorials along with expert code reviews. 
                Perfect for any developers who are serious about honing their skills.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="bg-cyan p-[1.3rem] sm:py-[2.375rem] md:px-10 md:w-1/2">

              <h2 className="text-base sm:text-[1.1rem] font-bold">
                Monthly Subscription
              </h2>

              <div className="flex flex-row items-center justify-start pt-3 sm:pt-[0.585rem]">
                <div className="font-bold text-3xl sm:text-[1.95rem]">
                  $29
                </div>
                <div className="px-3 text-sm sm:text-[0.95rem] text-lightGray/50 tracking-wide">
                  per month
                </div>
              </div>
              <p className="pt-1 sm:pt-0 pb-7 text-sm sm:text-[0.975rem] text-lightGray/80">
                Full access for less than §1 a day
              </p>

              <button className="bg-brightYellow w-full p-2 sm:p-[0.625rem] rounded-md shadow-xl text-white border-2 hover:text-brightYellow border-brightYellow hover:bg-cyan transition-all duration-100 ease-in-out">
                Sign Up
              </button>

            </div>

            <div className="bg-lightCyan p-5 sm:py-[2.3rem] sm:px-10 md:w-1/2">
              <h2 className="text-base sm:text-lg font-bold pb-[0.95rem]">
                Why Us
              </h2>
              <p className="text-xs sm:text-[0.81rem] tracking-wide text-lightGray/75 leading-5">
                Tutorials by industry experts
                <br/>
                Peer &amp; expert code review
                <br/>
                Coding exercises
                <br/>
                Access to our GitHub repos
                <br/>
                Community forum
                <br/>
                Flashcard decks
                <br/>
                New videos every week
              </p>

            </div>

          </div>

        </main>
      </div>  
    );
  }