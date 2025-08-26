import { useContext, useState } from "react";
import { Button } from "../../components/Botones/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import { NoteContext } from "../../context/NoteContext";

export const CreateNote = () => {
  const categoriesNotes = ["Technique", "Progress", "Records", "Reminders"];

  const {
    categoriesTitle,
    setCategoriesTitle,
    inputNotas,
    setInputNotas,
    groupNotes,
    setGroupNotes,
    setisLoadingToNotes,
    addWithoutCategory,
    setAddWithoutCategory,
  } = useContext(NoteContext);

  //Estado para añadir una categoria y que aparezca un input
  const [addCategoryBoolean, setAddCategoryBoolean] = useState(false);
  const [inputCategory, setinputCategory] = useState("");
  const [categories, setCategories] = useState(categoriesNotes);

  //Categorias titulo
  const categorySelected = (e) => {
    setCategoriesTitle(e.target.innerText);
    setAddWithoutCategory(true);
  };
  console.log(categoriesTitle);

  const onChangeInput = (e) => {
    setinputCategory(e.target.value);
  };
  //Añadir nueva categoria

  const addCategoryFn = (e) => {
    if (inputCategory.trim() === "") {
      e.preventDefault();
      return;
    } else {
      e.preventDefault();
      const inputMayuscula =
        inputCategory.charAt(0).toUpperCase() + inputCategory.slice(1);
      setCategories([...categories, inputMayuscula]);
      setAddCategoryBoolean(false);
    }
  };

  const deleteCategoria = (index) => {
    const nuevasCategorias = categories.filter((_, i) => i !== index);
    setCategories(nuevasCategorias);
  };

  //A PARTIR DE AQUI SON LAS NOTAS

  //FUNCIONES

  const handleInput = (e) => {
    setInputNotas(e.target.value);
  };

  //Para saber si hemos seleccionado una categoria
  const isCategorySelected = () => {
    if (categoriesTitle.includes("Category")) {
      setAddWithoutCategory(false);
    } else {
      setAddWithoutCategory(true);
    }
  };

  const saveNotes = (e) => {
    if (inputNotas.trim() === "") {
      e.preventDefault();
      return;
    } else {
      e.preventDefault();
      const inputMayuscula =
        inputNotas.charAt(0).toUpperCase() + inputNotas.slice(1);
      setGroupNotes((prev) => [
        ...prev,
        {
          titulo: categoriesTitle,
          nota: inputMayuscula,
        },
      ]);

      isCategorySelected();
      setInputNotas("");
      setisLoadingToNotes(true);
    }
  };

  console.log(addWithoutCategory);

  //Boton guardar

  return (
    <div className="flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl px-10 py-12 shadow-xl ring-gray-800/40 w-[60rem] min-h-[30rem]">
      {/* Título */}
      <h1 className="text-3xl font-bold text-left border-b border-amber-300 pb-3 text-stone-200 tracking-wide mb-20">
        NOTES
      </h1>

      <div className="flex flex-row gap-12 w-full">
        {/* Categorías */}
        <div className="flex flex-col gap-3 text-stone-200 w-1/3">
          <h2 className="text-lg font-semibold text-amber-200 mb-4 uppercase tracking-wide">
            Categories
          </h2>

          <ul className="flex flex-col gap-3">
            {categories.map((notes, index) => (
              <li
                key={index}
                className="flex justify-between items-center px-3 py-2 rounded-md hover:bg-gray-700/60 cursor-pointer transition-all"
                onClick={categorySelected}
              >
                <span className="hover:text-amber-300">{notes}</span>
                <DeleteOutlineIcon
                  onClick={() => deleteCategoria(index)}
                  className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                />
              </li>
            ))}

            {/* Agregar categoría */}
            {!addCategoryBoolean ? (
              <button
                onClick={() => setAddCategoryBoolean(true)}
                className="text-amber-300 italic text-sm hover:text-amber-500 cursor-pointer mt-2"
              >
                ➕ Add a new category
              </button>
            ) : (
              <div className="flex flex-row items-center gap-2 mt-2">
                <input
                  onChange={onChangeInput}
                  value={inputCategory}
                  className="bg-gray-600 text-white rounded px-2 py-1 focus:outline-none focus:ring focus:ring-amber-300"
                  placeholder="New category"
                />
                <CheckIcon
                  onClick={addCategoryFn}
                  className="cursor-pointer text-green-400 hover:text-green-300"
                />
                <ClearIcon
                  onClick={() => setAddCategoryBoolean(false)}
                  className="cursor-pointer text-red-400 hover:text-red-300"
                />
              </div>
            )}
          </ul>
        </div>

        {/* Condicional: obligatorio seleccionar categoria */}
        <div className="flex-1">
          {addWithoutCategory === false ? (
            <div
              className="flex flex-col justify-center items-center bg-red-100 border border-red-400 text-red-700 px-6 py-6 rounded-lg shadow-inner max-w-md mx-auto"
              role="alert"
            >
              <strong className="font-bold mb-2">⚠ ERROR</strong>
              <img src="/select.gif" alt="Select category" className="w-40" />
              <span>You must select a category before continuing.</span>
            </div>
          ) : (
            <div className="flex flex-col gap-4 text-stone-200 items-center bg-gray-800/50 rounded-xl p-6 shadow-lg">
              <label
                htmlFor="categories"
                className="text-lg font-semibold text-amber-200 uppercase tracking-wide"
              >
                {categoriesTitle || "Category"}
              </label>

              <textarea
                onChange={handleInput}
                value={inputNotas}
                id="notes"
                name="notes"
                rows="10"
                cols="33"
                className="bg-amber-100 text-gray-900 resize-none w-full h-40 p-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-amber-300"
                placeholder="Write your notes here..."
              />

              <Button fn={saveNotes} nombre="Save" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
