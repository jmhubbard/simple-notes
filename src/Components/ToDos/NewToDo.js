import { useRef } from "react";

const NewToDo = () => {
    const toDoInputRef = useRef();
    


    const submitHandler = (event) => {
        event.preventDefault();
        const newToDo = toDoInputRef.current.value
        console.log(newToDo);
    }
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="new todo">Enter a new todo</label>
            <input type="text" id="newToDo" ref={toDoInputRef}/>
        </form>
    )
};

export default NewToDo;