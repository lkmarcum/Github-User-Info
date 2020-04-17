import React from "react";
import "../styles/profile.scss";

function Profile(props) {
  return (
    <div className="profile-container">
      <div className="user-info">
        <img src={props.user.imgURL} />
        <div className="info-right">
          <div className="text-container">
            <div className="text-left">
              <h3>{props.user.name}</h3>
              <h5>{props.user.username}</h5>
              <h4>{props.user.bio}</h4>
              <h4>{props.user.location}</h4>
            </div>
            <div className="text-right">
              <p>Repos: {props.user.numRepos}</p>
              <p>Followers: {props.user.numFollowers}</p>
              <p>Following: {props.user.numFollowing}</p>
            </div>
          </div>
          <img src={props.user.graphURL} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
