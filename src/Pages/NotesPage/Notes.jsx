import { useState } from "react";
import { Button } from "../../components/Botones/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";

export const Notes = () => {
  const categoriesNotes = ["Technique", "Progress", "Records", "Reminders"];

  const [categoriesTitle, setCategoriesTitle] = useState("Category");

  //Estado para añadir una categoria y que aparezca un input
  const [addCategoryBoolean, setAddCategoryBoolean] = useState(false);
  const [inputCategory, setinputCategory] = useState("");
  const [categories, setCategories] = useState(categoriesNotes);

  //Categorias titulo
  const categorySelected = (e) => {
    setCategoriesTitle(e.target.innerText);
  };

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

  console.log(categories);

  return (
    <div className="flex flex-col justify-between dark:bg-gray-700 rounded-lg px-10 p-20 ring shadow-xl ring-gray-900/6 w-200 h-120">
      <h1 className="text-2xl font-bold text-left border-b border-amber-200 pb-2 text-stone-300 mb-6 w-full">
        NOTES
      </h1>

      <div className="flex flex-row gap-12 justify-between w-full  h-300">
        {/* Categorías */}
        <div className="flex flex-col gap-2 text-stone-200 ">
          <h2 className="text-lg font-semibold text-amber-100 mb-6">
            Categories:
          </h2>
          <ul className="flex flex-col gap-3">
            {categories.map((notes, i) => (
              <>
                <li
                  key={i}
                  className="flex justify-between gap-30 px-2 py-1 hover:text-amber-300 hover:border-b cursor-pointer"
                  onClick={categorySelected}
                >
                  {notes}
                  <DeleteOutlineIcon
                    onClick={() => deleteCategoria(i)}
                    className="text-gray-500"
                  />
                </li>
              </>
            ))}
            {!addCategoryBoolean ? (
              <button
                onClick={() => setAddCategoryBoolean(true)}
                className="text-amber-300 italic  w-full hover:text-amber-600 cursor-pointer"
              >
                Add a new category
              </button>
            ) : (
              <div className="flex flex-row justify-between">
                <input
                  onChange={onChangeInput}
                  value={inputCategory}
                  className="bg-gray-400"
                ></input>
                <CheckIcon
                  onClick={addCategoryFn}
                  className="cursor-pointer"
                ></CheckIcon>
                <ClearIcon
                  onClick={() => setAddCategoryBoolean(false)}
                  className="cursor-pointer"
                ></ClearIcon>
              </div>
            )}
          </ul>
        </div>

        {/* Input */}
        <div className="flex flex-col gap-2 text-stone-200  items-center">
          <label
            htmlFor="categories"
            className="text-lg font-semibold text-white-100 border p-2 uppercase"
          >
            {categoriesTitle || "Category"}
          </label>

          <textarea
            id="notes"
            name="notes"
            rows="10"
            cols="33"
            className="bg-amber-100 text-black resize-none w-100 h-40 m-4 p-2 rounded"
          ></textarea>
          <Button nombre="Save" className="w-30"></Button>
        </div>
      </div>
    </div>
  );
};
