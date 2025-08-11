export const Testimonios = () => {
  return (
    <>
      {/* Testimonials Section */}
      <div className="w-full max-w-5xl mx-auto py-16 px-4">
        <h3
          className="text-1xl text-center italic text-white font-extralight mt-2"
          data-aos="fade-up"
        >
          What our users
        </h3>
        <h1
          className="text-3xl text-center text-white mb-5 "
          data-aos="fade-up"
        >
          SAY ABOUT US
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="flex flex-col bg-gray-800 rounded-xl p-6 shadow-xl text-center items-center transform transition duration-100 ease-in hover:scale-105 border border-amber-50">
            <img
              src="public/musclebunny.jpg"
              alt="muscleBunnyUser"
              className="w-23 h-23 rounded-full object-cover border-2 border-amber-300 shadow-md"
            ></img>
            <h3 className="text-xl font-semibold text-amber-100 mb-2">
              Jack "The Bunny" Flex
            </h3>
            <p className="text-gray-300 mb-4">
              “This app keeps me laser-focused. I never miss leg day anymore!”
            </p>
            <div className="text-amber-400 text-xl">⭐⭐⭐⭐⭐</div>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col bg-gray-800 rounded-xl p-6 shadow-xl text-center items-center transform transition duration-100 ease-in hover:scale-105 border border-amber-50">
            <img
              src="public/bearmuscle.jpg"
              alt="muscleBearUser"
              className="w-23 h-23 rounded-full object-cover border-2 border-amber-300 shadow-md"
            ></img>
            <h3 className="text-xl font-semibold text-amber-100 mb-2">
              Big Ben the Bear
            </h3>
            <p className="text-gray-300 mb-4">
              “I used to write my workouts on paper. This app changed the game.”
            </p>
            <div className="text-amber-400 text-xl">⭐⭐⭐⭐⭐</div>
          </div>

          {/* Testimonial 3 */}
          <div className="flex flex-col bg-gray-800 rounded-xl p-6 shadow-xl text-center items-center transform transition duration-100 ease-in hover:scale-105 border border-amber-50">
            <img
              src="public/catmuscle.jpg"
              alt="muscleCatUser"
              className="w-23 h-23 rounded-full object-cover border-2 border-amber-300 shadow-md"
            ></img>
            <h3 className="text-xl font-semibold text-amber-100 mb-2 object-cover">
              Cat Gains
            </h3>
            <p className="text-gray-300 mb-4">
              “Clean UI, super useful features, and no distractions. Love it.”
            </p>
            <div className="text-amber-400 text-xl">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
    </>
  );
};
