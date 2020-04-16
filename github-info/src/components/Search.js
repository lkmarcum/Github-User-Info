import React, { useState } from "react";

function Search(props) {
  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    props.searchUser(input);
    setInput("");
  };

  return (
    <form onSubmit={submitSearch}>
      <input
        type="text"
        placeholder="Enter a GitHub username"
        onChange={(event) => changeHandler(event)}
        value={input}
      />
      <button>Submit</button>
    </form>
  );
}

export default Search;
