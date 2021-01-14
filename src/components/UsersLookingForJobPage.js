import React, { useEffect, useState } from "react";
import axios from "axios";

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

export default function UsersLookingForJobPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/users/lookingForJob")
      .then((res) => setUsers(res.data));
  }, []);

  const displayUsers = (array) => {
    return array.map((user) => (
      <CardLinks key={user.id} to={"/users/" + user.id}>
        <div className="card">
          <h4 style={{ width: "50%" }}>{user.username}</h4>
          <img src={user.image} alt="" />
          <strong>
            <h5>{user.email}</h5>
          </strong>
          <p>Experience level: {console.log(user)}</p>
          <p></p>
        </div>
      </CardLinks>
    ));
  };

  return <div>{displayUsers(users)}</div>;
}
