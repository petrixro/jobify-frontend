import React, { useContext, useEffect, useState } from "react";
import { JobContext } from "./JobsContext";
import styled from "styled-components";
import axios from "axios";
import JobByCompany from "./JobByCompany.js";
import RatingComponent from "./HoverRating.js";
import HoverRating from "./HoverRating.js";

const CompanyImage = styled.img`
  width: 85%;
  margin: 5px;
`;

const CompanyContainer = styled.div`
  text-align: left;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 10px;
  background-color: aliceblue;
`;

const CompanyDetails = (props) => {
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const {
    match: { params },
  } = props;
  const companyId = params.CompanyId;

  React.useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/companies")
      .then((res) => setCompanies(res.data));
  }, []);

  function deleteCompany() {
    axios.delete(`http://localhost:8080/api/v1/companies/${companyId}`);
  }

  return (
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
      {companies
        .filter((company) => company.id === params.CompanyId)
        .map((company) => (
          <CompanyContainer className="container">
            <h1 key={company.id} style={{ marginTop: "2%" }}>
              {company.name}
            </h1>
            <hr />
            <div className="row">
              <div className="col-8">
                <div
                  className="row"
                  style={{ marginBottom: "10px", marginTop: "10px" }}
                >
                  <div className="col" style={{ marginTop: "5%" }}></div>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: company.description }}
                ></div>
                Available jobs:
                <JobByCompany companyId={company.id} />
              </div>
              <a href={`/companies/${company.id}/jobs`}>Add new job</a>
              <div
                style={{ textAlign: "left", marginTop: "" }}
                className="col-3"
              >
                <CompanyImage src={company.companyLogo} alt="" />
                <a href={company.websiteLink}>
                  Go to {company.name} official website.
                </a>
                <button type="button" class="btn btn-danger" onClick={deleteCompany}>
                  <a href="/companies">Delete</a>
                </button>
                <HoverRating />
                <br />
              </div>
            </div>
          </CompanyContainer>
        ))}
    </div>
  );
};

export default CompanyDetails;
