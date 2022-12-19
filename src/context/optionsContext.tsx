import { ReactNode, useState, createContext, useContext, Dispatch, SetStateAction } from "react"

interface SearchTypes {
  children: ReactNode
}

export interface StateProps {
  tempoEstude: number
  setTempoEstude: (minutos: number) => void

  tempoRelaxe: number
  setTempoRelaxe: (minutos: number) => void

  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
}


export const OptionsContext = createContext({} as StateProps)



export const useOptions = () => useContext(OptionsContext);

const getActive = () => {
  let active = localStorage.getItem("active");

  if (active) {
    return JSON.parse(active);
  }
  return 0;
};

export const OptionsProvider = ({ children }: SearchTypes) => {
  const [tempoEstude, setTempoEstude] = useState<number>(25)
  const [tempoRelaxe, setTempoRelaxe] = useState<number>(10)
  const [activeIndex, setActiveIndex] = useState(getActive() || 0)



  return (
    <OptionsContext.Provider value={{ tempoEstude, setTempoEstude, tempoRelaxe, setTempoRelaxe, activeIndex, setActiveIndex }}>{children}</OptionsContext.Provider>
  )
}