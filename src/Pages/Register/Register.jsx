export const Register = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl">
      <div className="flex flex-col items-center w-full max-w-md bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl px-8 py-9 shadow-2xl">
        {/* Título */}
        <p className="text-3xl font-extrabold text-center text-amber-300 leading-snug mb-6">
          Create Your <br /> Free Account
        </p>

        {/* Imagen */}

        {/* Formulario */}
        <form className="w-full space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          {/* Botón */}
          <button
            type="submit"
            className="w-full mt-4 bg-amber-400 text-gray-900 font-semibold rounded-full px-6 py-3 transition-all
            hover:bg-amber-300 hover:scale-95 hover:shadow-lg
            active:scale-90 active:shadow-inner cursor-pointer"
          >
            Register Now
          </button>
        </form>

        {/* Texto adicional */}
        <p className="mt-6 text-gray-400 text-sm">
          Already have an account?{" "}
          <a href="/" className="text-amber-300 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};
