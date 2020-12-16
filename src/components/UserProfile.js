import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { JobContext } from "./JobsContext";
import Loading from "./Loading";

const Profile = () => {
  let { user, isAuthenticated } = useAuth0();
  const { loading } = useContext(JobContext);
  const [isLoading] = loading;

  if (localStorage.getItem("username")) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  return (
    isAuthenticated &&
    (isLoading ? (
      <Loading />
    ) : (
      <div className="cardContainer">
        <div className="card" style={{ width: "20rem", marginTop: "5%" }}>
          <div className="card-body">
            <img
              src={user.picture}
              alt={user.given_name}
              className="card-img-top"
            />
            <h5 className="card-title">Nickname: {user.nickname}</h5>
            <p className="card-text">
              Full Name: {user.given_name ? user.given_name : "Unknown"}{" "}
              {user.family_name}
            </p>
            <p>Email: {user.email}</p>
            <small>Last Update: {user.updated_at}</small>
          </div>
        </div>
      </div>
    ))
  );
};

export default Profile;
