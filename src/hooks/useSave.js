//Estado para guardar las tareas

import { useContext, useState } from "react";
import { TareaContext } from "../context/tareaContext";
import { DateContext } from "../context/DateContext";

export const useSave = () => {
  const {
    taskSaved,
    setTaskSaved,
    tarea,
    setTarea,
    setGruposTask,
    isLoadingToNotes,
    setisLoadingToNotes,
  } = useContext(TareaContext);

  const { day } = useContext(DateContext);

  //Funcion para guardar los grupos de tareas

  const saveGroupTask = () => {
    setGruposTask((prev) => [...prev, { day, taskSaved }]);
  };

  //FUNCION GUARDAR

  const saveTasks = () => {
    setTaskSaved(tarea);
    setisLoadingToNotes(true);
    setTarea([]);
    saveGroupTask();

    setTimeout(() => {
      setisLoadingToNotes(false);
    }, 2000);
  };

  return { saveTasks };
};
