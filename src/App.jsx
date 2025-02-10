import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';

const App = () => {
  const name = 'Huy';
  const age = 25;
  const info = {
    address: 'Can Tho',
    country: 'Viet Nam',
  };

  const AddNewTodo = () => {
    alert('add new todo');
  };

  return (
    <div className='todo-container'>
      <div className='todo-title'>Todo List</div>
      <TodoNew AddNewTodo={AddNewTodo} />
      <TodoData
        name={name}
        age={age}
        info={info}
      />
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
