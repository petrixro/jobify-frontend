import React from "react";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

function Home() {
  return (
    <React.Fragment>
        <div id="carousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="img-fluid" src={process.env.PUBLIC_URL + '/banner.jpg'} alt="First slide"/>
              <div class="carousel-caption">
                <h1 style={{float: "left"}}>Discover New Opportunities</h1>
        
              </div>
            </div>
          </div>
        </div>
      <h2>Available Jobs</h2>
      <Pagination />
      <SearchBar />
      <Pagination />
    </React.Fragment>
  );
}

export default Home;
