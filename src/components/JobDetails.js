import React, { useContext } from "react";
import { JobContext } from "./JobsContext";
import styled from "styled-components";
import axios from "axios";

const JobImage = styled.img`
  width: 85%;
  margin: 5px;
`;

const JobContainer = styled.div`
  text-align: left;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 10px;
  background-color: aliceblue;
`;

const JobDetails = (props) => {
  const { jobs } = useContext(JobContext);
  const [loadedJobs] = jobs;
  const {
    match: { params },
  } = props;
  const jobId = params.JobID;

  function deleteJob() {
    axios.delete(`http://localhost:8080/api/v1/jobs/${jobId}`);
  }

  return (
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
      {loadedJobs
        .filter((job) => job.id === params.JobID)
        .map((job) => (
          <JobContainer className="container">
            <h1 key={job.id} style={{ marginTop: "2%" }}>
              {job.name}
            </h1>
            <hr />
            <div className="row">
              <div className="col-8">
                <div
                  className="row"
                  style={{ marginBottom: "10px", marginTop: "10px" }}
                >
                  <div className="col" style={{ marginTop: "5%" }}>
                    <strong>Type: </strong>
                    <h6 style={{ color: "green", display: "inline" }}>
                      {job.type}
                    </h6>
                  </div>
                  <div className="col" style={{ marginTop: "5%" }}>
                    <h6>
                      <strong>Location:</strong> {job.location}
                    </h6>
                  </div>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: job.description }}
                ></div>
              </div>
              <div
                style={{ textAlign: "center", marginTop: "6%" }}
                className="col-4"
              >
                <h3>{job.companyName}</h3>
                <JobImage src={job.companyLogo} alt="" />
                <br />
                <button onClick={deleteJob}>
                  <a href="/">Delete</a>
                </button>
                <div style={{ marginTop: "5%" }}>
                  <div>
                    <a href={job.applyLink}>How to apply</a>
                  </div>
                </div>
              </div>
            </div>
          </JobContainer>
        ))}
    </div>
  );
};

export default JobDetails;
