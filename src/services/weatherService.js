const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

class WeatherService {
  async getCurrentWeather(city) {
    try {
      const response = await fetch(
        `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error(`Weather data not found for ${city}`);
      }
      
      const data = await response.json();
      return this.formatCurrentWeatherData(data);
    } catch (error) {
      console.error('Error fetching current weather:', error);
      throw error;
    }
  }

  async getCurrentWeatherByCoords(lat, lon) {
    try {
      const response = await fetch(
        `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error('Weather data not found for your location');
      }
      
      const data = await response.json();
      return this.formatCurrentWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather by coordinates:', error);
      throw error;
    }
  }

  async getForecast(city) {
    try {
      const response = await fetch(
        `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error(`Forecast data not found for ${city}`);
      }
      
      const data = await response.json();
      return this.formatForecastData(data);
    } catch (error) {
      console.error('Error fetching forecast:', error);
      throw error;
    }
  }

  async getForecastByCoords(lat, lon) {
    try {
      const response = await fetch(
        `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error('Forecast data not found for your location');
      }
      
      const data = await response.json();
      return this.formatForecastData(data);
    } catch (error) {
      console.error('Error fetching forecast by coordinates:', error);
      throw error;
    }
  }

  formatCurrentWeatherData(data) {
    return {
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      pressure: data.main.pressure,
      visibility: Math.round(data.visibility / 1000), // Convert to km
      icon: data.weather[0].icon,
      cityName: data.name,
      country: data.sys.country
    };
  }

  formatForecastData(data) {
    const dailyForecasts = {};
    
    // Group forecasts by date
    data.list.forEach(item => {
      const date = new Date(item.dt * 1000).toDateString();
      if (!dailyForecasts[date]) {
        dailyForecasts[date] = {
          date: date,
          temps: [],
          descriptions: [],
          icons: [],
          humidity: [],
          windSpeed: []
        };
      }
      
      dailyForecasts[date].temps.push(item.main.temp);
      dailyForecasts[date].descriptions.push(item.weather[0].description);
      dailyForecasts[date].icons.push(item.weather[0].icon);
      dailyForecasts[date].humidity.push(item.main.humidity);
      dailyForecasts[date].windSpeed.push(item.wind.speed);
    });

    // Format daily summaries
    return Object.values(dailyForecasts)
      .slice(0, 5) // Next 5 days
      .map(day => ({
        date: day.date,
        maxTemp: Math.round(Math.max(...day.temps)),
        minTemp: Math.round(Math.min(...day.temps)),
        description: day.descriptions[0], // Most common description
        icon: day.icons[0],
        humidity: Math.round(day.humidity.reduce((a, b) => a + b) / day.humidity.length),
        windSpeed: Math.round(day.windSpeed.reduce((a, b) => a + b) / day.windSpeed.length * 10) / 10
      }));
  }
}

export const weatherService = new WeatherService();
