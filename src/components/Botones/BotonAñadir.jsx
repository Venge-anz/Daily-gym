export const BotonAñadir = ({ fn, nombre }) => {
  return (
    <button
      onClick={fn}
      className="px-6 py-3 rounded-full font-semibold text-white 
             bg-gradient-to-r from-pink-500 via-rose-400 to-orange-400 
             shadow-lg shadow-rose-300/50 
             transition-all duration-300 ease-in-out
             hover:scale-105 hover:shadow-xl hover:shadow-rose-400/60
             active:scale-95 active:shadow-inner
      cursor-pointer "
    >
      {nombre}
    </button>
  );
};
