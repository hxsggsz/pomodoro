import * as style from ".";
import { Button } from "../../../components/button/button";
import { Items } from "../../../components/items/items";
import { useTodo } from "../../../context/todoContext";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useTranslation } from "react-i18next";

export const Todo = () => {
  const todo = useTodo();
  const { t } = useTranslation();

  return (
    <style.StyledWrapperTodo>
      <style.Form data-testid="form-add-todo" onSubmit={todo.handleSubmit}>
        <style.Input
          type="text"
          value={todo.input}
          onChange={todo.handleChange}
          placeholder={t("todo-placeholder")}
        />

        <Button disabled={todo.input.length === 0} type="submit">
          {t("submit")}
        </Button>
      </style.Form>

      {todo.todo.length === 0 && (
        <style.EmptyParagraph>
          {t("todo-base")}{" "}
          <style.EmptyMessage>{t("todo-final")}</style.EmptyMessage>
        </style.EmptyParagraph>
      )}
      {todo.error && <style.Error>{todo.error}</style.Error>}

      <DragDropContext onDragEnd={todo.handleDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <style.WrapperList>
              <style.List {...provided.droppableProps} ref={provided.innerRef}>
                {todo.todo.map((item, idx) => (
                  <Draggable key={idx} draggableId={idx.toString()} index={idx}>
                    {(provided) => {
                      return (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <Items
                            item={item}
                            deleteItem={todo.deleteItem}
                            updateItem={todo.updateItem}
                          />
                        </div>
                      );
                    }}
                  </Draggable>
                ))}
                {provided.placeholder}
              </style.List>
            </style.WrapperList>
          )}
        </Droppable>
      </DragDropContext>
    </style.StyledWrapperTodo>
  );
};
