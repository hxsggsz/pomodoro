import * as style from ".";
import { motion } from "framer-motion";
import { useOptions } from "../../../context/optionsContext";
import { useTranslation } from 'react-i18next';

export function NavBar() {
  const { t } = useTranslation()
  const { activeIndex, setActiveIndex } = useOptions();

  const data = [t("Timer"), t("Todo")];

  return (
    <style.Navbar>
      <style.List>
        {data.map((label, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.li key={index}>
              <button onClick={() => setActiveIndex(index)}>
              <style.Text>
                {isActive && <style.Background layoutId="horizontal" />}
                <span>{label}</span>
              </style.Text>
              </button>
            </motion.li>
          );
        })}
      </style.List>
    </style.Navbar>
  );
}
