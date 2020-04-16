import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Profile from "./components/Profile";
import axios from "axios";

function App() {
  const [user, setUser] = useState({
    username: "",
    imgURL: "",
  });

  const searchUser = (name) => {
    axios
      .get(`https://api.github.com/users/${name}`)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <Header />
      <Search searchUser={searchUser} />
      <Profile user="user" />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
