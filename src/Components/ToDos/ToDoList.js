import { Fragment } from "react";

import { useState } from "react";

import ToDoItem from "./ToDoItem";
import NewToDo from "./NewToDo";

const DUMMY_DATA = [
  { id: 1, task: "Learn React", completed: false },
  { id: 2, task: "Buy Groceries", completed: false },
  { id: 3, task: "Create to do app", completed: false },
];

const ToDoList = () => {
  const [toDos, setToDos] = useState(DUMMY_DATA);

  const deleteToDoHandler = (toDoID) => {
    console.log("Delete Item in todolist");
    console.log(toDoID);
    setToDos((prevToDos) => {
      return prevToDos.filter((toDo) => toDo.id !== toDoID);
    });
  };

  const addNewToDoHandler = (newToDo) => {
    console.log(newToDo);
    setToDos((prevToDos) => {
      return [...prevToDos, newToDo];
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
      <div>{allToDoItems}</div>
      <NewToDo onAddNewToDo={addNewToDoHandler} />
    </Fragment>
  );
};

export default ToDoList;
