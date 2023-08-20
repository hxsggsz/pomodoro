import {
  ReactNode,
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface SearchTypes {
  children: ReactNode
}

export interface StateProps {
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>

  activeTimer: number
  setActiveTimer: Dispatch<SetStateAction<number>>
}

export const OptionsContext = createContext({} as StateProps)

export const useOptions = () => useContext(OptionsContext)

export const OptionsProvider = ({ children }: SearchTypes) => {
  const [timerStorage, setTimerStorage] = useLocalStorage('timer-nav', {timer: 0, index: 0})
  const [activeTimer, setActiveTimer] = useState(timerStorage.timer)
  const [activeIndex, setActiveIndex] = useState(timerStorage.index)

  useEffect(() => {
    setTimerStorage({timer: activeTimer, index: activeIndex})
  }, [activeTimer, activeIndex])
  
  return (
    <OptionsContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        activeTimer,
        setActiveTimer
      }}
    >
      {children}
    </OptionsContext.Provider>
  )
}
