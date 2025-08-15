import { Route, Routes, Navigate } from "react-router";
import { Day, Week, Month, Home } from "./Pages/CreateTaskPage/index.js";
import { Portada } from "./Pages/PortadaPage/Portada.jsx";
import { HelpPage } from "./Pages/HelpPage/HelpPage.jsx";
import { Notes } from "./Pages/NotesPage/Notes.jsx";
import { Register } from "./Pages/Register/Register.jsx";
import { Settings } from "./Pages/SettingsPage/Settings.jsx";
import { Invite } from "./Pages/InvitePage/Invite.jsx";
import { CalendarTypeSelector } from "./Pages/CreateTaskPage/Calendar/CalendarTypeSelector.jsx";

export const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/create" element={<CalendarTypeSelector />}></Route>

        <Route path="/notes" element={<Notes />}></Route>

        <Route path="/profile" element={<Register></Register>}></Route>
        <Route path="/setting" element={<Settings></Settings>}></Route>
        <Route path="/invite" element={<Invite></Invite>}></Route>
        <Route path="/help" element={<HelpPage></HelpPage>}></Route>

        <Route path="/*" element={<Portada />}></Route>
      </Routes>
    </>
  );
};
