import { useState } from "react";
import { TareaContext } from "../context/tareaContext";
import { DateContext } from "../context/DateContext";

export const AppProviders = ({ children }) => {
  //Estados del input y la edicion de los task
  const [inputTarea, setInputTarea] = useState(""); //el input
  const [tarea, setTarea] = useState([]); //la lista de tareas

  const [modoEdicion, setModoEdicion] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  //Estados de las fechas (day,week,month) del calendario
  //Estados de Day
  const [value, setValue] = useState(null);
  const [day, setDay] = useState(null);

  //Estados de month
  const [month, setMonth] = useState(null);

  //Estados de week
  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);

  const [addWithoutDate, setAddWithoutDate] = useState(true);

  return (
    <DateContext
      value={{
        value,
        setValue,
        day,
        setDay,
        addWithoutDate,
        setAddWithoutDate,
        month,
        setMonth,
        fechaInicio,
        setFechaInicio,
        fechaFin,
        setFechaFin,
      }}
    >
      <TareaContext.Provider
        value={{
          inputTarea,
          setInputTarea,
          tarea,
          setTarea,
          modoEdicion,
          setModoEdicion,
          editIndex,
          setEditIndex,
        }}
      >
        {children}
      </TareaContext.Provider>
    </DateContext>
  );
};
