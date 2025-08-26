import { useState } from "react";
import { TareaContext } from "../context/tareaContext";

export const TareaProvider = ({ children }) => {
  //Estados del input y la edicion de los task
  const [inputTarea, setInputTarea] = useState(""); //el input
  const [tarea, setTarea] = useState([]); //la lista de tareas

  //Estado para almacenar los task por fecha y grupos
  const [gruposTask, setGruposTask] = useState([]);

  // Estado del si el boton de guardar task a notas ha sido pulsado o no
  const [isLoadingToHome, setisLoadingToHome] = useState(false);

  return (
    <TareaContext.Provider
      value={{
        inputTarea,
        setInputTarea,
        tarea,
        setTarea,
        gruposTask,
        setGruposTask,
        isLoadingToHome,
        setisLoadingToHome,
      }}
    >
      {children}
    </TareaContext.Provider>
  );
};
