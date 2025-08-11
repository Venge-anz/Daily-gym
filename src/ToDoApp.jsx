import { Navbar } from "./components/Navbar";
import { Rutas } from "./Pages/Routes/Rutas";

function ToDoApp() {
  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-cover gap-6 p-5"
      style={{
        backgroundImage: `url("public/pink-yellow-split-background.jpg")`,
      }}
    >
      <Navbar />
      <Rutas />
    </div>
  );
}

export default ToDoApp;
