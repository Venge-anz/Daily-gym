import { useContext } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { ButtonAdd } from "./ButtonAdd";
import { ButtonEdit } from "./ButtonEdit";
import { TareaContext } from "../context/tareaContext";
import { DateContext } from "../context/DateContext";
import { ButtonSave } from "./ButtonSave";

export const InputTask = () => {
  //Sacamos lo necesario del Provider
  const {
    inputTarea,
    tarea,
    setTarea,
    setInputTarea,
    setModoEdicion,
    modoEdicion,
    setEditIndex,
    isLoadingToNotes,
  } = useContext(TareaContext);

  const { addWithoutDate, day } = useContext(DateContext);

  //El input //REPASAR ESTA FUNCION
  const inputFunction = (e) => {
    setInputTarea(e.target.value);
  };

  //icono de borrar

  const deleteTarea = (index) => {
    const nuevasTareas = tarea.filter((_, i) => i !== index);
    setTarea(nuevasTareas);
  };

  //icono de editar

  const editIcon = (index) => {
    setInputTarea(tarea[index]); // Carga el texto al input
    setModoEdicion(true); // Activa modo edición
    setEditIndex(index); // Guarda qué tarea estás editando
  };

  //Logica para mostrar la fecha debajo del input

  // ...

  return (
    <>
      {addWithoutDate === false ? (
        <div
          className="flex flex-col justify-center items-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-md"
          role="alert"
        >
          <strong className="font-bold">ERROR </strong>
          <img src="/select.gif" alt="SelectImage"></img>
          <span className="block sm:inline">
            You must select a valid date before continuing.
          </span>
        </div>
      ) : (
        <>
          <form onSubmit={onsubmit} className="flex w-full">
            <input
              type="text"
              placeholder="Add an exercise..."
              onChange={inputFunction}
              value={inputTarea}
              className="flex-grow bg-white text-gray-800 px-4 py-2 rounded-l-md outline-none focus:ring-2 focus:ring-[#477984]"
            />

            {modoEdicion === false ? <ButtonAdd /> : <ButtonEdit />}
          </form>

          {/* Anidamos las 3 condiciones en un ternario  */}

          <div className="flex justify-center mb-3 text-center text-amber-50">
            {isLoadingToNotes === true ? (
              <div className="text-gray-500 mt-30 text-center font-semibold rounded-lg shadow-md/30 p-5 w-40">
                <img src="/hecho.gif" alt="imgDone" />
                <p className="border">WELL DONE!</p>
              </div>
            ) : tarea.length <= 0 ? (
              <div className="text-gray-500 mt-30 text-center font-semibold rounded-lg shadow-md/30 p-5 w-40">
                <img src="/muscle.gif" alt="training" />
                <p className="border">NO RESULTS</p>
              </div>
            ) : (
              <div className="flex items-end w-140 px-4 py-2">
                <div className="flex-1 flex justify-center items-center">
                  <p className="text-white mt-5 text-center font-semibold px-4 py-2 rounded-lg shadow-md/30 text-lg">
                    TRAINING
                  </p>
                  <p>{day}</p>
                </div>
              </div>
            )}
          </div>

          {/* //Input */}
          {tarea.map((input, index) => (
            <label
              key={index}
              className="flex items-center justify-between space-x-2 w-full"
            >
              <div className="flex justify-center space-x-2">
                <input type="checkbox" className="w-5" />
                <span className="text-gray-300 ">{input}</span>
              </div>

              <div className="text-gray-400 cursor-pointer">
                <DeleteOutlineIcon onClick={() => deleteTarea(index)} />

                {<EditNoteIcon onClick={() => editIcon(index)} />}
              </div>
            </label>
          ))}
        </>
      )}
      <ButtonSave></ButtonSave>
    </>
  );
};
