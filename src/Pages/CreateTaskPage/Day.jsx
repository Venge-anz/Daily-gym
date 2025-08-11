import { useState, useEffect, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment/moment";
import { today } from "../../components/today";
import { DateContext } from "../../context/DateContext";

export const Day = () => {
  const { value, setValue, day, setDay, setAddWithoutDate } =
    useContext(DateContext);

  //La fecha

  useEffect(() => {
    if (value !== null) {
      const selectedDay = moment(value).format("D MMMM YYYY");
      setDay(selectedDay);
      setAddWithoutDate(true);
    }
  }, [value]);

  return (
    <>
      <div className="flex flex-row justify-end">
        <div className="mt-7">
          <div className="flex flex-row">
            <Calendar
              className="rounded-lg p-4 text-gray-800"
              onChange={setValue}
              minDate={today}
              locale="en"
            />
          </div>

          {value !== null && (
            <div className=" mt-2 text-center text-amber-50 ">
              <p className="text-white text-center uppercase tracking-widest font-semibold px-4 py-2 border border-gray-500 rounded-lg shadow-md text-lg bg-black/30 backdrop-blur-md">
                {day}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
