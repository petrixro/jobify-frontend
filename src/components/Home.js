import React from "react";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

function Home() {
  return (
    <React.Fragment>
      <br/>
      <h2>Available Jobs</h2>
      <br/>
      <SearchBar />
      <Pagination />
    </React.Fragment>
  );
}

export default Home;
