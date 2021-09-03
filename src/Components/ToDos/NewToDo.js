import { useRef } from "react";

import classes from "./NewToDo.module.css";

import addToDoButton from "../../assets/images/add.png"

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
    <div className={classes.newToDo}>
      <form onSubmit={submitHandler}>
        {/* <label htmlFor="new todo">New ToDo</label> */}
        <input type="text" id="newToDoInput" ref={toDoInputRef} className={classes.newToDo__text}/>
        <input type="image" alt="Add new toDo button" src={addToDoButton} className={classes.addToDoButton}/>
      </form>
    </div>
  );
};

export default NewToDo;
