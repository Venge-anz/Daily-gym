import { Button } from "../../components/Botones/Button";

export const Invite = () => {
  const invite = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col items-center mt-24 justify-center md:px-40 mx-auto">
        <div
          className="flex flex-col md:flex-row items-center md:items-start w-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl px-10 py-12 shadow-2xl"
          data-aos="fade-up"
        >
          <img
            src="/invitaAmigo.png"
            alt="imagenInvita"
            className="w-full md:w-[22rem] rounded-lg border-4 border-amber-50 shadow-md"
          />

          <div className="flex flex-col md:ml-12 mt-10 md:mt-0 w-full p-10">
            <h1
              className="text-5xl md:text-7xl font-extrabold text-amber-50 text-right leading-tight"
              data-aos="fade-up"
            >
              Get stronger together.
            </h1>

            <div className="flex flex-row justify-between items-center mt-10 p-3 ml-2 md:ml-6">
              <div>
                <p
                  className="text-2xl font-light italic text-gray-400 border-b border-gray-500 pb-1 mb-2"
                  data-aos="fade-up"
                >
                  Invite a friend.
                </p>
                <p className="text-lg italic text-gray-500" data-aos="fade-up">
                  Working out is always better with a friend. Invite someone to
                  join and share your routines: stay motivated, challenge each
                  other, and reach your goals together.
                </p>
                <form className="flex w-20 mt-10">
                  <input
                    type="text"
                    placeholder="Add an email..."
                    onSubmit={invite}
                    className="flex-grow bg-white text-gray-800 px-4 rounded-l-md outline-none focus:ring-2 focus:ring-[#477984]"
                  />
                  <Button
                    className="bg-[#477984] text-white px-4 cursor-pointer py-2 rounded-l-md transition-all duration-200 border-2 border-transparent hover:border-pink-400"
                    nombre="Invite"
                    fn={invite}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
