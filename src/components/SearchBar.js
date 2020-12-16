import React, { useContext } from "react";
import { JobContext } from "./JobsContext";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardLinks = styled(Link)`
  color: black;
  text-decoration: none;
  :hover {
    color: #00b3e2;
    text-decoration: none;
  }
`;

export default function SearchBar() {
  const { jobs, loading } = useContext(JobContext);
  const [isLoading] = loading;
  const [loadedJobs] = jobs;

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const displayJobs = (array) => {
    return array.map((job) => (
      <CardLinks key={job.id} to={"/job/" + job.id}>
        <div className="card">
          <h6 style={{ width: "50%" }}>{job.companyName}</h6>
          <img src={job.companyLogo} alt="" />
          <strong>
            <p>{job.name}</p>
          </strong>
          <p>Location: {job.location}</p>
          <p>
            Job type: <strong style={{ color: "green" }}>{job.type}</strong>
          </p>
        </div>
      </CardLinks>
    ));
  };

  React.useEffect(() => {
    const results = loadedJobs.filter((job) =>
      job.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  }, [searchTerm, loadedJobs]);

  const search = (
    <div>
      <form className="">
        <input
          className="form-control form-control-sm"
          placeholder="Search by job title"
          onChange={handleChange}
          value={searchTerm}
          type="text"
          name="search-job"
          style={{ width: "20%", margin: "auto" }}
        ></input>
      </form>
    </div>
  );

  const content = isLoading ? (
    <Loading />
  ) : (
    <div className="cards">
      {searchResults.length > 0
        ? displayJobs(searchResults)
        : displayJobs(loadedJobs)}
    </div>
  );

  return (
    <React.Fragment>
      {search}
      {content}
    </React.Fragment>
  );
}
