import React from "react";
import { Task } from "./Task";
import { useSelector, useDispatch } from "react-redux";
import '../Style/TaskList.css'

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return <div className="task__list">
    {tasks.map((task, index) => {
        return <Task key={index} task={task} />
    })}
  </div>;
};
