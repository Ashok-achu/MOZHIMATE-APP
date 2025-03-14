import { useState } from "react";
import dictionary from "./Data/dictionary";
import SearchBar from "./components/SearchBar";
import DictionaryList from "./components/DictionaryList";
import TamilContent from "./components/TamilContent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./Styles/global.css";

const App = () => {
  const [filteredWords, setFilteredWords] = useState(Object.entries(dictionary));

  const handleSearch = (query) => {
    const searchQuery = query.toLowerCase();
    const results = Object.entries(dictionary).filter(
      ([key, word]) =>
        word.tamil.toLowerCase().includes(searchQuery) ||
        word.english.toLowerCase().includes(searchQuery) ||
        word.ancientTamil.toLowerCase().includes(searchQuery)
    );
    setFilteredWords(results);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <TamilContent />
        <SearchBar onSearch={handleSearch} />
        <DictionaryList words={filteredWords} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
