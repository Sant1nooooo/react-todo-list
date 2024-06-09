import { useContext, useState} from "react";
import { TaskContext } from "../Context/data";
import DropDownFilter from "./dropdownFilter";
export default function TaskForm()
{
    const [inputTask, setInputTask] = useState('')
    const context = useContext(TaskContext);
    return (
        <div className="task-form">
            <div className="form">        
                <label htmlFor="add-task">
                    <input type="text" value={inputTask} onChange={(e)=>{setInputTask(e.target.value)}} placeholder="Add your Task here..." required/>
                </label>
                <button onClick={()=>{ 
                    context.dispatch({ type: 'add', text: inputTask})
                    setInputTask('') }}> Add Task </button>
            </div>
            {/* <button>Filter</button> */}
            <DropDownFilter/>
        </div>
    );
}