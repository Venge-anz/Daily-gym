export const Button = ({ fn, nombre, className = "" }) => {
  return (
    <button
      onClick={fn}
      className={`bg-amber-400 text-gray-900 font-semibold rounded-full px-6 py-3 transition-all
              hover:bg-amber-300 hover:scale-95 hover:shadow-lg
              active:scale-90 active:shadow-inner cursor-pointer ${className}`}
    >
      {nombre}
    </button>
  );
};
