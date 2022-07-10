import { useState, useEffect } from 'react';

import { ROW_PER_PAGE_DEFAULT } from '../components/utils/constants';

const usePaginationParams = (listLength = 0) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(ROW_PER_PAGE_DEFAULT);

  // reset pagination when list length changes: especially when list shrinks by being filtered, searched, etc.

  useEffect(() => {
    setCurrentPage(1);
  }, [listLength]);

  const handleChangePage = (e, newPage) => {
    e.preventDefault();
    setCurrentPage(parseInt(newPage));
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setCurrentPage(1);
  };

  return {
    currentPage,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    setCurrentPage,
    setRowsPerPage,
  };
};
export default usePaginationParams;
