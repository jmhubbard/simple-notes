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

  const allToDoItems = toDos.map((todo) => {
    return (
      <ToDoItem
        id={todo.id}
        key={todo.id}
        task={todo.task}
        completed={todo.completed}
      />
    );
  });

  const addNewToDoHandler = (newToDo) => {
    console.log(newToDo)
    setToDos(prevToDos => {
        return [...prevToDos, newToDo]
    })

  }
  return (
    <Fragment>
      <div>{allToDoItems}</div>
      <NewToDo onAddNewToDo={addNewToDoHandler}/>
    </Fragment>
  );
};

export default ToDoList;
