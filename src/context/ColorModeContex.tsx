import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface IColorsState {
  allColorsTheme: string
  setAllColorsTheme: Dispatch<SetStateAction<string>>
}

export const ColorModeContext = createContext({} as IColorsState);


export const useColors = () => useContext(ColorModeContext);