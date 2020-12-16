import React, { useContext } from "react";
import { JobContext } from "./JobsContext";

function Pagination() {
  const { page } = useContext(JobContext);
  const [pageNumber, setPageNumber] = page;

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const prevPage = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-light btn-sm btnPage"
        disabled={pageNumber <= 1}
        onClick={prevPage}
      >
        Previous
      </button>
      <button
        type="button"
        className="btn btn-light btn-sm btnPage"
        disabled={pageNumber >= 4}
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
