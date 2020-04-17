import React from "react";
import "../styles/profile.scss";
import ProfileContent from "./ProfileContent";

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
              <div className="p-container">
                <h2>{props.user.numRepos}</h2>
                <p>Repos</p>
              </div>
              <div className="p-container">
                <h2>{props.user.numFollowers}</h2>
                <p>Followers</p>
              </div>
              <div className="p-container">
                <h2>{props.user.numFollowing}</h2>
                <p>Following</p>
              </div>
            </div>
          </div>
          <img src={props.user.graphURL} />
        </div>
      </div>
      <ProfileContent user={props.user} />
    </div>
  );
}

export default Profile;
