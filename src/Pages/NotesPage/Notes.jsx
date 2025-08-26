import { useContext, useState } from "react";
import { TareaContext } from "../../context/tareaContext";
import { useNavigate } from "react-router";
import { Button } from "../../components/Botones/Button";
import { NoteContext } from "../../context/NoteContext";

export const Notes = () => {
  const { groupNotes } = useContext(NoteContext);

  const navigate = useNavigate();
  const mostrarCrearNota = () => {
    navigate("/createNote");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full md:w-[70rem] md:h-[40rem] transparent rounded-lg ring shadow-xl ring-gray-900/6 p-6">
        {groupNotes.length <= 0 ? (
          <p className="text-gray-400 dark:bg-gray-700 rounded-lg px-8 py-6 ring shadow-xl ring-gray-900/6">
            No hay notas guardadas
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
            {groupNotes.map((grupo, id) => (
              <div
                key={id}
                className="flex flex-col justify-center dark:bg-gray-700 rounded-lg px-8 py-6 ring shadow-xl ring-gray-900/6"
              >
                <h1 className="text-center text-gray-300 border rounded mb-3">
                  {grupo.titulo}
                </h1>

                {grupo.nota}
              </div>
            ))}
          </div>
        )}
        <div className="mt-6">
          <Button
            fn={() => {
              mostrarCrearNota();
            }}
            nombre={"Añadir nota"}
          />
        </div>
      </div>
    </>
  );
};
