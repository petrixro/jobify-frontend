import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../UtilComponents/Loading";

import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "@material-ui/core/Container";

const CardLinks = styled(Link)`
  color: black;
  text-decoration: none;
  :hover {
    color: #00b3e2;
    text-decoration: none;
  }
`;

export default function UsersLookingForJobPage() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/users/lookingForJob")
      .then((res) => setUsers(res.data));

    const results = users.filter(
      (u) =>
        u.username
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        u.experience.includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const search = (
    <div className="mt-5">
      <form className="">
        <input
          className="form-control form-control-sm"
          placeholder="Search user"
          onChange={handleChange}
          value={searchTerm}
          type="text"
          name="search-job"
          style={{ width: "20%", margin: "auto" }}
        ></input>
      </form>
    </div>
  );

  const searchByExperience = (
    <div className="mt-5">
      <form className="">
        <select class="form-select" name="experience" onChange={handleChange}>
          <option selected value="1">
            Beginner
          </option>
          <option value="2">Junior</option>
          <option value="3">Experienced</option>
          <option value="4">Expert</option>
          <option value="5">Expert</option>
        </select>
        ;
      </form>
    </div>
  );

  const displayUsers = (array) => {
    return array.map((user) => (
      <CardLinks key={user.id} to={"/users/" + user.id}>
        <div className="card mt-3">
          <h4 style={{ width: "50%" }}>{user.username}</h4>
          <img src={user.image} alt="" />
          <strong>
            <h5>{user.email}</h5>
          </strong>
          <p>Experience level: {user.experience}</p>
          <p></p>
        </div>
      </CardLinks>
    ));
  };

  const content = isLoading ? (
    <Loading />
  ) : (
    <div>
      {searchResults.length > 0
        ? displayUsers(searchResults)
        : displayUsers(users)}
    </div>
  );

  return (
    <Container>
      {search}
      {searchByExperience}
      {content}
    </Container>
  );
}
