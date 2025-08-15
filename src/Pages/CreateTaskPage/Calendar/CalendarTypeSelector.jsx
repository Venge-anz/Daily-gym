import { useState } from "react";
import { Calendario } from "./Calendario";
import { InputTask } from "../components/InputTask";

export const CalendarTypeSelector = () => {
  const [type, setType] = useState("day");

  const calculateColors = (buttonType) => {
    if (type === buttonType) {
      return "white";
    }
  };

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

        <div className="flex flex-row gap-3 border-b text-gray-400">
          <button
            style={{
              color: calculateColors("day"),
            }}
            onClick={() => setType("day")}
            className="cursor-pointer"
          >
            Day
          </button>
          <button
            style={{
              color: calculateColors("week"),
            }}
            onClick={() => setType("week")}
            className="cursor-pointer"
          >
            Week
          </button>
          <button
            style={{
              color: calculateColors("month"),
            }}
            onClick={() => setType("month")}
            className="cursor-pointer"
          >
            Month
          </button>
        </div>
        <Calendario type={type} setType={setType}></Calendario>
      </div>
      <div className="flex flex-col justify-start items-center w-full md:w-[35rem] dark:bg-gray-700 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/6">
        <InputTask></InputTask>
      </div>
    </>
  );
};
