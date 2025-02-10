const TodoNew = (props) => {
  const { AddNewTodo } = props;

  AddNewTodo();

  return (
    <div className='todo-new'>
      <input
        type='text'
        name='todo'
      />
      <button>Add</button>
    </div>
  );
};

export default TodoNew;
