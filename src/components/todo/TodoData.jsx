const TodoData = (props) => {
  const { name, age, info } = props;
  return (
    <div className='todo-data'>
      <div>{name} {age} {info.address} {info.country}   </div>
      <div>Learning React</div>
    </div>
  );
};

export default TodoData;
