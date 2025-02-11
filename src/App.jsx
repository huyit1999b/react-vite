import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: 'Learning React' },
    { id: 2, name: 'Watching Youtube' },
  ]);

  const AddNewTodo = (todoName) => {
    let newTodo = {
      id: randomIntFromInterval(1, 9999),
      name: todoName,
    };

    setTodoList([...todoList, newTodo]);
  };

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className='todo-container'>
      <div className='todo-title'>Todo List</div>
      <TodoNew AddNewTodo={AddNewTodo} />
      <TodoData todoList={todoList} />
      <div className='todo-image'>
        <img
          className='logo'
          src={reactLogo}
          alt='React Logo'
        />
      </div>
    </div>
  );
};

export default App;
