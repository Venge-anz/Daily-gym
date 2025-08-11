import { Route, Routes, Navigate } from "react-router";
import { Day, Week, Month, CreateTask } from "../CreateTaskPage/index.js";
import { Portada } from "../PortadaPage/Portada.jsx";
import { HelpPage } from "../HelpPage/HelpPage.jsx";
import { Notes } from "../NotesPage/Notes.jsx";

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

        <Route path="/help" element={<HelpPage></HelpPage>}></Route>
        <Route path="/notes" element={<Notes></Notes>}></Route>

        <Route path="/*" element={<Portada />}></Route>
      </Routes>
    </>
  );
};
