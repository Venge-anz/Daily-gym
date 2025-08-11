import { NavLink, Outlet } from "react-router";

export const NavLinksCreate = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center dark:bg-gray-700 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/6 w-full max-w-md">
        <h1 className="text-lg font-semibold text-left border border-amber-50 p-2 text-stone-300 mb-10">
          JUST
          <br />
          DO
          <br />
          IT.
        </h1>

        <div className="flex justify-center gap-6 border-b border-gray-500 mb-4 w-60">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-stone-100 font-semibold" : "text-stone-400"
            }
            to="day"
            end
          >
            Day
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-stone-100 font-semibold" : "text-stone-400"
            }
            to="week"
            end
          >
            Week
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-stone-100 font-semibold" : "text-stone-400"
            }
            to="month"
            end
          >
            Month
          </NavLink>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
};
