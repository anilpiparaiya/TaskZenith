import React, { useState } from "react";
import "./styles.css";

const SearchResultItem = ({ result }) => {
  const { link, title, description } = result;

  return (
    <div className="result-item">
      <a href={link} target="_blank" rel="noopener noreferrer" className="result-title">{title}</a>
      <br />
      <a href={link} target="_blank" rel="noopener noreferrer" className="result-url">{link}</a>
      <br />
      <p className="link-description">{description}</p>
    </div>
  );
};

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const searchWikipedia = () => {
    setLoading(true);
    setSearchResults([]);

    const url = `https://apis.ccbp.in/wiki-search?search=${searchInput}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const { search_results } = data;
        setSearchResults(search_results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchWikipedia();
    }
  };

  return (
    <div className="main-container">
      <div className="wiki-search-header text-center">
        <img className="wiki-logo" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png" alt="Wikipedia Logo" />
        <br />
        <input
          type="search"
          className="search-input w-100"
          placeholder="Type a keyword and press Enter to search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      {loading && (
        <div id="spinner" className="d-flex justify-content-center">
          <div className="spinner-border" role="status"></div>
        </div>
      )}
      <div id="searchResults" className="search-results">
        {searchResults.map((result, index) => (
          <SearchResultItem key={index} result={result} />
        ))}
      </div>
    </div>
  );
};

export default App;
