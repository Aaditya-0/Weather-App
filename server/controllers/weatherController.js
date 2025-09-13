const weatherService = require('../services/weatherService');
const { AppError } = require('../middleware/errorHandler');

/**
 * Get current weather for a city
 */
const getCurrentWeather = async (req, res, next) => {
  try {
    const { city } = req.params;
    const weatherData = await weatherService.getCurrentWeather(city);
    
    res.json({
      success: true,
      data: weatherData,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get current weather by coordinates
 */
const getCurrentWeatherByCoords = async (req, res, next) => {
  try {
    const { lat, lon } = req.params;
    const weatherData = await weatherService.getCurrentWeatherByCoords(parseFloat(lat), parseFloat(lon));
    
    res.json({
      success: true,
      data: weatherData,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get 5-day forecast for a city
 */
const getForecast = async (req, res, next) => {
  try {
    const { city } = req.params;
    const forecastData = await weatherService.getForecast(city);
    
    res.json({
      success: true,
      data: forecastData,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get 5-day forecast by coordinates
 */
const getForecastByCoords = async (req, res, next) => {
  try {
    const { lat, lon } = req.params;
    const forecastData = await weatherService.getForecastByCoords(parseFloat(lat), parseFloat(lon));
    
    res.json({
      success: true,
      data: forecastData,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Search for cities
 */
const searchCities = async (req, res, next) => {
  try {
    const { query } = req.params;
    const cities = await weatherService.searchCities(query);
    
    res.json({
      success: true,
      data: cities,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCurrentWeather,
  getCurrentWeatherByCoords,
  getForecast,
  getForecastByCoords,
  searchCities
};
