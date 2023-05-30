import { Dispatch, SetStateAction } from "react";
import * as style from ".";
import { motion } from "framer-motion";
import { useOptions } from "../../context/optionsContext";

export const TimerNav = () => {
  const { activeTimer, setActiveTimer } = useOptions()
  const data = ["Pomodoro", "Break", "Theme"]
  
  return (
    <style.TimerNav>
      <style.TimerList>
        {data.map((option, index) => (
          <motion.li
            key={index}
            onClick={() => setActiveTimer(index)}
          >
            <style.TimerOption>
              {index === activeTimer ? (
                <style.TimerEffect layoutId="qweqwewqeqwqwe" />
              ) : null}

              <span>{option}</span>
            </style.TimerOption>
          </motion.li>
        ))}
      </style.TimerList>
    </style.TimerNav>
  );
};
