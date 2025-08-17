import { Route, Routes, Navigate } from "react-router";
import { Day, Week, Month, Home } from "./Pages/CreateTaskPage/index.js";
import { Portada } from "./Pages/PortadaPage/Portada.jsx";
import { HelpPage } from "./Pages/HelpPage/HelpPage.jsx";
import { Notes } from "./Pages/NotesPage/Notes.jsx";
import { Settings } from "./Pages/SettingsPage/Settings.jsx";
import { Invite } from "./Pages/InvitePage/Invite.jsx";
import { CalendarTypeSelector } from "./Pages/CreateTaskPage/Calendar/CalendarTypeSelector.jsx";
import { Login } from "./Pages/RegisterLogin/Login.jsx";
import { Register } from "./Pages/RegisterLogin/Register.jsx";
import { CreateNote } from "./Pages/NotesPage/CreateNote.jsx";

export const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/create" element={<CalendarTypeSelector />}></Route>

        <Route path="/notes" element={<Notes />}></Route>
        <Route path="/createNote" element={<CreateNote />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/setting" element={<Settings></Settings>}></Route>
        <Route path="/invite" element={<Invite></Invite>}></Route>
        <Route path="/help" element={<HelpPage></HelpPage>}></Route>

        <Route path="/*" element={<Portada />}></Route>
      </Routes>
    </>
  );
};
