import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className="text-white ">
      <div className="max-width-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a]  font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold md:py-2 ">
          Grow with data
        </h1>
        <div className="flex justify-center gap-2 items-center">
          <p className="text-xl  sm:text-3xl md:text-4xl font-bold">
            Fast, flexible financing for
          </p>
          {/* moving text from react typed*/}
          <ReactTyped
            className="text-xl  sm:text-3xl md:text-4xl font-bold"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={150}
            backSpeed={150}
            loop
          />
        </div>
        <p className="pl-2 pr-2 text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
      </div>
    </div>
  );
}

export default Hero;
