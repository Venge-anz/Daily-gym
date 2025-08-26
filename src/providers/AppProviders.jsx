import { DateProvider } from "./DateProvider";
import { TareaProvider } from "./TareaProvider";
import { NoteProvider } from "./NoteProvider";

export const AppProviders = ({ children }) => {
  return (
    <DateProvider>
      <TareaProvider>
        <NoteProvider>{children}</NoteProvider>
      </TareaProvider>
    </DateProvider>
  );
};
