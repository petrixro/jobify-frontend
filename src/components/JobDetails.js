import React, { useContext } from "react";
import { JobContext } from "./JobsContext";
import styled from "styled-components";
import axios from "axios";

const JobImage = styled.img`
  width: 10%;
`;

const JobContainer = styled.div`
  text-align: left;
  padding: 1%
  border-radius: 10px;
  background-color: #eefcff;
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
            <div className="row">
            
            <h1 key={job.id} style={{ marginTop: "2%" }}>
              {job.name}
            </h1>
            <JobImage src={job.company.companyLogo} alt="" />
            <small>Published on {job.publishedDate}</small>
              <div className="col-8 col-md-12 mb-4 mb-md-0">
                <div className="row">
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
                  className="row"
                  style={{ marginBottom: "10px", marginTop: "10px" }}
                >
                <div className="col"
                  dangerouslySetInnerHTML={{ __html: job.description }}
                ></div>
                <div
                style={{ textAlign: "center", marginTop: "6%" }}
                className="col-lg-4 col-md-5 mb-4 mb-md-0"
              >
                {/* <h3>{job.company.name}</h3> */}
                
                <br />
                  <a href="/" className="btn btn-danger" role="button" onClick={deleteJob}>Delete job</a><br /><br />
                  <a href={job.applyLink} target="_blank" rel="noreferrer" className="btn btn-success" role="button">Apply</a><br /><br />
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
