import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { ButtonAdd } from "./ButtonAdd";
import { ButtonEdit } from "./ButtonEdit";

export const InputTask = () => {
  const [inputTarea, setInputTarea] = useState("");
  const [tarea, setTarea] = useState([]);

  //El input
  const inputFunction = (e) => {
    setInputTarea(e.target.value);
  };

  //La funcion del boton añadir
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
    }
  };

  //boton de borrar

  const deleteTarea = (index) => {
    const nuevasTareas = tarea.filter((_, i) => i !== index);
    setTarea(nuevasTareas);
  };

  //Editar tarea

  const editTarea = (index) => {
    const tareaEditada = tarea.filter((_, i) => i === index);
    setInputTarea(tareaEditada);
  };

  console.log(tarea);
  console.log(inputTarea);

  return (
    <>
      <form onSubmit={addTarea} className="flex mt-10 mb-6 w-full max-w-md ">
        <input
          type="text"
          placeholder="Add an exercise..."
          onChange={inputFunction}
          value={inputTarea}
          className="flex-grow bg-white text-gray-800 px-4 py-2 rounded-l-md outline-none focus:ring-2 focus:ring-[#477984]"
        />
        {!inputTarea ? <ButtonAdd></ButtonAdd> : <ButtonEdit></ButtonEdit>}
      </form>

      <div className="flex justify-center mt-2 mb-3 text-center text-amber-50 ">
        <p className="text-white text-center font-semibold px-4 py-2 rounded-lg shadow-md/30 text-lg ">
          TRAINING
        </p>
      </div>

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

            {<EditNoteIcon onClick={() => editTarea(index)} />}
          </div>
        </label>
      ))}
    </>
  );
};
