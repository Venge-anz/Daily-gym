//La funcion del boton añadir

import { useContext } from "react";
import { TareaContext } from "../context/tareaContext";
import { DateContext } from "../context/DateContext";

export const useAdd = () => {
  //Contextos
  const { tarea, setTarea, inputTarea, setInputTarea } =
    useContext(TareaContext);
  const { value, setAddWithoutDate } = useContext(DateContext);

  //Funcion ADD
  const addTarea = (e) => {
    if (inputTarea.trim() === "") {
      e.preventDefault();
      return;
    } else {
      e.preventDefault();
      const inputMayuscula =
        inputTarea.charAt(0).toUpperCase() + inputTarea.slice(1);
      setTarea([...tarea, inputMayuscula]);
      setInputTarea("");

      //Condicion enviar tarea sin fecha
    }
    if (value) {
      setAddWithoutDate(true);
    } else {
      setAddWithoutDate(false);
    }
  };

  return { addTarea };
};
