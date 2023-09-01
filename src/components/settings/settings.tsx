import * as style from ".";
import { useTranslation } from "react-i18next";
import { Select } from "../select/select";

export const Settings = ({
  handleTheme,
}: {
  handleTheme: (color: string) => void;
}) => {
  const { t, i18n } = useTranslation();

  const options = [
    { option: t("pt"), value: "pt-BR" },
    { option: t("en"), value: "en-US" },
  ];

  const handleLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <style.Form>
      <h2>{t("change-theme")}</h2>

      <style.Options>
        <li>
          <style.OptionOne
            data-testid="button-theme"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9, y: [0, -4, 4, 0] }}
            onClick={() => handleTheme("red")}
          />
        </li>

        <li>
          <style.OptionTwo
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9, y: [0, -4, 4, 0] }}
            onClick={() => handleTheme("grey")}
          />
        </li>

        <li>
          <style.OptionThree
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9, y: [0, -4, 4, 0] }}
            onClick={() => handleTheme("purple")}
          />
        </li>

        <li>
          <style.OptionFour
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9, y: [0, -4, 4, 0] }}
            onClick={() => handleTheme("black")}
          />
        </li>
      </style.Options>
      <Select options={options} handleSelect={handleLang} />
    </style.Form>
  );
};
