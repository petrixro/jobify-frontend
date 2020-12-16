import React from "react";
import Logout from "./Logout";
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/news">
          <img src="./logo.png" alt="jobify" style={{ width: "150px" }}></img>
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
                Jobs <span className="sr-only">(current)</span>
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
              <Login className="nav-link" />
            </li>
            <li className="nav-item">
              <Logout className="nav-link" />
            </li>
          </ul>
          {isAuthenticated && <Link to="/profile">User Profile</Link>}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;