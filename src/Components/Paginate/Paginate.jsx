import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./paginate.module.css";

const Paginate = ({ pageCount, currentPage, setPage }) => {
  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className={styles["react-paginate"]}
      />
    </>
  );
};

export default Paginate;
