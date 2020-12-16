import React, { useContext, useEffect, useState } from "react";
import { JobContext } from "./JobsContext";
import styled from "styled-components";
import Axios from "axios";

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
  const {
    match: { params },
  } = props;

  React.useEffect(() => {
    Axios.get("http://localhost:8080/api/v1/companies").then((res) =>
      setCompanies(res.data)
    );
  }, []);

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
              </div>
              <a href={company.websiteLink}>
                Go to {company.name} official website.
              </a>
              <div
                style={{ textAlign: "center", marginTop: "6%" }}
                className="col-4"
              >
                {/* <JobImage src={company.logo} alt="" /> */}
                <br />
              </div>
            </div>
          </CompanyContainer>
        ))}
    </div>
  );
};

export default CompanyDetails;