import * as style from ".";
import { motion } from "framer-motion";
import { useOptions } from "../../context/optionsContext";
import { useTranslation } from 'react-i18next';
import { KeyboardEvent } from "react";

export const TimerNav = () => {
  const { t } = useTranslation()
  const { activeTimer, setActiveTimer } = useOptions();

  const data = ["Pomodoro", t("break"), t("options")];

  return (
    <motion.ul>
      {data.map((option, index) => (
        <motion.li key={index}>
          <button onClick={() => setActiveTimer(index)}>
          <style.TimerOption>
            {index === activeTimer && (
              <style.TimerEffect layoutId="active-index" />
              )}

            <style.Text>{option}</style.Text>
          </style.TimerOption>
              </button>
        </motion.li>
      ))}
    </motion.ul>
  );
};
