import { HandGrabbing, Pencil, X } from "phosphor-react";
import * as style from ".";
import { useTodo } from "../../context/todoContext";
import { useCallback, useEffect, useRef, useState } from "react";

interface ItemsProps {
  item: string;
  deleteItem: (item: string) => void;
  updateItem: (
    itemToUpdate: string,
    ev: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export const Items = (props: ItemsProps) => {
  const [isEditable, setIsEditable] = useState(false);
  const { todo, deleteItem, updateItem } = useTodo();

  const editInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (editInput?.current && isEditable) {
      editInput.current.focus();
    }
  }, [isEditable]);

  return (
      <style.Wrapper
        layout
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: "backInOut" }}
      >
        {isEditable ? (
          <style.Input
            ref={editInput}
            spellCheck={false}
            defaultValue={props.item}
            onChange={(ev) => props.updateItem(props.item, ev)}
          />
        ) : (
          <style.Text>{props.item}</style.Text>
        )}
        <style.ButtonWrapper>
          <style.Button onClick={() => setIsEditable((prev) => !prev)}>
            <Pencil size={24} weight="bold" />
          </style.Button>

          <style.Button>
            <HandGrabbing size={24} weight="bold" />
          </style.Button>

          <style.Button onClick={() => deleteItem(props.item)}>
            <X size={24} />
          </style.Button>
        </style.ButtonWrapper>
      </style.Wrapper>
  );
};
