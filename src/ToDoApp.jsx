import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Rutas } from "./Rutas";

function ToDoApp() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gray-900 gap-10 ">
      <Navbar />
      <Rutas />
    </div>
  );
}

export default ToDoApp;
