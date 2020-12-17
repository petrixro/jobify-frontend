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
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
    });
  }

  return (
    <div>
      <form
        className="form-signin"
        method="post"
        action="/login"
        onSubmit={submitForm}
      >
        <h2 className="form-signin-heading">Welcome to Jobify!</h2>
        <p>
          <label htmlFor="username" className="sr-only">
            First name
          </label>
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
          <label htmlFor="email" className="sr-only">
            First name
          </label>
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
          <label htmlFor="password" className="sr-only">
            Password
          </label>
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
          Sign in
        </button>
      </form>
    </div>
  );
}
