# 🌤️ Weather App

A modern, responsive weather application built with React and Node.js that provides real-time weather updates and 5-day forecasts for any location worldwide.

## ✨ Features

- **Real-time Weather Data**: Get current weather conditions for any city
- **5-Day Forecast**: View detailed weather forecasts for the next 5 days
- **Geolocation Support**: Automatically get weather for your current location
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern glass-morphism design with smooth animations
- **Fast & Reliable**: Optimized performance with error handling
- **PWA Ready**: Progressive Web App capabilities for offline usage

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **CSS3** - Custom CSS with flexbox/grid and animations
- **OpenWeatherMap API** - Weather data source

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **OpenWeatherMap API** - Weather data integration

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- OpenWeatherMap API key ([Get one here](https://openweathermap.org/api))

### Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/weather-app.git
cd weather-app
```

### Install Dependencies
```bash
# Install frontend dependencies
npm install

# Install backend dependencies (if using the backend)
cd server
npm install
cd ..
```

### Environment Setup
1. Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Create a `.env` file in the root directory:
```env
REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
```

3. If using the backend, create a `.env` file in the `server` directory:
```env
OPENWEATHER_API_KEY=your_api_key_here
PORT=5000
NODE_ENV=development
```

**Note:** Replace `your_api_key_here` with your actual OpenWeatherMap API key.

## 🔧 Usage

### Development Mode
```bash
# Start frontend only
npm start

# Start both frontend and backend
npm run dev
```

The app will open in your browser at `http://localhost:3000`

### Production Build
```bash
npm run build
```

## 📱 Features Overview

### Current Weather Display
- Temperature with "feels like" information
- Weather description and icons
- Humidity, wind speed, pressure, and visibility
- Location name and last update time

### 5-Day Forecast
- Daily high/low temperatures
- Weather conditions with icons
- Humidity and wind information
- Responsive day-by-day layout

### Search Functionality
- Search by city name
- Geolocation detection
- Error handling for invalid locations

## 🎨 Design Features

- **Glass-morphism UI**: Modern frosted glass effects
- **Gradient Backgrounds**: Beautiful color gradients
- **Smooth Animations**: Hover effects and transitions
- **Responsive Layout**: Mobile-first design approach
- **Accessible**: ARIA labels and keyboard navigation

## 📂 Project Structure

```
weather-app/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── icons/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── WeatherCard/
│   │   ├── SearchBar/
│   │   ├── ForecastList/
│   │   ├── LoadingSpinner/
│   │   └── ErrorMessage/
│   ├── services/
│   │   └── weatherService.js
│   ├── utils/
│   │   └── weatherUtils.js
│   ├── styles/
│   │   ├── index.css
│   │   └── App.css
│   ├── App.jsx
│   └── index.js
├── server/ (optional backend)
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── middleware/
│   └── index.js
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/
├── package.json
└── README.md
```

## 🔗 API Endpoints (Backend)

- `GET /api/weather/current/:city` - Get current weather for a city
- `GET /api/weather/forecast/:city` - Get 5-day forecast for a city
- `GET /api/weather/current/coords/:lat/:lon` - Get weather by coordinates
- `GET /api/weather/forecast/coords/:lat/:lon` - Get forecast by coordinates

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run tests in watch mode
npm test -- --watch

# Generate coverage report
npm test -- --coverage
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

⭐ If you like this project, please give it a star on GitHub!
