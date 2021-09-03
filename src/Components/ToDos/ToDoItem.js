import classes from "./ToDoItem.module.css";

import deleteImage from "../../assets/images/delete.png";

const ToDoItem = (props) => {
  const deleteItemHandler = () => {
    props.onDeleteItem(props.id);
  };

  return (
    <div className={classes.toDoItem}>
      <div className={classes.toDoText}>
        <p>{props.task}</p>
      </div>
      <div className={classes.deleteToDoButton}>
      <img src={deleteImage} alt="Delete Button" onClick={deleteItemHandler} />
      </div>
    </div>
  );
};

export default ToDoItem;
