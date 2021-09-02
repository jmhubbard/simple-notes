import classes from "./ToDoItem.modules.css";

import deleteImage from "../../assets/images/delete.png";

const ToDoItem = (props) => {
  const deleteItemHandler = () => {
    props.onDeleteItem(props.id);
  };

  return (
    <div className="toDoItem">
      <p>{props.task}</p>
      <img src={deleteImage} alt="Delete Button" onClick={deleteItemHandler} />
    </div>
  );
};

export default ToDoItem;
