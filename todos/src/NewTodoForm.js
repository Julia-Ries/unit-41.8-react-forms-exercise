import react, {useState} from "React";
import { v4 as uuid } from 'uuid';

function NewTodoForm({createTodo}) {
    const [task, setTask]= useState("");

    const handleChange = e =>{
        setTask(e.target.value);
    };

    const gatherInput = e => {
        e.preventDefault();
        createTodo({task, id: uuid()});
        setTask("");
    }

    return (
        <div>
            <form onSubmit={gatherInput}>
                <label htmlFor="task">Task:</label>
                <input
                id="task"
                name= "task"
                value={task}
                type="text"
                onChange = {handleChange}/>
            <button>Add a Todo</button>
            </form>
        </div>
    )

}

export default NewTodoForm;
