import React from "react";
import ReactPaginate from "react-paginate";

import "./paginate.scss";

// simple component, based on react-paginate
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
      className="pagination_ul"
    />
  );
};

export default Paginate;
