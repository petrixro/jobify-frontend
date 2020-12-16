import React from "react";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

function Home() {
  return (
    <React.Fragment>
      <h2>Available Jobs</h2>
      <Pagination />
      <SearchBar />
      <Pagination />
    </React.Fragment>
  );
}

export default Home;
