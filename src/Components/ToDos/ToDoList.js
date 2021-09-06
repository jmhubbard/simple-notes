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
    console.log("Delete Item in todolist");
    console.log(toDoID);
    setToDos((prevToDos) => {
      const new_state = prevToDos.filter((toDo) => toDo.id !== toDoID);
      localStorage.setItem("todos", JSON.stringify(new_state));
      return new_state;
    });
  };

  const addNewToDoHandler = (newToDo) => {
    console.log(newToDo);
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
        completed={todo.completed}
        onDeleteItem={deleteToDoHandler}
      />
    );
  });

  return (
    <Fragment>
      <div className={classes.itemList} id="test">
        {allToDoItems}
      </div>
      <NewToDo onAddNewToDo={addNewToDoHandler} />
    </Fragment>
  );
};

export default ToDoList;
