import { useState } from "react";
import "../Styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
   
    <div className="search-container">
         <h1>Search for the Word</h1>
      <input 
        type="text" 
        placeholder="Search for a word..." 
        value={query} 
        onChange={handleChange} 
      />
    </div>
  );
};

export default SearchBar;
