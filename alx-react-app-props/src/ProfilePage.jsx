import React, { useContext } from "react";
import UserContext from "./UserContext";

const UserProfile = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>User Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default UserProfile;
