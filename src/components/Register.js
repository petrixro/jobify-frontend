import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [user, setUser] = useState({});

  function submitForm(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setUser({
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
    });

    axios.post("http://localhost:8080/api/v1/users", {
      email: data.get("email"),
      password: data.get("password"),
      role: "user",
      username: data.get("username")
    });
  }

  return (
    <div className="row">
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <img className="img-fluid" src={process.env.PUBLIC_URL + '/register.jpg'}/>
      </div>
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0" id="register-form">
        <form
          className="form-signin"
          method="post"
          action="/login"
          onSubmit={submitForm}
        >
          <h2 className="form-signin-heading">Welcome to Jobify!</h2>
          <p>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              placeholder="Username"
              required=""
              autoFocus=""
            />
          </p>
          <p>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email"
              required=""
              autoFocus=""
            />
          </p>
          <p>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Password"
              required=""
            />
          </p>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
