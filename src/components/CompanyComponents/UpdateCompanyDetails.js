import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Card } from "react-bootstrap";

export default function UpdateCompanyDetails() {
  const history = useHistory();
  const { companyId } = useParams();

  const [company, setCompany] = useState({
    name: "",
    email: "",
    websiteLink: "",
    companyLogo: "",
  });

  const onChangeHandler = (e) => {
    setCompany({
      ...company,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/companies/${companyId}`)
      .then((res) => {
        setCompany({
          name: res.data.name,
          email: res.data.email,
          websiteLink: res.data.websiteLink,
          companyLogo: res.data.companyLogo,
        });
      });
  }, [companyId]);

  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/api/v1/companies/${companyId}`, company)
      .then((response) => {
        history.push(`/company/${companyId}`);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Card
      style={{ marginTop: "3rem", marginLeft: "18rem", marginRight: "18rem" }}
    >
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>Update Company</Card.Title>
        <form>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Company Name"
              name="name"
              value={company.name}
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Email"
              name="email"
              value={company.email}
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Website Link"
              name="websiteLink"
              value={company.websiteLink}
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Company Logo"
              name="companyLogo"
              value={company.companyLogo}
              onChange={onChangeHandler}
              required
            />
          </div>
          <Button variant="success" className="mr-2" onClick={updateHandler}>
            Update
          </Button>
          <Button
            variant="warning"
            className="mr-2"
            onClick={() => history.push(`/myCompany/${companyId}`)}
          >
            Cancel
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
}
