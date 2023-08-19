import * as style from ".";
import { Button } from "../button/button";
import { Items } from "../items/items";
import { useTodo } from "../../context/todoContext";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Trash } from "phosphor-react";

export const Todo = () => {
  const todo = useTodo();

  function handleClearTodo() {
    const confirm = window.confirm('do you really want to delete ALL tasks?')

    if(confirm) {
      todo.deleteAll()
    }
  }

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


      {todo.todo.length === 0 ? (
        <p>
          What do you have to <style.EmptyMessage>do</style.EmptyMessage>?
        </p>
      ) : (
        <Button onClick={handleClearTodo}>Clear <Trash size={24} weight="fill" /></Button>
        )}
        <style.Error>{todo.error}</style.Error>

      <DragDropContext onDragEnd={todo.handleDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <style.List {...provided.droppableProps} ref={provided.innerRef}>
              {todo.todo.map((item, idx) => (
                <Draggable key={idx} draggableId={idx.toString()} index={idx}>
                  {(provided, { isDragging }) => {
                    return (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Items
                          item={item}
                          isDragging={isDragging}
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
          )}
        </Droppable>
      </DragDropContext>
    </style.StyledWrapperTodo>
  );
};
