import React, { useMemo } from 'react';

export const usePagination = (totalPages) => {
  return useMemo(() => {
    const todoArray = [];
    for (let i = 0; i < totalPages; i++) {
      todoArray.push(i + 1);
    }
    return todoArray;
  }, [totalPages]);
};
