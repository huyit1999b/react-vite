const TodoData = ({ todoList, deleteTodo }) => {
  return (
    <ul className='todo-list'>
      {todoList.map((todo) => (
        <li
          key={todo.id}
          className='todo-item'
        >
          <span>{todo.name}</span>
          <button
            className='btn-delete'
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoData;
