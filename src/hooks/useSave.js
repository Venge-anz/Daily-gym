//Estado para guardar las tareas

import { useContext } from "react";
import { TareaContext } from "../context/tareaContext";
import { DateContext } from "../context/DateContext";

export const useSave = () => {
  const { tarea, setTarea, setGruposTask, setisLoadingToHome } =
    useContext(TareaContext);

  const { day } = useContext(DateContext);

  //FUNCION GUARDAR

  const saveTasks = () => {
    setGruposTask((prev) => [...prev, { day, tarea }]);
    setisLoadingToHome(true);

    setTimeout(() => {
      setisLoadingToHome(false);
    }, 2000);

    setTarea([]);
  };

  return { saveTasks };
};
