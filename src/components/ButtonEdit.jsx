import { useContext } from "react";
import { TareaContext } from "../context/tareaContext";

export const ButtonEdit = () => {
  const {
    inputTarea,
    tarea,
    setTarea,
    setInputTarea,
    setModoEdicion,
    modoEdicion,
    setEditIndex,
    editIndex,
  } = useContext(TareaContext);

  //Editar tarea boton

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

  //Editar tarea icono

  return (
    <div>
      <button
        type="submit"
        onClick={editButton}
        className="bg-[#477984] text-white px-4 cursor-pointer py-2 rounded-r-md transition-all duration-200 border-2 border-transparent hover:border-pink-400"
      >
        Edit
      </button>
    </div>
  );
};
