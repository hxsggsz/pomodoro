import * as style from ".";
import { motion } from "framer-motion";
import { useOptions } from "../../context/optionsContext";
import { useTranslation } from 'react-i18next';

export const TimerNav = () => {
  const { t } = useTranslation()
  const { activeTimer, setActiveTimer } = useOptions();

  const data = ["Pomodoro", t("break"), t("options")];

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
