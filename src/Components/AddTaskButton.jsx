import React from 'react'
import { useDispatch } from 'react-redux';

export const AddTaskButton = () => {
    const dispatch = useDispatch();
    const addTask = () => {
        const task = prompt("Add task", "Task");
        dispatch({ type: "ADD_TODO", payload: task });
    }

  return (
    <button onClick={addTask}>Add Task</button>
  )
}
