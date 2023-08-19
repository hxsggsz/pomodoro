import * as style from ".";
import { Button } from "../button/button";
import { Items } from "../items/items";
import { useTodo } from "../../context/todoContext";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const Todo = () => {
  const todo = useTodo();

  return (
    <style.StyledWrapperTodo>
      <style.Form data-testid="form-add-todo" onSubmit={todo.handleSubmit}>
        <style.Input
          type="text"
          value={todo.input}
          onChange={todo.handleChange}
          placeholder="Your todo here"
        />

        <Button type="submit">Submit</Button>
      </style.Form>

      <style.Error>{todo.error}</style.Error>

      {todo.todo.length === 0 && <p>adicione a sua tarefa</p>}

      <DragDropContext onDragEnd={todo.handleDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <style.List {...provided.droppableProps} ref={provided.innerRef}>
              {todo.todo.map((item, idx) => (
                <Draggable key={idx} draggableId={idx.toString()} index={idx}>
                  {(provided) => (
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
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </style.List>
          )}
        </Droppable>
      </DragDropContext>
    </style.StyledWrapperTodo>
  );
};
