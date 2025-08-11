import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Testimonios } from "./Testimonios";
import InfiniteScrollImages from "../../components/InfiniteScrollImages";

export const Portada = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center mt-24 justify-center md:px-40 mx-auto">
        {/* Primera sección */}
        <div
          className="flex flex-col md:flex-row items-center md:items-start w-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl px-10 py-12 shadow-2xl"
          data-aos="fade-up"
        >
          <img
            src="/ImagenPortada.png"
            alt="imagenPortada"
            className="w-full md:w-[22rem] rounded-lg border-4 border-amber-50 shadow-md"
          />

          <div className="flex flex-col md:ml-12 mt-10 md:mt-0 w-full p-10">
            <h1
              className="text-5xl md:text-7xl font-extrabold text-amber-50 text-right leading-tight"
              data-aos="fade-up"
            >
              Track your <br /> workout online.
            </h1>

            <div className="flex flex-row justify-between items-center mt-10 p-3 ml-2 md:ml-6">
              <div>
                <p
                  className="text-2xl font-light italic text-gray-400 border-b border-gray-500 pb-1 mb-2"
                  data-aos="fade-up"
                >
                  Make your workout a habit.
                </p>
                <p className="text-lg italic text-gray-500" data-aos="fade-up">
                  Do it with purpose. <br />
                  Do it with consistency. <br />
                  Do it for results.
                </p>
              </div>

              <ArrowOutwardIcon
                style={{ fontSize: 90 }}
                className="border border-amber-50 rounded-full text-amber-50 p-6 cursor-pointer transition-all duration-200 hover:scale-95 hover:rotate-12 hover:shadow-[0_4px_6px_rgba(251,191,36,0.3)] active:scale-90 active:shadow-[0_2px_4px_rgba(251,191,36,0.4)]"
              />
            </div>
          </div>
        </div>

        {/* Segunda sección */}
        <div
          className="grid justify-center items-center md:grid-cols-2 xl:grid-cols-2 mt-20 px-4 "
          data-aos="fade-up"
        >
          {/* Card 1 - Premium Features */}
          <div className="flex flex-row justify-center items-center w-full h-90 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl px-10 py-12 shadow-2xl">
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <p
                className="text-lg text-amber-100 font-medium mb-4 mr-5"
                data-aos="fade-up"
              >
                🚀 Start enjoying premium features today:
              </p>
              <li>No credit card required</li>
              <li>Access exclusive tools</li>
              <li>Track your progress easily</li>
            </ul>
            <img
              className="w-50 mt-4 border-2 border-amber-50 rounded"
              data-aos="fade-up"
              src="public/proudImage.jpg"
              alt="proudImage"
            />
          </div>
          {/* Card 2 - Free Account */}
          <div className="flex ml-20 flex-col items-center w-90 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl px-8 py-9 shadow-2xl">
            <p
              className="text-3xl font-extrabold text-center text-amber-300 leading-snug mb-6"
              data-aos="fade-up"
            >
              Get Your <br /> Free Account Now!
            </p>
            <img
              src="/freeAcountImage.gif"
              alt="Create Free Account"
              className="w-40"
              data-aos="fade-up"
            />
            <button
              className="mt-4 bg-amber-400 text-gray-900 font-semibold rounded-full px-6 py-3 transition-all
        hover:bg-amber-300 hover:scale-95 hover:shadow-lg
        active:scale-90 active:shadow-inner cursor-pointer"
              data-aos="fade-up"
            >
              Register Now
            </button>
          </div>

          {/* Card 4 Grafica */}

          <div
            className="flex flex-col justify-center w-100 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl px-5 py-5 shadow-2xl"
            data-aos="fade-up"
          >
            <img
              src="public/grafica.png"
              alt="grafica"
              className="rounded w-90 h-90 "
              data-aos="fade-up"
            ></img>
          </div>
          {/* Card 3 - About Us */}
          <div
            className="flex flex-col justify-center w-140 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl px-10 py-12 shadow-2xl"
            data-aos="fade-up"
          >
            <p
              className="text-lg text-amber-100 font-medium mb-4"
              data-aos="fade-up"
            >
              💪 Our Story
            </p>
            <p className="text-gray-300" data-aos="fade-up">
              We’re a small team of fitness enthusiasts and developers who got
              tired of juggling workout notebooks, scattered apps, and messy
              spreadsheets. That’s why we built this app — a simple, powerful
              ToDo system tailored for the gym. Whether you're following a
              strict program or crafting your own routines, our goal is to help
              you stay organized, focused, and consistent. No distractions, no
              fluff — just a clean space to plan, track, and smash your fitness
              goals.
            </p>
          </div>
        </div>

        {/* Card 5 - Testimonials */}
        <div
          className="  flex flex-row items-center w-200 mt-20 h-120 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl px-8 py-9 shadow-2xl col-span-full xl:col-span-1 xl:col-start-2"
          data-aos="fade-up"
        >
          <Testimonios />
        </div>
        <InfiniteScrollImages></InfiniteScrollImages>
      </div>
    </>
  );
};
