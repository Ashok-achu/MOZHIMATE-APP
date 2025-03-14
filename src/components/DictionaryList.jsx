import "../Styles/dictionarylist.css";

const DictionaryList = ({ words }) => {
  return (
    <div className="dictionary-container">
      {words.length === 0 ? (
        <p className="no-results">No results found.</p>
      ) : (
        <div className="grid-container">
          {words.map(([key, word]) => (
            <div key={key} className="word-card">
              <h2>{key} ({word.english})</h2>
             
              <p><strong>Ancient Tamil:</strong> {word.ancientTamil}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DictionaryList;
