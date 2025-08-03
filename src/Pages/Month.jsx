import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { InputTask } from "../components/InputTask";

export const Month = () => {
  const [value, setValue] = useState(null);
  const [month, setMonth] = useState(null);

  useEffect(() => {
    if (value !== null) {
      const monthSelected = moment(value).format("MMMM");
      setMonth(monthSelected);
    }
  }, [value]);

  return (
    <>
      <div className="mt-7">
        <Calendar
          onChange={setValue}
          value={value}
          view="year"
          maxDetail="year"
        />
      </div>
      {month !== null && (
        <div className=" mt-2 text-center text-amber-50 ">
          <p className="text-white uppercase tracking-widest font-semibold px-4 py-2 border border-gray-500 rounded-lg shadow-md text-lg bg-black/30 backdrop-blur-md">
            {month}
          </p>
        </div>
      )}
      <InputTask></InputTask>
    </>
  );
};
