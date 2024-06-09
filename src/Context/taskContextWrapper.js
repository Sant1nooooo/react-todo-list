import { TaskContext } from "./data";
export default function TaskContextWrapper({children, context})
{
    return(
        <TaskContext.Provider value={context}>
            {children}
        </TaskContext.Provider>
    );
}