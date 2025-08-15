import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router";

import { useContext } from "react";
import { TareaContext } from "../context/tareaContext";

export const Navbar = () => {
  const { isLoadingToNotes } = useContext(TareaContext);

  return (
    <>
      <nav className="fixed top-10 left-6 w-28 h-[43rem] text-slate-300 dark:bg-gray-700 shadow-md rounded-xl px-4 py-6">
        <div className="flex flex-col  items-center h-full">
          <div className="mb-6 self-center border-1 p-2">
            <Link to="/portada">
              <h1 className="text-lg font-semibold text-left">
                JUST
                <br />
                DO
                <br />
                IT.
              </h1>
            </Link>
          </div>

          <ul className="flex flex-col gap-3 text-sm text-slate-300 w-full text-center">
            <li className="flex flex-col items-center gap-2 hover:text-yellow-200">
              <FitnessCenterIcon
                className={
                  isLoadingToNotes === true
                    ? "animate__animated animate__shakeX --animate-duration: 0.1s;"
                    : ""
                }
                fontSize="small"
              ></FitnessCenterIcon>
              <Link to="/home">Home</Link>
            </li>

            <li className="flex flex-col items-center gap-2 hover:text-yellow-200">
              <TextSnippetIcon fontSize="small"></TextSnippetIcon>
              <Link to="/notes">Notes</Link>
            </li>
          </ul>

          {/* //Parte de abajo */}

          <ul className="flex flex-col text-sm gap-3 text-slate-300 w-full mt-auto text-center">
            <li className="flex flex-col items-center gap-2 hover:text-yellow-200">
              <LoginIcon fontSize="small"></LoginIcon>
              <Link to="/login">Login</Link>
            </li>
            <li className="flex flex-col items-center gap-2 hover:text-yellow-200">
              <SettingsIcon fontSize="small"></SettingsIcon>
              <Link to="/setting">Setting</Link>
            </li>
            <li className="flex flex-col items-center gap-2 hover:text-yellow-200">
              <GroupIcon fontSize="small"></GroupIcon>
              <Link to="/invite">Invite</Link>
            </li>
            <li className="flex flex-col items-center gap-2 hover:text-yellow-200">
              <HelpOutlineIcon fontSize="small"></HelpOutlineIcon>
              <Link to="/help">Help</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
