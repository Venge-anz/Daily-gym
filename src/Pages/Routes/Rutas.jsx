import { Route, Routes } from "react-router";
import { Day, Week, Month } from "../index.js";

export const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/day" element={<Day />}></Route>
        <Route path="/week" element={<Week />}></Route>
        <Route path="/month" element={<Month />}></Route>
        <Route path="/" element={<Day />}></Route>
      </Routes>
    </>
  );
};
