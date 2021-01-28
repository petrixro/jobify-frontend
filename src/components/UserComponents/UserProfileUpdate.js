import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "react-bootstrap";
import authHeader from "../../services/auth-header";

export default function UserProfileUpdate() {
  const history = useHistory();
  const { userId } = useParams();

  const [user, setUser] = useState({
    username: "",
    email: "",
    experience: "",
    age: "",
    image: "",
  });

  const onChangeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/users/${userId}`).then((res) => {
      setUser({
        username: res.data.username,
        email: res.data.email,
        experience: res.data.experience,
        age: res.data.age,
        image: res.data.image,
      });
    });
  }, [userId]);

  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/api/v1/users/${userId}`, user, {
        headers: authHeader(),
      })
      .then((response) => {
        history.push(`/user/myProfile/${userId}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Card
      style={{ marginTop: "3rem", marginLeft: "18rem", marginRight: "18rem" }}
    >
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>Update User</Card.Title>
        <form className="form-signin">
          <p>
            <input
              className="form-control"
              placeholder="Username"
              name="username"
              value={user.username}
              onChange={onChangeHandler}
              required
            />
          </p>
          <p>
            <input
              className="form-control"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={onChangeHandler}
              required
            />
          </p>
          <p>
            <input
              className="form-control"
              placeholder="User Experience"
              name="experience"
              value={user.experience}
              onChange={onChangeHandler}
              required
            />
          </p>
          <p>
            <input
              className="form-control"
              placeholder="User Age"
              name="age"
              value={user.age}
              onChange={onChangeHandler}
              required
            />
          </p>
          <p>
            <input
              className="form-control"
              placeholder="User Profile Picture"
              name="image"
              value={user.image}
              onChange={onChangeHandler}
              required
            />
          </p>
          <button className="btn btn-success" onClick={updateHandler}>
            Update
          </button>
          <button
            className="btn btn-danger"
            onClick={() => history.push(`/user/myProfile/${userId}`)}
          >
            Cancel
          </button>
        </form>
      </Card.Body>
    </Card>
  );
}
