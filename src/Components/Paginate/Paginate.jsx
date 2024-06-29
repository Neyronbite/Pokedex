import React from "react";
import ReactPaginate from "react-paginate";

import "./paginate.scss";

const Paginate = ({ pageCount, currentPage, setPage }) => {
  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
      className="pagination-ul"
    />
  );
};

export default Paginate;
