import { motion } from "framer-motion";

const images = [
  { src: "/done.gif", label: "Glute" },
  { src: "/catmuscle.jpg", label: "Shoulder" },
  { src: "/hecho.gif", label: "Chest" },
  { src: "/select.gif", label: "Abdominal" },
];

// Asegúrate que estén en public/

const InfiniteScrollImages = () => {
  return (
    // TITULO
    <div className="overflow-hidden w-160 relative mt-20 flex flex-col bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl p-3 shadow-2xl">
      <h1 className="text-3xl text-center text-gray-500 mb-5 border-b ">
        Default Workouts
      </h1>
      {/* Gradientes de opacidad en los bordes */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-full z-10">
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[rgb(237,28,207)] to-transparent" />
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[rgb(237,28,207)] to-transparent" />
      </div>

      <motion.div
        className="flex w-max gap-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((item, i) => (
          <div
            key={i}
            className="flex flex-col w-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl p-3 shadow-2xl border border-amber-50"
          >
            <img
              src={item.src}
              alt={`img-${i}`}
              className="h-40 w-40 object-contain border rounded-2xl"
            />
            <div>
              <p className=" text-white text-center">{item.label}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollImages;
