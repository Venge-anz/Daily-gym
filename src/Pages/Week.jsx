import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment/moment";
import { InputTask } from "../components/InputTask";

export const Week = () => {
  const [value, setValue] = useState(null);

  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);

  // Seleccion de fechas
  useEffect(() => {
    if (value !== null) {
      const fechaInicio = moment(value[0]).format("D MMMM");
      const fechaFin = moment(value[1]).format("D MMMM YYYY");
      setFechaInicio(fechaInicio);
      setFechaFin(fechaFin);
    }
  }, [value]);

  //Para selecionar el dia actual formateado

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <>
      <div className="mt-7">
        <Calendar onChange={(e) => setValue(e)} minDate={today} selectRange />
      </div>
      {value !== null && (
        <div className=" mt-2 text-center text-amber-50 w-full ">
          <p className="text-white uppercas font-semibold px-4 py-2 border border-gray-500 rounded-lg shadow-md text-lg bg-black/30 backdrop-blur-md">
            From {fechaInicio} to {fechaFin}
          </p>
        </div>
      )}
      <InputTask></InputTask>
    </>
  );
};
