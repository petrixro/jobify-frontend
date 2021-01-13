import React from "react";
import Register from "./Register";
import Login from "./Login";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    localStorage.setItem("username", user.nickname);
  }

  if (localStorage.getItem("username")) {
    isAuthenticated = true;
  }

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/news">
          <img src={process.env.PUBLIC_URL +"/logo.png"} alt="jobify" style={{ width: "150px" }}></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Jobs 
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/news">
                News
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/companies">
                Companies
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                  Login
              </a>
            </li>
            <li className="nav-item">
              <a href="/register" className="nav-link">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a href="/companies/addCompany" className="nav-link">
                Add a company
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="/companies/:companyId/jobs" className="nav-link">
                Add a job
              </a>
            </li> */}
          </ul>
          {isAuthenticated && <Link to="/profile">User Profile</Link>}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
