import { useRef } from "react";

import classes from "./NewToDo.module.css";

import addToDoButton from "../../assets/images/add.png";

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
      <div className={classes.newToDo__box}>
        <form onSubmit={submitHandler}>
          <div className={classes.newToDoText}>
            <input
              type="text"
              id="newToDoInput"
              placeholder="Enter a new toDo"
              ref={toDoInputRef}
              className={classes.newToDo__text}
            />
          </div>
          <div className={classes.addNewToDoButton}>
            <input
              type="image"
              alt="Add new toDo button"
              src={addToDoButton}
              className={classes.addToDoButton}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewToDo;
