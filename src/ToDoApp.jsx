import { Rutas } from "./Pages/Routes/Rutas";
import { NavLink } from "react-router";

function ToDoApp() {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover"
      style={{ backgroundImage: `url(${"/Fondo.jpg"})` }}
    >
      <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-700 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/6 ">
        <img src="public/muscle.png" alt="emoticono" className="w-10"></img>
        <h1 className="text-center text-xl text-stone-300 font-extrabold mb-1 ">
          Just Do it
        </h1>
        <div className="flex flex-row justify-center gap-10 border-b-2 border-gray-500 ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-stone-100" : "text-stone-400"
            }
            to="/day"
            end
          >
            Day
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-stone-100" : "text-stone-400"
            }
            to="/week"
            end
          >
            Week
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-stone-100" : "text-stone-400"
            }
            to="/month"
            end
          >
            Month
          </NavLink>
        </div>
        <div>
          <Rutas></Rutas>
        </div>
      </div>
      <nav></nav>
    </div>
  );
}

export default ToDoApp;
