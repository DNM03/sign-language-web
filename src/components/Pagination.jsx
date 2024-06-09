import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={i === currentPage ? 'active' : ''}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }
  } else {
    if (currentPage <= 3) {
      console.log(pages);
      for (let i = 1; i <= 5; i++) {
        pages.push(
          <button
            key={i}
            className={i === currentPage ? 'active' : ''}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      }
      pages.push(<span key="ellipsis">...</span>);
      pages.push(
        <button
          key={totalPages}
          className={totalPages === currentPage ? 'active' : ''}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    } else if (currentPage >= totalPages - 2) {
      pages.push(
        <button
          key={1}
          className={1 === currentPage ? 'active' : ''}
          onClick={() => onPageChange(1)}
        >
          1
        </button>
      );
      pages.push(<span key="ellipsis">...</span>);
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            className={i === currentPage ? 'active' : ''}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      pages.push(
        <button
          key={1}
          className={1 === currentPage ? 'active' : ''}
          onClick={() => onPageChange(1)}
        >
          1
        </button>
      );
      if (currentPage !== 1) {
        pages.push(<span key="ellipsis1">...</span>);
      }
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(
          <button
            key={i}
            className={i === currentPage ? 'active' : ''}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      }
      if (currentPage !== totalPages) {
        pages.push(<span key="ellipsis2">...</span>);
      }
      pages.push(
        <button
          key={totalPages}
          className={totalPages === currentPage ? 'active' : ''}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }
  }

  return <div className="pagination">{pages}</div>;
};

export default Pagination;