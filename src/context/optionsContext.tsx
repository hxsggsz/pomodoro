import { ReactNode, useState, createContext, useContext, Dispatch } from "react"

interface SearchTypes {
  children: ReactNode
}

export interface StateProps {
  tempo: number
  setTempo: (minutos: number) => void
}


export const OptionsContext = createContext({} as StateProps)

export const useOptions = () => useContext(OptionsContext);

export const OptionsProvider = ({ children }: SearchTypes) => {
  const [tempo, setTempo] = useState<number>(1)

  return (
    <OptionsContext.Provider value={{ tempo, setTempo }}>{children}</OptionsContext.Provider>
  )
}