import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export const Pagination = ({
  value: { totalPages = 0, pageNumber = 1 },
  onPageChange = () => {},
}) => {
  if (!totalPages || totalPages === 1) {
    return null;
  }

  return (
    <div className="pagination-main">
      <ReactPaginate
        forcePage={pageNumber}
        pageCount={totalPages}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        onPageChange={(value) => onPageChange(value.selected)}
        containerClassName="pagination"
        activeClassName="active"
        pageLinkClassName="page-link"
        breakLinkClassName="page-link"
        nextLinkClassName="page-link"
        previousLinkClassName="page-link"
        pageClassName="page-item"
        breakClassName="page-item"
        nextClassName="page-item"
        previousClassName="page-item"
        previousLabel={<>&laquo;</>}
        nextLabel={<>&raquo;</>}
      />
    </div>
  );
};

const PaginationComponent = ({ limit = 8, value, setValue }) => {
  const [currentPage, setcurrentPage] = useState(0);
  let total = value?.length;
  const startIndex = currentPage * limit;
  const endIndex = startIndex + limit;
  let totalPages = Math.ceil(total / limit);
  let newDataPerPage = value?.slice(startIndex, endIndex);
  let pageData = {
    value: { totalPages: totalPages, pageNumber: currentPage },
  };
  useEffect(() => {
    setValue(newDataPerPage);
  }, [value, currentPage]);
  return <Pagination {...pageData} onPageChange={(e) => setcurrentPage(e)} />;
};

export default PaginationComponent;
