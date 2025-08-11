import { useContext, useState, useEffect } from "react";
import { DateContext } from "../context/DateContext";
import { TareaContext } from "../context/tareaContext";

export const ButtonSave = () => {
  //Estado para guardar las tareas
  const {
    taskSaved,
    setTaskSaved,
    tarea,
    setTarea,
    isLoadingToNotes,
    setisLoadingToNotes,
  } = useContext(TareaContext);
  const { addWithoutDate } = useContext(DateContext);

  //Funcion button guardar

  const saveTasks = () => {
    setTaskSaved(tarea);
    setisLoadingToNotes(true);

    setTimeout(() => {
      setisLoadingToNotes(false);
    }, 2000);
  };

  console.log(taskSaved);

  return (
    <>
      {addWithoutDate && tarea.length > 0 && (
        <button
          onClick={saveTasks}
          className="mt-4 bg-amber-400 text-gray-900 font-semibold rounded-full px-6 py-3 transition-all
              hover:bg-amber-300 hover:scale-95 hover:shadow-lg
              active:scale-90 active:shadow-inner cursor-pointer"
        >
          GUARDAR
        </button>
      )}
    </>
  );
};
