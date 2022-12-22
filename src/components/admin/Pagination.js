import React from 'react';

const Pagination = ({
  currentPage,
  userPerPage,
  totalUsers,
  paginate,
  nextPage,
  prevPage,
}) => {
  const totalPages = [];

  for (let i = 1; i <= Math.ceil(totalUsers / userPerPage); i++) {
    totalPages.push(i);
  }

  return (
    <nav aria-label="..." style={{ cursor: 'pointer' }}>
      <ul className="pagination">
        <li className="page-item">
          <div className="page-link" onClick={prevPage}>
            Previous
          </div>
        </li>
        {totalPages.map((page) => (
          <li className="page-item" key={page}>
            <div
              className={`page-link ${page === currentPage ? 'active' : null}`}
              onClick={() => paginate(page)}
            >
              {page}
            </div>
          </li>
        ))}
        <li className="page-item">
          <div onClick={nextPage} className="page-link">
            Next
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
