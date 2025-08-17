//Editar tarea boton

import { useContext } from "react";
import { TareaContext } from "../context/tareaContext";

//Hacemos un hook y metemos la funcion, despues la devolvemos

export const useEdit = (
  modoEdicion,
  setModoEdicion,
  editIndex,
  setEditIndex
) => {
  const { tarea, setTarea, inputTarea, setInputTarea } =
    useContext(TareaContext);

  const editButton = (e) => {
    e.preventDefault();
    if (modoEdicion && editIndex !== null) {
      //editar la tarea existent

      const tareasActualizadas = [...tarea];
      tareasActualizadas[editIndex] = inputTarea;
      setTarea(tareasActualizadas);
      setModoEdicion(false);
      setEditIndex(null);
    } else {
      // Añadir nueva tarea
      setTarea([...tarea, inputTarea]);
    }
    setInputTarea("");
  };

  return { editButton };
};
