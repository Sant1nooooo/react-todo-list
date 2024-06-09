import './App.css';
import TaskContextWrapper from './Context/taskContextWrapper';
import FilterContextWrapper from './Context/filterContextWrapper';
import TaskForm from './Components/taskForm';
import TaskList from './Components/taskList';

import { initialData } from './Context/data';
import { useReducer, useState } from 'react';


function taskReducer(tasks, action)
{
  switch(action.type){
    case 'add':
      console.log('Task Added');
      return [...tasks, {id: tasks.length, isDone: false, text: action.text}];
    case 'check':
      return (
        tasks.map((eachTask)=>{
          if(eachTask.id === action.id){
            return {...eachTask, isDone: !eachTask.isDone}
          }
          else
          {
            return eachTask
          }
        })
      );
    case 'edit':
      if(action.newText)
      {
        return (
          tasks.map(eachTask=>{
            if(eachTask.id === action.id)
            {
              return {...eachTask, text: action.newText, isEditing: !eachTask.isEditing}
            }
            else{
              return eachTask
            }
          })
        );
      }
      return(
        tasks.map(eachTask=>{
          if(eachTask.id === action.id)
          {
            return {...eachTask, isEditing: !eachTask.isEditing}
          }
          else{
            return eachTask
          }
        })
      );
    case 'delete':
      return tasks.filter(eachTask => eachTask.id !== action.id);
    default:
      console.log('Invalid action!');
      return 
  }
}
export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialData);
  const [filter, setFilter] = useState('All');

  return (
    <div className='App'>
      <h1>TODO LIST</h1>

      <FilterContextWrapper context={{filter, setFilter}}>
        <TaskContextWrapper context={{tasks, dispatch}}>
          <TaskForm/>
          <TaskList/>
        </TaskContextWrapper>
      </FilterContextWrapper>
    </div>
  );
}

