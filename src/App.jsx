import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import WeatherCard from './components/WeatherCard/WeatherCard';
import SearchBar from './components/SearchBar/SearchBar';
import ForecastList from './components/ForecastList/ForecastList';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { weatherService } from './services/weatherService';
import './styles/App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState('');

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    
    try {
      const [current, forecast] = await Promise.all([
        weatherService.getCurrentWeather(city),
        weatherService.getForecast(city)
      ]);
      
      setWeatherData(current);
      setForecastData(forecast);
      setLocation(city);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      console.error('Weather API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (city) => {
    if (city.trim()) {
      fetchWeatherData(city);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            setLoading(true);
            const [current, forecast] = await Promise.all([
              weatherService.getCurrentWeatherByCoords(latitude, longitude),
              weatherService.getForecastByCoords(latitude, longitude)
            ]);
            
            setWeatherData(current);
            setForecastData(forecast);
            setLocation('Your Location');
          } catch (err) {
            setError('Failed to fetch weather data for your location.');
          } finally {
            setLoading(false);
          }
        },
        () => {
          setError('Unable to access your location. Please search for a city.');
        }
      );
    }
  };

  useEffect(() => {
    // Load default location on app start
    fetchWeatherData('London');
  }, []);

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <SearchBar onSearch={handleSearch} onLocationClick={getCurrentLocation} />
        
        {loading && <LoadingSpinner />}
        
        {error && <ErrorMessage message={error} onRetry={() => fetchWeatherData(location)} />}
        
        {weatherData && !loading && !error && (
          <>
            <WeatherCard data={weatherData} location={location} />
            {forecastData && <ForecastList data={forecastData} />}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
