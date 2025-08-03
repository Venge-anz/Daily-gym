import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment/moment";
import { InputTask } from "../components/InputTask";

export const Day = () => {
  const [value, setValue] = useState(null);
  const [day, setDay] = useState(null);

  //La fecha

  useEffect(() => {
    if (value !== null) {
      const selectedDay = moment(value).format("D MMMM YYYY");
      setDay(selectedDay);
    }
  }, [value]);

  //Para selecionar el dia actual formateado

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <>
      <div className="mt-7">
        <Calendar onChange={setValue} minDate={today} />
      </div>

      {day !== null && (
        <div className=" mt-2 text-center text-amber-50 ">
          <p className="text-white text-center uppercase tracking-widest font-semibold px-4 py-2 border border-gray-500 rounded-lg shadow-md text-lg bg-black/30 backdrop-blur-md">
            {day}
          </p>
        </div>
      )}
      <InputTask></InputTask>
    </>
  );
};
