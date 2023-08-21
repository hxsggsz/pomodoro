import { GithubLogo, LinkedinLogo, Trash } from "phosphor-react";
import * as style from ".";
import { useTodo } from "../../../context/todoContext";
import { Button } from "../../../components/button/button";
import { useOptions } from "../../../context/optionsContext";
import { FooterLinks } from "../../../components/FooterLinks/footerLinks";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const { deleteAll, todo } = useTodo();
  const { activeIndex } = useOptions();

  function handleClearTodo() {
    const confirm = window.confirm(t("clear-message"));

    if (confirm) {
      deleteAll();
    }
  }

  return (
    <style.Footer>
      <style.Wrapper>
        <FooterLinks
          href="https://www.linkedin.com/in/hxsggsz/"
          socialMedia="Linkedin"
          icon={LinkedinLogo}
        />

        <FooterLinks
          href="https://github.com/hxsggsz"
          socialMedia="Github"
          icon={GithubLogo}
        />
      </style.Wrapper>

      {activeIndex !== 0 && todo.length > 0 && (
        <Button onClick={handleClearTodo}>
          <Trash size={24} weight="fill" />
          <style.Text>{t("btn-clear")}</style.Text>
        </Button>
      )}
    </style.Footer>
  );
};
