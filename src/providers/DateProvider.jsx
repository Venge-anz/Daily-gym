import { useState } from "react";
import { DateContext } from "../context/DateContext";

export const DateProvider = ({ children }) => {
  //Estados de las fechas (day,week,month) del calendario
  //Estados de Day
  const [value, setValue] = useState(null);
  const [day, setDay] = useState(null);

  //Estados de month
  const [month, setMonth] = useState(null);

  //Estados de week
  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);

  //Modo edicion: salta error si no seleccionas fecha
  const [addWithoutDate, setAddWithoutDate] = useState(true);

  return (
    <DateContext.Provider
      value={{
        value,
        setValue,
        day,
        setDay,
        month,
        setMonth,
        fechaInicio,
        setFechaInicio,
        fechaFin,
        setFechaFin,
        addWithoutDate,
        setAddWithoutDate,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};
