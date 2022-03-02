import React, { useState, useEffect } from "react";
import { TaskList } from "../Components/TaskList";
import  ToDoServices  from "../API/ToDoServices";
import { getPagesCount } from "../utils/pages";
import { useDispatch} from "react-redux";
import { useFetching } from "../hooks/useFetching";
import { Pagination } from "../Components/Pagination";
import { Loader } from "../Components/Loader";
import { AddTaskButton } from "../Components/AddTaskButton";

export const Todo = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  const [fetchToDo, isToDoLoading, toDoError] = useFetching(async () => {
    const response = await ToDoServices.getAll(limit, page);
    dispatch({ type: "SET_TODO", payload: response.data });
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  const changePage = (page) => {
    setPage(page);
  }

  useEffect(() => {
    fetchToDo();
  }, [page]);

  return (
    <div>
        {isToDoLoading ? (<Loader />) : 
        <>
            <AddTaskButton />
            <TaskList />
            <Pagination page={page} limit={limit} totalPages={totalPages} changePage={changePage}/>
        </>
        }
      
    </div>
  );
};
