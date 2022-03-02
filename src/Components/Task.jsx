import React from "react";
import "../Style/Task.css";
import { useSelector, useDispatch } from "react-redux";

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const toggleTask = () => {
    dispatch({ type: "TOGGLE_TODO", payload: task.id });
  };

  const deleteTask = () => {
    dispatch({ type: "DELETE_TODO", payload: task.id });
  };

  const editTask = () => {
    task.title = prompt("Edit task", task.title);
    dispatch({ type: "EDIT_TODO", payload: task });
    console.log(task);
  };

  return (
    <div className="task">
      <div className="task__items">
        <div className="task__left">
          <div className="task__complete">
            <input
              type="checkbox"
              id={task.id}
              checked={task.completed}
              onChange={toggleTask}
            />
          </div>
          <div
            className={task.completed ? "task__text completed" : "task__text"}
          >
            {/* class for completed tasks 'completed' */}
            <label htmlFor={task.id}>
              <p>{task.title}</p>
            </label>
          </div>
        </div>
        <div className="task__right">
          <div className="task__delete">
            <button onClick={editTask} className="delete__button">
              E
            </button>
          </div>
          <div className="task__edit">
            <button onClick={deleteTask} className="delete__button">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
