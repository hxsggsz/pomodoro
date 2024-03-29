import { Pencil, X } from "phosphor-react";
import * as style from ".";
import { KeyboardEvent, useEffect, useRef, useState } from "react";

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

  const editInput = useRef<HTMLInputElement | null>(null);

  function handleFinishUpdate(ev: KeyboardEvent<HTMLInputElement>) {
    if (ev.key === "Enter") {
      setIsEditable((prev) => !prev);
    }
  }

  useEffect(() => {
    if (editInput?.current && isEditable) {
      editInput.current.focus();
    }
  }, [isEditable]);

  return (
    <style.Wrapper
      isEditable={isEditable}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.1, ease: "anticipate" }}
    >
      {isEditable ? (
        <style.Input
          ref={editInput}
          isEditable={isEditable}
          data-testid="input"
          spellCheck={false}
          maxLength={30}
          onKeyDown={handleFinishUpdate}
          defaultValue={props.item}
          onChange={(ev) => props.updateItem(props.item, ev)}
        />
      ) : (
        <style.Text>{props.item}</style.Text>
      )}
      <style.ButtonWrapper>
        <style.Button
          isEditable={isEditable}
          data-testid="update-button"
          onClick={() => setIsEditable((prev) => !prev)}
        >
          <Pencil size={24} weight="bold" />
        </style.Button>

        <style.Button
          data-testid="delete-button"
          isEditable={isEditable}
          onClick={() => props.deleteItem(props.item)}
        >
          <X size={24} />
        </style.Button>
      </style.ButtonWrapper>
    </style.Wrapper>
  );
};
