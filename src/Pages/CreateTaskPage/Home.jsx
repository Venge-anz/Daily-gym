import { useContext } from "react";
import { TareaContext } from "../../context/tareaContext";
import { useNavigate } from "react-router";
import { Button } from "../../components/Botones/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { deleteTarea } from "./components/InputTask";

export const Home = () => {
  const { gruposTask, setGruposTask } = useContext(TareaContext);

  const navigate = useNavigate();

  const mostrarCalendario = () => {
    navigate("/create");
  };

  return (
    <div className="flex flex-col justify-center items-center w-full md:w-[70rem] md:h-[40rem] rounded-2xl shadow-lg ring-1 ring-gray-800/40 bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {gruposTask.length <= 0 ? (
        <div className="flex flex-col items-center justify-center text-center text-gray-400 bg-gray-700/40 rounded-xl px-10 py-12 shadow-inner">
          <p className="text-lg font-medium">There are no saved workouts</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {gruposTask.map((grupo, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-gray-800 rounded-xl px-6 py-6 shadow-md hover:shadow-xl transition-all duration-200 border border-gray-700"
            >
              {/* Fecha */}
              <h1 className="text-center text-lg font-semibold text-gray-100 border-b border-gray-600 pb-2 mb-4">
                {grupo.day}
              </h1>

              {/* Lista de tareas */}
              <ol className="list-disc list-inside text-gray-300 space-y-2 flex-1">
                {grupo.tarea.map((task, i) => (
                  <li key={i} className="text-gray-300 leading-relaxed">
                    {task}
                  </li>
                ))}
              </ol>

              {/* Botón eliminar */}
              <div className="flex justify-end mt-6">
                <DeleteOutlineIcon
                  className="text-red-500 hover:text-red-400 bg-gray-700 hover:bg-gray-600 rounded-full p-1 w-8 h-8 cursor-pointer transition-colors"
                  onClick={() => setGruposTask(deleteTarea(gruposTask, index))}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8">
        <Button
          fn={mostrarCalendario}
          nombre={"➕ New workout"}
          className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-3 rounded-xl shadow-md transition-all duration-200"
        />
      </div>
    </div>
  );
};
