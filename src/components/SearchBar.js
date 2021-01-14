import React, { useContext, useState, useEffect } from "react";
import { JobContext } from "./JobsContext";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BottomNav from "./BottomNav";
import Button from "@material-ui/core/Button";

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

  const [searchResults, setSearchResults] = React.useState([]);

  const [jobName, setjobName] = useState("");
  const [jobLocation, setjobLocation] = useState("");

  const searchByName = (e) => {
    setjobName(e.target.value);
  };

  const searchByLocation = (e) => {
    setjobLocation(e.target.value);
  };

  const displayJobs = (array) => {
    return array.map((job) => (
      <CardLinks key={job.id} to={"/job/" + job.id}>
        <div className="card">
          <h4>{job.company.name}</h4>
          <img src={job.company.companyLogo} alt="" />
          <strong>
            <h5>{job.name}</h5>
          </strong>
          <p>Location: {job.location}</p>
          <p>
            Job type: <strong style={{ color: "green" }}>{job.type}</strong>
          </p>
        </div>
      </CardLinks>
    ));
  };

  const search = (
    <div className="row">
      <div className="col">
        <input
          type="text"
          onChange={searchByName}
          className="form-control"
          placeholder="What job are you looking for?"
        />
      </div>
      <div className="col">
        <select
          aria-label="Select a location..."
          className="form-control"
          aria-label=".form-select-sm example"
          id="gender"
          name="gender"
          onChange={searchByLocation}
        >
          <option defaultValue>Search by location...</option>
          {Array.from(new Set(loadedJobs.map((j) => j.location))).map(
            (location) => (
              <option key={location} value={`${location}`}>
                {location.toUpperCase()}
              </option>
            )
          )}
        </select>
      </div>
      {jobLocation.length > 0 && jobName.length == 0 ? (
        <Button
          variant="outlined"
          color="primary"
          href={`/jobs/name/${"undefined"}/location/${jobLocation}`}
          style={{ marginTop: "3%" }}
        >
          See available jobs
        </Button>
      ) : jobName.length > 0 && jobLocation.length == 0 ? (
        <Button
          variant="outlined"
          color="primary"
          href={`/jobs/name/${jobName}/location/${"undefined"}`}
          style={{ marginTop: "3%" }}
        >
          See available jobs
        </Button>
      ) : jobLocation.length > 0 && jobName.length > 0 ? (
        <Button
          variant="outlined"
          color="primary"
          href={`/jobs/name/${jobName}/location/${jobLocation}`}
          style={{ marginTop: "3%" }}
        >
          See available jobs
        </Button>
      ) : (
        ""
      )}
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
      <BottomNav />
    </React.Fragment>
  );
}
