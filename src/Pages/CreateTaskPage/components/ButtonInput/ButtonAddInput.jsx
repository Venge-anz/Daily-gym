import { useContext } from "react";
import { TareaContext } from "../../../../context/tareaContext";
import { DateContext } from "../../../../context/DateContext";

export const ButtonAddInput = () => {
  const { inputTarea, setInputTarea, setTarea, tarea } =
    useContext(TareaContext);

  const { value, setAddWithoutDate, addWithoutDate } = useContext(DateContext);

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

      //Condicion enviar tarea sin fecha
    }
    if (value) {
      setAddWithoutDate(true);
      console.log(addWithoutDate);
    } else {
      setAddWithoutDate(false);
      console.log(addWithoutDate);
    }
  };

  return (
    <div>
      <button
        onClick={addTarea}
        type="submit"
        className="bg-[#477984] text-white px-4 cursor-pointer py-2 rounded-r-md transition-all duration-200 border-2 border-transparent hover:border-pink-400"
      >
        Add
      </button>
    </div>
  );
};
