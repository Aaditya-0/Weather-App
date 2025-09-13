import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="app-title">
          <span className="weather-icon">🌤️</span>
          Weather App
        </h1>
        <p className="app-subtitle">Get real-time weather updates for any location</p>
      </div>
    </header>
  );
};

export default Header;
