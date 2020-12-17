import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [company, setCompany] = useState({});

  function submitForm(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setCompany({
      name: data.get("name"),
      link: data.get("link"),
      logo: data.get("logo"),
    });

    axios.post("http://localhost:8080/api/v1/companies", {
      name: data.get("name"),
      websiteLink: data.get("link"),
      companyLogo: data.get("logo"),
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
        <h2 className="form-signin-heading">Add your company</h2>
        <p>
          <label htmlFor="name" className="sr-only">
            Company name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Company name"
            required=""
            autoFocus=""
          />
        </p>
        <p>
          <label htmlFor="link" className="sr-only">
            Company link
          </label>
          <input
            type="text"
            id="link"
            name="link"
            className="form-control"
            placeholder="Website link"
            required=""
            autoFocus=""
          />
        </p>
        <p>
          <label htmlFor="logo" className="sr-only">
            Company logo
          </label>
          <input
            type="text"
            id="logo"
            name="logo"
            className="form-control"
            placeholder="Logo"
            required=""
          />
        </p>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Add company
        </button>
      </form>
    </div>
  );
}
