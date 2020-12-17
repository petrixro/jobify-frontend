import React, { useState } from "react";
import axios from "axios";

export default function AddJobForm(props) {
  const [job, setJob] = useState({});
  const {
    match: { params },
  } = props;
  const companyId = params.companyId;

  function submitForm(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setJob({
      name: data.get("name"),
      desc: data.get("desc"),
      applyLink: data.get("applyLink"),
      type: data.get("type"),
      location: data.get("location"),
    });

    axios.post(`http://localhost:8080/api/v1/companies/${companyId}/jobs`, {
      name: data.get("name"),
      description: data.get("desc"),
      applyLink: data.get("applyLink"),
      type: data.get("type"),
      location: data.get("location"),
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
        <h2 className="form-signin-heading">Add job</h2>
        <p>
          <label htmlFor="name" className="sr-only">
            Company name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Job name"
            required=""
            autoFocus=""
          />
        </p>
        <p>
          <label htmlFor="desc" className="sr-only">
            Job description
          </label>
          <textarea
            type="text"
            id="desc"
            name="desc"
            className="form-control"
            placeholder="Description"
            required=""
            autoFocus=""
          />
        </p>
        <p>
          <label htmlFor="applyLink" className="sr-only">
            Job applyLink
          </label>
          <input
            type="text"
            id="applyLink"
            name="applyLink"
            className="form-control"
            placeholder="Link to apply"
            required=""
          />
        </p>
        <p>
          <label htmlFor="type" className="sr-only">
            Job type
          </label>
          <input
            type="text"
            id="type"
            name="type"
            className="form-control"
            placeholder="Fulltime/Parttime"
            required=""
          />
        </p>
        <p>
          <label htmlFor="location" className="sr-only">
            Job location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="form-control"
            placeholder="Location"
            required=""
          />
        </p>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Add job
        </button>
      </form>
    </div>
  );
}
