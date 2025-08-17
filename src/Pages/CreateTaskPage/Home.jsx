import { useContext } from "react";
import { TareaContext } from "../../context/tareaContext";
import { useNavigate } from "react-router";
import { Button } from "../../components/Botones/Button";

export const Home = () => {
  const { gruposTask } = useContext(TareaContext);
  // const { day } = useContext(DateContext);

  const navigate = useNavigate();

  const mostrarCalendario = () => {
    navigate("/create");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full md:w-[70rem] md:h-[40rem] transparent rounded-lg ring shadow-xl ring-gray-900/6 p-6">
        {gruposTask.length <= 0 ? (
          <p className="text-gray-400 dark:bg-gray-700 rounded-lg px-8 py-6 ring shadow-xl ring-gray-900/6">
            No hay tasks guardadas
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
            {gruposTask.map((grupo, id) => (
              <div
                key={id}
                className="flex flex-col justify-center dark:bg-gray-700 rounded-lg px-8 py-6 ring shadow-xl ring-gray-900/6"
              >
                {/* <h1 className="text-center text-gray-300 border rounded mb-3">
                  {grupo.day}
                </h1> */}
                <ol className="list-disc list-inside text-gray-300 space-y-1">
                  {grupo.taskSaved.map((task, i) => (
                    <li key={i} className="text-gray-300">
                      {task}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6">
          <Button
            fn={() => {
              mostrarCalendario();
            }}
            nombre={"New workout"}
          />
        </div>
      </div>
    </>
  );
};
