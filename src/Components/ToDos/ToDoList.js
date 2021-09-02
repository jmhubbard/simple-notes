import { Fragment } from "react";

import ToDoItem from "../ToDoItem";
import NewToDo from "./NewToDo";

const DUMMY_DATA = [
  { id: 1, task: "Learn React", completed: false },
  { id: 2, task: "Buy Groceries", completed: false },
  { id: 3, task: "Create to do app", completed: false },
];

const ToDoList = () => {
  const allToDoItems = DUMMY_DATA.map((todo) => {
    return (
      <ToDoItem
        id={todo.id}
        key={todo.id}
        task={todo.task}
        completed={todo.completed}
      />
    );
  });
  return (
    <Fragment>
      <ul>{allToDoItems}</ul>
      <NewToDo />
    </Fragment>
  );
};

export default ToDoList;
