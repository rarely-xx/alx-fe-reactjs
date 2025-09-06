import React from 'react';

const UserProfile = (props) => {
  return (
    <div className="user-profile" style={{border: "1px solid #ccc", padding: "16px", borderRadius: "8px", maxWidth: "300px"}}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
