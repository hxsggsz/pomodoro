import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { ThemeProvider } from "styled-components";
import * as themes from "../styles/themes/themes";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface IColorsState {
  handleTheme: (color: string) => void;
}

export const ColorModeContext = createContext({} as IColorsState);

export const useColors = () => useContext(ColorModeContext);

export const ThemesProvider = ({ children }: { children: ReactNode }) => {
  const [themeStorage, setThemeStorage] = useLocalStorage("theme", "grey");
  const [colors, setColors] = useState(themeStorage);

  const handleTheme = (color: string) => {
    setColors(color);
    setThemeStorage(color);
  };

  const setCurrentTheme = useMemo(() => {
    switch (colors) {
      case "grey":
        return themes.GreyTheme;
        break;
      case "red":
        return themes.RedTheme;
        break;
      case "purple":
        return themes.RoseTheme;
        break;
      case "black":
        return themes.BlackTheme;
        break;

      default:
        return themes.GreyTheme;
        break;
    }
  }, [colors]);

  return (
    <ColorModeContext.Provider value={{ handleTheme }}>
      <ThemeProvider theme={setCurrentTheme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
