const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-container">
      <h1 className="search-title">Buscar</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Buscar canciones..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <style jsx>{`
        .search-container {
          background-color: #1e1e2f;
          padding: 30px;
          border-radius: 10px;
          border: 1px solid #2c2c3b;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 500px;
          margin: 30px auto;
          border: 1px solid #4b5563
        }

        .search-title {
          color: #ffffff;
          font-size: 24px;
          margin-bottom: 20px;
        }

        .search-input {
          width: 100%;
          padding: 12px 16px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          background-color: #f1f5f9;
          color: #1f2937;
          margin-bottom: 10px;
          outline: none;
          transition: box-shadow 0.2s ease;
        }

        .search-input:focus {
          box-shadow: 0 0 0 2px #60a5fa;
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
