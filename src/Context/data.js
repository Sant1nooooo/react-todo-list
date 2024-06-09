import { createContext } from "react";
export const initialData = [
    {id: 0, text: 'Sample-Task-1', isDone: false, isEditing: false},
    {id: 1, text: 'Sample-Task-2', isDone: false, isEditing: false},
    {id: 2, text: 'Sample-Task-3', isDone: false, isEditing: false},
];
export const TaskContext = createContext(null);