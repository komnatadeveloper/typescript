import React, {useState} from 'react';
// import {} from 'react-router-dom'


import './App.css';
import { TodoList } from './components/TodoList';
import { NewTodo } from './components/NewTodo';
import { Todo } from './todo.model';



const App: React.FC = () => {
  // const [todos, setTodos] = useState<{
  //   id: string;
  //   text: string
  // }[]>([]);
  // OR

  // By exporting generic from another file
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos([...todos, { id: Math.random().toString(), text: text }]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  return (
    <div className='App'>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
