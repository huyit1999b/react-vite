import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (todoName) => {
    let newTodo = {
      id: randomIntFromInterval(1, 9999),
      name: todoName,
    };

    setTodoList([...todoList, newTodo]);
  };

  const deleteTodo = (todoId) => {
    let todoFilter = todoList.filter((item) => item.id !== todoId);
    setTodoList(todoFilter);
  };

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className='todo-container'>
      <div className='todo-title'>Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      {todoList.length == 0 ? (
        <div className='todo-image'>
          <img
            className='logo'
            src={reactLogo}
            alt='React Logo'
          />
        </div>
      ) : (
        <TodoData
          todoList={todoList}
          deleteTodo={deleteTodo}
        />
      )}
    </div>
  );
};

export default App;
