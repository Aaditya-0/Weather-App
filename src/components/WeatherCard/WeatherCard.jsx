import React from 'react';
import { formatTemperature, getWeatherIcon } from '../../utils/weatherUtils';
import './WeatherCard.css';

const WeatherCard = ({ data, location }) => {
  if (!data) return null;

  const {
    temperature,
    description,
    humidity,
    windSpeed,
    pressure,
    feelsLike,
    visibility
  } = data;

  return (
    <div className="weather-card">
      <div className="weather-card-header">
        <h2 className="location-name">{location}</h2>
        <p className="last-updated">
          Updated: {new Date().toLocaleTimeString()}
        </p>
      </div>

      <div className="weather-main">
        <div className="temperature-section">
          <div className="weather-icon">
            {getWeatherIcon(description)}
          </div>
          <div className="temperature-info">
            <span className="current-temp">
              {formatTemperature(temperature)}
            </span>
            <span className="feels-like">
              Feels like {formatTemperature(feelsLike)}
            </span>
          </div>
        </div>
        
        <div className="weather-description">
          <p className="description-text">{description}</p>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">💧 Humidity</span>
          <span className="detail-value">{humidity}%</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">💨 Wind Speed</span>
          <span className="detail-value">{windSpeed} m/s</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">🌡️ Pressure</span>
          <span className="detail-value">{pressure} hPa</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">👁️ Visibility</span>
          <span className="detail-value">{visibility} km</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
