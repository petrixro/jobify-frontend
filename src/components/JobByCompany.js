import React, { useContext, useEffect, useState } from "react";
import { JobContext } from "./JobsContext";
import styled from "styled-components";
import Axios from "axios";

const JobByCompany = (props) => {
  const [jobs, setJobs] = useState([]);
  const companyId = props.companyId;

  React.useEffect(() => {
    Axios.get(
      `http://localhost:8080/api/v1/companies/${companyId}/jobs`
    ).then((res) => setJobs(res.data));
  }, []);

  return (
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
      {jobs.map((job) => (
        <p key={job.id}>Available jobs: {job.name}</p>
      ))}
    </div>
  );
};

export default JobByCompany;
