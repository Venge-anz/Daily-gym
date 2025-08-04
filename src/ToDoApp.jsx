import { InputTask } from "./components/InputTask";
import { Navbar } from "./components/Navbar";
import { NavLinks } from "./Pages/Routes/NavLinks";

function ToDoApp() {
  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-cover gap-6 p-4"
      style={{ backgroundImage: `url("/Fondo.jpg")` }}
    >
      <Navbar />
      <NavLinks></NavLinks>

      <div className="flex flex-col justify-start items-center w-full md:w-[35rem] dark:bg-gray-700 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/6">
        <InputTask />
      </div>
    </div>
  );
}

export default ToDoApp;
