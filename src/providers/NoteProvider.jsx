import { useState } from "react";
import { NoteContext } from "../context/NoteContext";

export const NoteProvider = ({ children }) => {
  //Titulo de la categoría
  const [categoriesTitle, setCategoriesTitle] = useState("Category");

  //Las notas y el grupo de notas
  const [inputNotas, setInputNotas] = useState("");
  const [groupNotes, setGroupNotes] = useState([]);

  //Estado para manejar el error
  const [addWithoutCategory, setAddWithoutCategory] = useState(true);

  // Estado del si el boton de guardar task a notas ha sido pulsado o no
  const [isLoadingToNotes, setisLoadingToNotes] = useState(false);

  return (
    <NoteContext.Provider
      value={{
        categoriesTitle,
        setCategoriesTitle,
        inputNotas,
        setInputNotas,
        groupNotes,
        setGroupNotes,
        isLoadingToNotes,
        setisLoadingToNotes,
        setAddWithoutCategory,
        addWithoutCategory,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
