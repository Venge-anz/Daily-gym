import { NavLinksCreate } from "../Routes/CreateTask/NavLinksCreate";
import { InputTask } from "../../components/InputTask";

export const CreateTask = () => {
  return (
    <>
      <NavLinksCreate></NavLinksCreate>

      <div className="flex flex-col justify-start items-center w-full md:w-[35rem] dark:bg-gray-700 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/6">
        <InputTask />
      </div>
    </>
  );
};
