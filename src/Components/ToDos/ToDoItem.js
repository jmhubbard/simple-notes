import classes from "./ToDoItem.modules.css"

import deleteImage from "../../assets/images/delete.png"

const ToDoItem = (props) => {
  return (
    <div class="toDoItem">
      <p>{props.task}</p>
      <img src={deleteImage} alt="Delete Button"/>
    </div>
  );
};

export default ToDoItem;
