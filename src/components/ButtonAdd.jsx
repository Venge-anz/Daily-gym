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

export const ButtonAdd = () => {
  return (
    <div>
      {" "}
      <button
        type="submit"
        className="bg-[#477984] text-white px-4 cursor-pointer py-2 rounded-r-md transition-all duration-200 border-2 border-transparent hover:border-pink-400"
      >
        Add
      </button>
    </div>
  );
};
