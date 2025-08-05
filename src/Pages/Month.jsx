import { useState, useEffect, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { today } from "../components/today";
import { DateContext } from "../context/DateContext";

export const Month = () => {
  const { value, setValue, month, setMonth } = useContext(DateContext);

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
          className="rounded-lg p-2 text-gray-800 "
          onChange={setValue}
          value={value}
          view="year"
          maxDetail="year"
          minDate={today}
          locale="en"
        />
      </div>
      {value !== null && (
        <div className=" mt-2 text-center text-amber-50 ">
          <p className="text-white uppercase tracking-widest font-semibold px-4 py-2 border border-gray-500 rounded-lg shadow-md text-lg bg-black/30 backdrop-blur-md">
            {month}
          </p>
        </div>
      )}
    </>
  );
};
