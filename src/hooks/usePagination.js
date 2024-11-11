import { useState, useCallback } from "react";

const usePagination = (limit = 10) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(limit);

  const handleChangePage = useCallback((event, newPage) => {
    setPage(newPage + 1);
  }, []);

  const handleChangeRowsPerPage = useCallback((event) => {
    const newRowsPerPage = parseInt(event.target.value);
    setRowsPerPage(newRowsPerPage);
    setPage(1);
  }, []);

  return { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage };
};

export default usePagination;
