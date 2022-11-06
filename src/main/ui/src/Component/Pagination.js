import React from "react";

export const Pagination = (nPages, currentPage, setCurrentPage) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" onClick={prevPage} href="#">
            Previos
          </a>
        </li>
        {pageNumbers.map((pgNumber) => {
          <li
            key={pgNumber}
            className={`page-item${currentPage == pgNumber ? "active" : ""}`}
          >
            <a
              href="#"
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
            >
              pgNumber
            </a>
          </li>;
        })}
        <li className="page-item">
          <a className="page-link" onClick={nextPage} href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
