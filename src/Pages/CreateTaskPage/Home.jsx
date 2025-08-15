import { useContext, useState } from "react";
import { TareaContext } from "../../context/tareaContext";
import { useNavigate } from "react-router";
import { BotonAñadir } from "../../components/Botones/BotonAñadir";
import { DateContext } from "../../context/DateContext";

export const Home = () => {
  const { taskSaved } = useContext(TareaContext);
  const { day } = useContext(DateContext);

  //Estado para almacenar los task por fecha
  const [gruposTask, setGruposTask] = useState("Hola");

  const navigate = useNavigate();

  const mostrarCalendario = () => {
    navigate("/create");
  };

  console.log(taskSaved);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full md:w-[70rem] md:h-[40rem] transparent rounded-lg ring shadow-xl ring-gray-900/6">
        <div className="flex flex-col justify-start w-full md:w-[20rem] dark:bg-gray-700 rounded-lg px-8 py-6 ring shadow-xl ring-gray-900/6">
          {taskSaved.length <= 0 ? (
            "No hay tasks guardadas"
          ) : (
            <>
              <h1 className="text-center text-gray-300 border rounded mb-3">
                {day}
              </h1>
              <ol className="list-disc list-inside text-gray-300 space-y-1">
                {taskSaved?.map((task, i) => (
                  <li key={i} className="text-gray-300 ">
                    {task}
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>
        <BotonAñadir
          fn={() => mostrarCalendario()}
          nombre={"New workout"}
        ></BotonAñadir>
      </div>
    </>
  );
};
