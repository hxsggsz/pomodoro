import * as style from ".";
import { motion } from "framer-motion";
import { useOptions } from "../../context/optionsContext";

export const TimerNav = () => {
  const data = ["Pomodoro", "Break", "Theme"];
  const { activeTimer, setActiveTimer } = useOptions();

  return (
    <motion.ul>
      {data.map((option, index) => (
        <motion.li key={index} onClick={() => setActiveTimer(index)}>
          <style.TimerOption>
            {index === activeTimer && (
              <style.TimerEffect layoutId="active-index" />
            )}

            <style.Text>{option}</style.Text>
          </style.TimerOption>
        </motion.li>
      ))}
    </motion.ul>
  );
};
