import { useState } from 'react';

const TodoNew = (props) => {
  const { AddNewTodo } = props;
  const [todoName, setTodoName] = useState('');

  return (
    <div className='todo-new'>
      <input
        type='text'
        name='todo'
        onChange={(event) => setTodoName(event.target.value)}
      />
      <button onClick={() => AddNewTodo(todoName)}>Add</button>
    </div>
  );
};

export default TodoNew;
