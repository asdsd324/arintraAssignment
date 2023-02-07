import React from "react";

const SearchForm = ({ query, setQuery }) => {
  // handle input text
  const handleTextInput = (e) => {
    console.log(e.target.value);
    // setQuery text to update value
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleTextInput}
        value={query}
        placeholder="Find a character"
      />
    </form>
  );
};

export default SearchForm;
