import { useContext } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../components/Botones/Button";
import { NoteContext } from "../../context/NoteContext";
import { deleteTarea } from "../CreateTaskPage/components/InputTask";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const Notes = () => {
  const { groupNotes, setGroupNotes } = useContext(NoteContext);

  const navigate = useNavigate();
  const mostrarCrearNota = () => {
    navigate("/createNote");
  };

  return (
    <div className="flex flex-col justify-center items-center w-full md:w-[70rem] md:h-[40rem] rounded-2xl shadow-lg ring-1 ring-gray-800/40 bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {groupNotes.length <= 0 ? (
        <div className="flex flex-col items-center justify-center text-center text-gray-400 bg-gray-700/40 rounded-xl px-10 py-12 shadow-inner">
          <p className="text-lg font-medium">There are no saved notes</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {groupNotes.map((grupo, id) => (
            <div
              key={id}
              className="flex flex-col justify-between bg-gray-800 rounded-xl px-6 py-6 shadow-md hover:shadow-xl transition-all duration-200 border border-gray-700"
            >
              <h1 className="text-center text-lg font-semibold text-gray-100 border-b border-gray-600 pb-2 mb-4">
                {grupo.titulo}
              </h1>

              <p className="text-gray-300 whitespace-pre-line flex-1">
                {grupo.nota}
              </p>

              <div className="flex justify-end mt-6">
                <DeleteOutlineIcon
                  className="text-red-500 hover:text-red-400 bg-gray-700 hover:bg-gray-600 rounded-full p-1 w-8 h-8 cursor-pointer transition-colors"
                  onClick={() => setGroupNotes(deleteTarea(groupNotes, id))}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8">
        <Button
          fn={mostrarCrearNota}
          nombre={"➕ Add note"}
          className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-3 rounded-xl shadow-md transition-all duration-200"
        />
      </div>
    </div>
  );
};
