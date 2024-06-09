import { FilterContext } from "../Context/filterContextWrapper";
import { TaskContext } from "../Context/data";
import { useContext,useState } from "react";
export default function TaskList()
{
    const {tasks, dispatch} = useContext(TaskContext);
    const filterContext = useContext(FilterContext)
    const [newTask, setNewTask] = useState('');
    console.log(filterContext.filter);
    return(
        <div className="task-list">
            {tasks.map(eachTask=>{
                if(filterContext.filter === 'All')
                {
                    return(
                    <div className="task" key={eachTask.id}>
                        <div className="task-left">
                            <input type="checkbox" checked={eachTask.isDone} style={{marginRight:5}} onChange={()=>{dispatch({type:'check', id: eachTask.id})}}/>
                            {eachTask.isEditing ? <input type="sample-task-here" value={newTask} style={{flexGrow:1, fontSize: 25}} onChange={(e)=>{setNewTask(e.target.value)}}/> 
                            : <h1 style={{textDecoration: eachTask.isDone ? 'line-through' : null, color: eachTask.isDone ? 'gray' : 'black'}}>{eachTask.text}</h1>}
                        </div>
                        <div className="task-buttons">
                            {eachTask.isEditing ? (<button onClick={()=>{dispatch({type: 'edit', newText: newTask,id:eachTask.id})}}>Save</button>) 
                            : (<button onClick={()=>{dispatch({type: 'edit', id:eachTask.id})}}>Edit</button>)}
                            <button onClick={()=>{dispatch({type: 'delete', id:eachTask.id})}}>Delete</button>
                        </div>
                    </div>
                );
                }
                else if(filterContext.filter === 'Done')
                {
                    if(eachTask.isDone)
                    {
                        return(
                            <div className="task" key={eachTask.id}>
                                <div className="task-left">
                                    <input type="checkbox" checked={eachTask.isDone} style={{marginRight:5}} onChange={()=>{dispatch({type:'check', id: eachTask.id})}}/>
                                    {eachTask.isEditing ? <input type="sample-task-here" value={newTask} style={{flexGrow:1, fontSize: 25}} onChange={(e)=>{setNewTask(e.target.value)}}/> 
                                    : <h1 style={{textDecoration: eachTask.isDone ? 'line-through' : null, color: eachTask.isDone ? 'gray' : 'black'}}>{eachTask.text}</h1>}
                                </div>
                                <div className="task-buttons">
                                    {eachTask.isEditing ? (<button onClick={()=>{dispatch({type: 'edit', newText: newTask,id:eachTask.id})}}>Save</button>) 
                                    : (<button onClick={()=>{dispatch({type: 'edit', id:eachTask.id})}}>Edit</button>)}
                                    <button onClick={()=>{dispatch({type: 'delete', id:eachTask.id})}}>Delete</button>
                                </div>
                            </div>
                        );
                    }
                }
                else
                {
                    if(!eachTask.isDone)
                    {
                        return(
                            <div className="task" key={eachTask.id}>
                                <div className="task-left">
                                    <input type="checkbox" checked={eachTask.isDone} style={{marginRight:5}} onChange={()=>{dispatch({type:'check', id: eachTask.id})}}/>
                                    {eachTask.isEditing ? <input type="sample-task-here" value={newTask} style={{flexGrow:1, fontSize: 25}} onChange={(e)=>{setNewTask(e.target.value)}}/> 
                                    : <h1 style={{textDecoration: eachTask.isDone ? 'line-through' : null, color: eachTask.isDone ? 'gray' : 'black'}}>{eachTask.text}</h1>}
                                </div>
                                <div className="task-buttons">
                                    {eachTask.isEditing ? (<button onClick={()=>{dispatch({type: 'edit', newText: newTask,id:eachTask.id})}}>Save</button>) 
                                    : (<button onClick={()=>{dispatch({type: 'edit', id:eachTask.id})}}>Edit</button>)}
                                    <button onClick={()=>{dispatch({type: 'delete', id:eachTask.id})}}>Delete</button>
                                </div>
                            </div>
                        );
                    }
                }
            })}
        </div>
    );
}