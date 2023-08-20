import { GithubLogo, LinkedinLogo, Trash } from "phosphor-react";
import * as style from ".";
import { useTodo } from "../../../context/todoContext";
import { Button } from "../../../components/button/button";
import { useOptions } from "../../../context/optionsContext";
import { FooterLinks } from "../FooterLinks/footerLinks";

export const Footer = () => {
  const { deleteAll, todo } = useTodo();
  const { activeIndex } = useOptions();

  function handleClearTodo() {
    const confirm = window.confirm("do you really want to delete ALL tasks?");

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
          <style.Text>Clear</style.Text>
        </Button>
      )}
    </style.Footer>
  );
};
