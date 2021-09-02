import { useRef } from "react";

const NewToDo = (props) => {
  const toDoInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const newToDo = toDoInputRef.current.value;
    const newTask = {
      id: Math.random().toString(),
      task: newToDo,
      completed: false,
    };
    props.onAddNewToDo(newTask);
    toDoInputRef.current.value = "";
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="new todo">New ToDo</label>
      <input type="text" id="newToDo" ref={toDoInputRef}/>
    </form>
  );
};

export default NewToDo;
