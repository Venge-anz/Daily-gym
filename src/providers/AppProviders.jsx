import { DateProvider } from "./DateProvider";
import { TareaProvider } from "./TareaProvider";

export const AppProviders = ({ children }) => {
  return (
    <DateProvider>
      <TareaProvider>{children}</TareaProvider>
    </DateProvider>
  );
};
