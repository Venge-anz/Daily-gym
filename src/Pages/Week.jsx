import { useContext, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment/moment";
import { today } from "../components/today";
import { DateContext } from "../context/DateContext";

export const Week = () => {
  const {
    value,
    setValue,
    fechaFin,
    setFechaFin,
    fechaInicio,
    setFechaInicio,
  } = useContext(DateContext);

  // Seleccion de fechas
  useEffect(() => {
    if (value !== null) {
      const fechaInicio = moment(value[0]).format("D MMMM");
      const fechaFin = moment(value[1]).format("D MMMM YYYY");
      setFechaInicio(fechaInicio);
      setFechaFin(fechaFin);
    }
  }, [value]);

  return (
    <>
      <div className="mt-7">
        <Calendar
          className="rounded-lg p-4 text-gray-800"
          onChange={(e) => setValue(e)}
          minDate={today}
          selectRange
          locale="en"
        />
      </div>
      {value !== null && (
        <div className=" mt-2 text-center text-amber-50 w-full ">
          <p className="text-white uppercas font-semibold px-4 py-2 border border-gray-500 rounded-lg shadow-md text-lg bg-black/30 backdrop-blur-md">
            From {fechaInicio} to {fechaFin}
          </p>
        </div>
      )}
    </>
  );
};
