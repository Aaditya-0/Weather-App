import React from 'react';
import { formatTemperature, getWeatherIcon, getDayName, formatDate } from '../../utils/weatherUtils';
import './ForecastList.css';

const ForecastList = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="forecast-container">
      <h3 className="forecast-title">5-Day Forecast</h3>
      
      <div className="forecast-list">
        {data.map((day, index) => (
          <div key={index} className="forecast-item">
            <div className="forecast-day">
              <span className="day-name">{getDayName(day.date)}</span>
              <span className="day-date">{formatDate(day.date)}</span>
            </div>
            
            <div className="forecast-weather">
              <div className="forecast-icon">
                {getWeatherIcon(day.description)}
              </div>
              <p className="forecast-description">{day.description}</p>
            </div>
            
            <div className="forecast-temps">
              <span className="temp-high">{formatTemperature(day.maxTemp)}</span>
              <span className="temp-low">{formatTemperature(day.minTemp)}</span>
            </div>
            
            <div className="forecast-details">
              <div className="forecast-detail">
                <span className="detail-icon">💧</span>
                <span className="detail-text">{day.humidity}%</span>
              </div>
              
              <div className="forecast-detail">
                <span className="detail-icon">💨</span>
                <span className="detail-text">{day.windSpeed} m/s</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastList;
