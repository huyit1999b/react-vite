const TodoData = ({ todoList, deleteTodo }) => {
  return (
    <div className='todo-list'>
      {todoList.map((todo) => (
        <div
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
        </div>
      ))}
    </div>
  );
};

export default TodoData;
