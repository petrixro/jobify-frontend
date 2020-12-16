import React, { useContext } from "react";
import { JobContext } from "./JobsContext";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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

  loadedJobs.forEach((job) => {
    axios
      .post(`http://localhost:8080/api/v1/companies`, {
        name: job.company,
        websiteLink: job.company_url,
        companyLogo: job.company_logo,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));

    if (job.company === "Agiloft Inc")
      axios
        .post(
          `http://localhost:8080/api/v1/companies/092d5d19-7eab-4911-91ee-d933ad28c453/jobs`,
          {
            name: job.title,
            description: job.description,
            applyLink: job.how_to_apply,
            type: job.type,
            location: job.location,
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
  });

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
