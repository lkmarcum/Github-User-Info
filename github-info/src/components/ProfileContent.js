import React, { useState, useEffect } from "react";
import axios from "axios";
import RepoCard from "./RepoCard";
import "../styles/profileContent.scss";

function ProfileContent(props) {
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  let repoPage = 1;
  let followerPage = 1;
  let followingPage = 1;

  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = () => {
    axios
      .get(props.user.repos + `?page=${repoPage}`)
      .then((data) => {
        // console.log(`Repo data: ${data.data[0].id}`);
        setRepos(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchFollowers = () => {
    axios
      .get(props.user.followers_url + `?page=${followerPage}`)
      .then((data) => {
        // console.log(`Repo data: ${data.data[0].id}`);
        setFollowers(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchFollowing = () => {
    axios
      .get(props.user.following_url + `?page=${followingPage}`)
      .then((data) => {
        // console.log(`Repo data: ${data.data[0].id}`);
        setFollowing(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="content-container">
      <div className="tab-wrapper">
        {repos.map((repo) => (
          <RepoCard repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default ProfileContent;
