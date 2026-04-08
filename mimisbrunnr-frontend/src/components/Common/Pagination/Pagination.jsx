import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Pagination.css";

const elipse = "..."

function getPagination(page, totalPages) {
  const delta = 1;
  var pages = [];

  const start = page - delta == 3 ? 2 : Math.max(2, page - delta);

  const end = page + delta == totalPages - 2 ? totalPages - 1 : Math.min(totalPages - 1, page + delta)

  for (let i = 0; i < 4 - page; i++)
    pages.push(undefined)

  pages.push(1);

  if (start > 2)
    pages.push(elipse)

  for (let i = start; i <= end; i++)
    pages.push(i);

  if (end < totalPages - 1)
    pages.push(elipse)

  if (totalPages > 1)
    pages.push(totalPages)

  for (let i = 0; i < page - totalPages + 3; i++)
    pages.push(undefined)

  return pages;
}

const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button disabled={page <= 1} className="first-page" onClick={() => onPageChange(page - 1)}><FiChevronLeft /></button>
      {
        getPagination(page, totalPages).map(p =>
          <button className={p == page ? "current-page" : ""} disabled={p == elipse} onClick={() => onPageChange(p)}>
            {p}
          </button>)
      }
      <button disabled={page >= totalPages} className="last-page" onClick={() => onPageChange(page + 1)}><FiChevronRight /></button>
    </div>
  )
}

export default Pagination;