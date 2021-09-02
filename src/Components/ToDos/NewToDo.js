

const NewToDo = () => {
    const submitHandler = (event) => {
        event.preventDefault();
    }
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="new todo">Enter a new todo</label>
            <input type="text" id="newToDo"/>
        </form>
    )
};

export default NewToDo;