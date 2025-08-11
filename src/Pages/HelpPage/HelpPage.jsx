export const HelpPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white px-4 py-20 flex flex-col items-center rounded shadow-2xl">
        <h1 className="text-4xl font-extrabold text-amber-400 mb-10 text-center">
          💬 Frequently Asked Questions
        </h1>

        <div className="w-full max-w-3xl space-y-6">
          {/* Pregunta 1 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-amber-200 transition-shadow">
            <h2 className="text-xl font-semibold text-amber-300 mb-2">
              🏋️‍♂️ What is this app about?
            </h2>
            <p className="text-gray-300">
              This app is a gym-focused ToDo list where you can plan, track, and
              organize your workouts. It helps you build consistency by logging
              routines, setting goals, and monitoring progress.
            </p>
          </div>

          {/* Pregunta 2 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-amber-200 transition-shadow">
            <h2 className="text-xl font-semibold text-amber-300 mb-2">
              📱 Do I need to install anything?
            </h2>
            <p className="text-gray-300">
              Nope! It works right from your browser on desktop or mobile. Just
              sign up and start training.
            </p>
          </div>

          {/* Pregunta 3 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-amber-200 transition-shadow">
            <h2 className="text-xl font-semibold text-amber-300 mb-2">
              🔐 Is my progress saved?
            </h2>
            <p className="text-gray-300">
              Yes. All your workouts and progress are saved securely in your
              account, so you can access them anytime.
            </p>
          </div>

          {/* Pregunta 4 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-amber-200 transition-shadow">
            <h2 className="text-xl font-semibold text-amber-300 mb-2">
              💸 Is it really free?
            </h2>
            <p className="text-gray-300">
              Yes! We offer all core features for free. Premium features may be
              added later, but basic workout tracking is 100% free.
            </p>
          </div>

          {/* Pregunta 5 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-amber-200 transition-shadow">
            <h2 className="text-xl font-semibold text-amber-300 mb-2">
              🧠 Can I create my own routines?
            </h2>
            <p className="text-gray-300">
              Absolutely. You can create, edit, and reuse custom routines.
              Perfect for push/pull/legs, strength splits, or your own system.
            </p>
          </div>
        </div>

        <p className="mt-12 text-gray-400 text-sm text-center">
          Still have questions? Reach out to us at{" "}
          <span className="text-amber-300">support@justdoit.app</span>
        </p>
      </div>
      ;
    </>
  );
};
