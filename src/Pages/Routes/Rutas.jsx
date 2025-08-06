import { Route, Routes, Navigate } from "react-router";
import { Day, Week, Month, CreateTask } from "../CreateTask/index.js";
import { Portada } from "../PortadaWeb/Portada.jsx";

export const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/create" element={<CreateTask />}>
          {/* Ruta por defecto */}
          <Route index element={<Navigate to="day" replace />} />

          {/* Rutas hijas */}
          <Route path="day" element={<Day />} />
          <Route path="week" element={<Week />} />
          <Route path="month" element={<Month />} />
        </Route>


        <Route path="/*" element={<Portada />}></Route>
      </Routes>
    </>
  );
};
