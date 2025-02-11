import { useState } from 'react';

const TodoNew = ({ addNewTodo }) => {
  const [todoName, setTodoName] = useState('');

  const handleAddTodo = () => {
    if (todoName.trim() !== '') {
      addNewTodo(todoName);
      setTodoName('');
    }
  };

  return (
    <div className='todo-input-container'>
      <input
        type='text'
        className='todo-input'
        placeholder='Enter a new task...'
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button
        className='btn-primary'
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
};

export default TodoNew;
