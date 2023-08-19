import { Pencil, X } from "phosphor-react";
import * as style from ".";
import { KeyboardEvent, useEffect, useRef, useState } from "react";

interface ItemsProps {
  item: string;
  isDragging: boolean;
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
    if(ev.key === "Enter") {
      setIsEditable(prev => !prev)
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
      animate={{ opacity: 1, y: 0, rotate: props.isDragging ? '1deg' : "0deg" }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.1, ease: "anticipate" }}
    >
      {isEditable ? (
        <style.Input
          ref={editInput}
          isEditable={isEditable}
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
          onClick={() => setIsEditable((prev) => !prev)}
        >
          <Pencil size={24} weight="bold" />
        </style.Button>

        <style.Button
          isEditable={isEditable}
          onClick={() => props.deleteItem(props.item)}
        >
          <X size={24} />
        </style.Button>
      </style.ButtonWrapper>
    </style.Wrapper>
  );
};
