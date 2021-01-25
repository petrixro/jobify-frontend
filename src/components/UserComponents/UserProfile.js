import React, { useContext } from "react";
import { JobContext } from "../JobComponents/JobsContext";
import Loading from "../UtilComponents/Loading";

const Profile = () => {
  const { loading } = useContext(JobContext);
  const [isLoading] = loading;

  return (
    <div className="cardContainer">
      <div className="card" style={{ width: "20rem", marginTop: "5%" }}></div>
    </div>
  );
};

export default Profile;
