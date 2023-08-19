import { GithubLogo, LinkedinLogo, Trash } from "phosphor-react";
import * as style from ".";
import { useTodo } from "../../../context/todoContext";
import { Button } from "../../../components/button/button";
export const Footer = () => {
  const { deleteAll } = useTodo();

  function handleClearTodo() {
    const confirm = window.confirm("do you really want to delete ALL tasks?");

    if (confirm) {
      deleteAll();
    }
  }
  return (
    <style.Footer>
      <style.AlignIcons>
      <style.WrapperLinks>
        <style.WrapperLinks
          href="https://www.linkedin.com/in/hxsggsz/"
          target="_blank"
        >
          <LinkedinLogo size={32} weight="fill" />
          <style.Text>Linkedin</style.Text>
        </style.WrapperLinks>

        <style.WrapperLinks href="https://github.com/hxsggsz/" target="_blank">
          <GithubLogo size={32} weight="fill" />
          <style.Text>Github</style.Text>
        </style.WrapperLinks>
      </style.WrapperLinks>

      <Button onClick={handleClearTodo}>
        <Trash size={24} weight="fill" />
        <style.Text>Clear</style.Text>
      </Button>
      </style.AlignIcons>
    </style.Footer>
  );
};
