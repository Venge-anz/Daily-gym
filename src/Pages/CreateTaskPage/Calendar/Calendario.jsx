import { Day, Week, Month } from "../index";

export const Calendario = ({ type }) => {
  return (
    <>
      {type === "day" && <Day></Day>}
      {type === "week" && <Week></Week>}
      {type === "month" && <Month></Month>}
    </>
  );
};
