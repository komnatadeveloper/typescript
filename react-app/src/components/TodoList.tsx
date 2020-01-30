import React from "react";
import './TodoList.css'

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (todoId: string) => void;
}

export const TodoList: React.FC<TodoListProps> = props => {
  return (
    <div>
      {props.items.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
            DELETE
          </button>
        </li>
      ))}
    </div>
  );
};
