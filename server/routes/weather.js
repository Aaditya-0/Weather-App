const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');
const { validateCity, validateCoordinates } = require('../middleware/validation');

/**
 * @route   GET /api/weather/current/:city
 * @desc    Get current weather for a city
 * @access  Public
 */
router.get('/current/:city', validateCity, weatherController.getCurrentWeather);

/**
 * @route   GET /api/weather/current/coords/:lat/:lon
 * @desc    Get current weather by coordinates
 * @access  Public
 */
router.get('/current/coords/:lat/:lon', validateCoordinates, weatherController.getCurrentWeatherByCoords);

/**
 * @route   GET /api/weather/forecast/:city
 * @desc    Get 5-day forecast for a city
 * @access  Public
 */
router.get('/forecast/:city', validateCity, weatherController.getForecast);

/**
 * @route   GET /api/weather/forecast/coords/:lat/:lon
 * @desc    Get 5-day forecast by coordinates
 * @access  Public
 */
router.get('/forecast/coords/:lat/:lon', validateCoordinates, weatherController.getForecastByCoords);

/**
 * @route   GET /api/weather/search/:query
 * @desc    Search for cities
 * @access  Public
 */
router.get('/search/:query', weatherController.searchCities);

module.exports = router;
