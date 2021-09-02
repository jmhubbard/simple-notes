const ToDoItem = (props) => {
    return (
        <li key={props.id}>{props.task}</li>
    )
};

export default ToDoItem;