import { Fragment } from "react";

import { useState, useEffect } from "react";

import classes from "./ToDoList.module.css";

import ToDoItem from "./ToDoItem";
import NewToDo from "./NewToDo";

const ToDoList = () => {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    const existingTodos = localStorage.getItem("todos");
    setToDos(existingTodos ? JSON.parse(existingTodos) : []);
  }, []);

  const deleteToDoHandler = (toDoID) => {
    setToDos((prevToDos) => {
      const new_state = prevToDos.filter((toDo) => toDo.id !== toDoID);
      localStorage.setItem("todos", JSON.stringify(new_state));
      return new_state;
    });
  };

  const addNewToDoHandler = (newToDo) => {
    setToDos((prevToDos) => {
      const new_state = [...prevToDos, newToDo];
      localStorage.setItem("todos", JSON.stringify(new_state));
      return new_state;
    });
  };

  const allToDoItems = toDos.map((todo) => {
    return (
      <ToDoItem
        id={todo.id}
        key={todo.id}
        task={todo.task}
        onDeleteItem={deleteToDoHandler}
      />
    );
  });


  return (
    <Fragment>
      {allToDoItems.length > 0 && (
        <div className={classes.toDoList}>
          {allToDoItems}
        </div>
      )}
      <div className={classes.newToDo}>
        <NewToDo onAddNewToDo={addNewToDoHandler} />
      </div>
    </Fragment>
  );
};

export default ToDoList;
