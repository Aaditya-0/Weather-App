/**
 * Format temperature value with degree symbol
 * @param {number} temp - Temperature value
 * @returns {string} Formatted temperature string
 */
export const formatTemperature = (temp) => {
  return `${Math.round(temp)}°C`;
};

/**
 * Get weather icon emoji based on description
 * @param {string} description - Weather description
 * @returns {string} Weather emoji
 */
export const getWeatherIcon = (description) => {
  const desc = description.toLowerCase();
  
  if (desc.includes('clear')) return '☀️';
  if (desc.includes('cloud')) return '☁️';
  if (desc.includes('rain') || desc.includes('drizzle')) return '🌧️';
  if (desc.includes('thunderstorm')) return '⛈️';
  if (desc.includes('snow')) return '❄️';
  if (desc.includes('mist') || desc.includes('fog') || desc.includes('haze')) return '🌫️';
  if (desc.includes('wind')) return '💨';
  
  return '🌤️'; // Default
};

/**
 * Get day name from date string
 * @param {string} dateString - Date string
 * @returns {string} Day name
 */
export const getDayName = (dateString) => {
  const date = new Date(dateString);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  
  if (date.toDateString() === today.toDateString()) {
    return 'Today';
  }
  
  if (date.toDateString() === tomorrow.toDateString()) {
    return 'Tomorrow';
  }
  
  return date.toLocaleDateString('en-US', { weekday: 'long' });
};

/**
 * Get formatted date for display
 * @param {string} dateString - Date string
 * @returns {string} Formatted date
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });
};

/**
 * Get wind direction from degrees
 * @param {number} degrees - Wind direction in degrees
 * @returns {string} Wind direction abbreviation
 */
export const getWindDirection = (degrees) => {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
};

/**
 * Convert meters per second to kilometers per hour
 * @param {number} mps - Speed in meters per second
 * @returns {number} Speed in kilometers per hour
 */
export const mpsToKmh = (mps) => {
  return Math.round(mps * 3.6 * 10) / 10;
};

/**
 * Get UV index level description
 * @param {number} uvIndex - UV index value
 * @returns {string} UV level description
 */
export const getUVIndexLevel = (uvIndex) => {
  if (uvIndex <= 2) return 'Low';
  if (uvIndex <= 5) return 'Moderate';
  if (uvIndex <= 7) return 'High';
  if (uvIndex <= 10) return 'Very High';
  return 'Extreme';
};

/**
 * Get air quality description
 * @param {number} aqi - Air Quality Index
 * @returns {string} Air quality description
 */
export const getAirQualityLevel = (aqi) => {
  if (aqi === 1) return 'Good';
  if (aqi === 2) return 'Fair';
  if (aqi === 3) return 'Moderate';
  if (aqi === 4) return 'Poor';
  if (aqi === 5) return 'Very Poor';
  return 'Unknown';
};
