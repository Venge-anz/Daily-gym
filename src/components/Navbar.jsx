import AddIcon from "@mui/icons-material/Add";
import NotesIcon from "@mui/icons-material/Notes";
import InboxIcon from "@mui/icons-material/Inbox";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import GroupIcon from "@mui/icons-material/Group";

export const Navbar = () => {
  return (
    <>
      <nav className="fixed top-10 left-6 w-32 h-[43rem] text-stone-300 dark:bg-gray-700 shadow-md rounded-xl px-4 py-6">
        <div className="flex flex-col  items-center h-full">
          <div className="mb-6 self-center border-1 p-2">
            <h1 className="text-lg font-semibold text-left">JUST</h1>
            <h1 className="text-lg font-semibold text-left">DO</h1>
            <h1 className="text-lg font-semibold text-left">IT.</h1>
          </div>

          <ul className="flex flex-col gap-3 text-sm text-slate-300 w-full text-center">
            <li className="flex flex-row items-center gap-2 hover:text-yellow-200">
              <AddIcon className="text-slate-500" fontSize="small"></AddIcon>
              <a href="#/*">Create</a>
            </li>

            <li className="flex flex-row items-center gap-2 hover:text-yellow-200">
              <NotesIcon
                className="text-slate-500"
                fontSize="small"
              ></NotesIcon>
              <a href="#/notes">Notes</a>
            </li>

            <li className="flex flex-row items-center gap-2 hover:text-yellow-200">
              <InboxIcon
                className="text-slate-500"
                fontSize="small"
              ></InboxIcon>
              <a href="#">Inbox</a>
            </li>
          </ul>

          {/* //Parte de abajo */}

          <ul className="flex flex-col text-sm gap-3 text-slate-300 w-full mt-auto text-center">
            <li className="flex flex-row items-center gap-2 hover:text-yellow-200">
              <GroupIcon
                className="text-slate-500"
                fontSize="small"
              ></GroupIcon>
              <a href="#">Invite</a>
            </li>
            <li className="flex flex-row items-center gap-2 hover:text-yellow-200">
              <HelpOutlineIcon
                className="text-slate-500"
                fontSize="small"
              ></HelpOutlineIcon>
              <a href="#">Help</a>
            </li>
            <li className="flex flex-row items-center gap-2 hover:text-yellow-200">
              <BrowserUpdatedIcon
                className="text-slate-500"
                fontSize="small"
              ></BrowserUpdatedIcon>
              <a href="#">Update</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
