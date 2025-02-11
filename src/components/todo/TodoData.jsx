const TodoData = (props) => {
  const { todoList } = props;
  return (
    <div className='todo-data'>
      <div>
        {todoList.map((todo) => {
          return <div key={todo.id}>{todo.id} - {todo.name}</div>;
        })}
      </div>
    </div>
  );
};

export default TodoData;
