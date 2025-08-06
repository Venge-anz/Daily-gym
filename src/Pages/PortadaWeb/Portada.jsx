import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export const Portada = () => {
  return (
    <>
      <div className="flex flex-col gap-7 items-center">
        <div className="flex flex-row items-start w-full md:w-[60rem] dark:bg-gray-700 rounded-lg px-9 py-8 shadow-xl/50 shadow-black">
          <img
            src="public/ImagenPortada.png"
            alt="imagenPortada"
            className="w-90 border-4 border-amber-50"
          ></img>

          <div className=" flex flex-col mt-20 ">
            <h1 className="text-7xl font-bold text-end text-amber-50">
              Track your workout online.
            </h1>

            <div className="flex flex-row justify-between items-start mt-10 p-3 ml-6">
              <div>
                <p className="text-2xl font-extralight italic text-start border-b text-gray-400">
                  Make your workout a habit.
                </p>
                <p className="text-lg italic text-gray-500">
                  Do it with purpose. <br />
                  Do it with consistency. <br />
                  Do it for results.
                </p>
              </div>

              <ArrowOutwardIcon
                style={{ fontSize: 90 }}
                className="
              border border-amber-50 rounded-full text-amber-50 p-6 cursor-pointer mt-6 mr-20
              transition duration-150
              hover:scale-95 hover:shadow-[0_4px_6px_rgba(251,191,36,0.3)]
              active:scale-90 active:shadow-[0_2px_4px_rgba(251,191,36,0.4)]"
              />
            </div>
          </div>
        </div>

        {/* Segunda Portada */}
        <div className="flex flex-row gap-3">
          <div className="flex flex-colitems-start w-full md:w-[30rem] dark:bg-gray-700 rounded-lg px-9 py-8 shadow-xl/50 shadow-black"></div>
          <div className="flex flex-colitems-start w-full md:w-[30rem] dark:bg-gray-700 rounded-lg px-9 py-8 shadow-xl/50 shadow-black"></div>
        </div>
      </div>
    </>
  );
};
