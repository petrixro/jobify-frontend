import React, { useContext, useState, useEffect } from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Axios from "axios";

const CardLinks = styled(Link)`
  color: black;
  text-decoration: none;
  :hover {
    color: #00b3e2;
    text-decoration: none;
  }
`;

export default function Companies() {
  const [companies, setCompanies] = useState([]);

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const displayJobs = (array) => {
    return array.map((company) => (
      <CardLinks key={company.id} to={"/company/" + company.id}>
        <div className="card">
          <h6 style={{ width: "50%" }}>{company.name}</h6>
          <img src={company.companyLogo} alt="" />
        </div>
      </CardLinks>
    ));
  };

  async function getCompanies() {
    await Axios.get("http://localhost:8080/api/v1/companies").then(
      (res) => setCompanies(res.data),
      setIsLoading(false)
    );
  }

  useEffect(() => {
    setIsLoading(true);
    getCompanies();
    const results = companies.filter((company) =>
      company.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const search = (
    <div>
      <form className="">
        <input
          className="form-control form-control-sm"
          placeholder="Search Company"
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
        : displayJobs(companies)}
    </div>
  );

  return (
    <React.Fragment>
      <h1>Companies</h1>
      <hr />
      {search}
      {content}
    </React.Fragment>
  );
}
