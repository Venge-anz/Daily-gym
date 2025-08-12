import { useContext } from "react";
import { TareaContext } from "../../context/tareaContext";

export const Notes = () => {
  const { taskSaved, setTaskSaved, tarea } = useContext(TareaContext);

  console.log(taskSaved);

  return (
    <>
      <div className="flex flex-col justify-start items-center w-full md:w-[35rem] dark:bg-gray-700 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/6">
        {taskSaved.length === 0 && "No hay tasks guardadas"}
        {taskSaved?.map((task, i) => (
          <p key={i}>{task}</p>
        ))}
      </div>
    </>
  );
};
