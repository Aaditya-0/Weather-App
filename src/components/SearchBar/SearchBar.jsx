import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, onLocationClick }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity('');
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-container">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            🔍
          </button>
        </div>
        <button
          type="button"
          onClick={onLocationClick}
          className="location-button"
          title="Use my current location"
        >
          📍 Current Location
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
