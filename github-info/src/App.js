import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import axios from "axios";

function App() {
  const [user, setUser] = useState({
    username: "",
    name: "",
    graphURL: "",
    company: "",
    email: "",
    location: "",
    bio: "",
    imgURL: "",
    profile: "",
    repos: "",
    numRepos: "",
    followers: "",
    following: "",
    numFollowers: "",
    numFollowing: "",
  });

  const searchUser = (name) => {
    axios
      .get(`https://api.github.com/users/${name}`)
      .then((data) => {
        console.log(data.data);
        setUser({
          ...user,
          username: data.data.login,
          name: data.data.name,
          graphURL: `http://ghchart.rshah.org/${data.data.login}`,
          company: data.data.company,
          email: data.data.email,
          location: data.data.location,
          bio: data.data.bio,
          imgURL: data.data.avatar_url,
          profile: data.data.html_url,
          repos: data.data.repos_url,
          numRepos: data.data.public_repos,
          followers: data.data.followers_url,
          following: data.data.following_url,
          numFollowers: data.data.followers,
          numFollowing: data.data.following,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="main-container">
        <Header />
        <Search searchUser={searchUser} />
        {user.username != "" ? <Profile user={user} /> : null}
      </div>
    </div>
  );
}

export default App;
