import React from "react";
import { usePagination } from "../hooks/usePagination";
import '../Style/Pagination.css'

export const Pagination = ({ totalPages, page, changePage }) => {
  let arrayPages = usePagination(totalPages);
  return (
    <div className="pagination__items">
      {arrayPages.map((p) => (
        <span
          key={p}
          onClick={() => {
            changePage(p);
          }}
          className={page === p ? "pagination__page pagination__active" : "pagination__page"}
        >
          {p}
        </span>
      ))}
    </div>
  );
};
