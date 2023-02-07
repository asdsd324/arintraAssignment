import React, { useState, useEffect } from "react";
import "./styles.css";

import SearchForm from "./SearchForm.js";
import Character from "./Character.js";

const App = () => {
  // useState search query
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // perform the search with the api
  const performLookup = () => {
    fetch(`https://swapi.dev/api/people/?search=${query}`)
      .then((response) => response.json())
      .then((data) => setResults(data.results))
      .catch((error) => console.log(error));

    setResults(results);
    console.log(results);
  };

  // run the query
  useEffect(() => {
    performLookup();
  }, [query]);

  return (
    <div className="app">
      <h1>Find A Star Wars Character</h1>

      <SearchForm query={query} setQuery={setQuery} />

      {/* Map the results */}
      {results.map((result) => (
        <Character
          key={result.name}
          name={result.name}
          birthYear={result.birth_year}
          homeworld={result.homeworld}
        />
      ))}
    </div>
  );
};

export default App;
