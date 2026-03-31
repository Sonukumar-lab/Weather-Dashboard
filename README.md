# 🌦️ Weather Dashboard (ReactJS)

A professional SaaS-style Weather Dashboard built using ReactJS that provides real-time and historical weather insights using Open-Meteo APIs.

---

## 🚀 Live Demo
👉 

---

##  GitHub Repository
👉 (Add your GitHub repo link here)

---

##  Project Overview

This application automatically detects the user’s location using browser GPS and displays:

- Current weather conditions
- Hourly forecasts
- Air quality metrics
- Historical weather trends

The project is fully responsive and optimized for performance.

---

##  Tech Stack

- ReactJS (Vite)
- Recharts (Charts & Graphs)
- Axios (API Calls)
- Open-Meteo API (Weather Data)
- Open-Meteo Air Quality API

---

##  Features

### 📄 Page 1: Current Weather & Hourly Forecast

####  Weather Variables
- Current Temperature
- Max / Min Temperature
- Precipitation
- Relative Humidity
- UV Index
- Sunrise & Sunset
- Wind Speed
- Precipitation Probability

####  Air Quality Metrics
- AQI (Air Quality Index)
- PM10
- PM2.5
- Carbon Monoxide (CO)
- Nitrogen Dioxide (NO2)
- Sulphur Dioxide (SO2)

> Note: Some pollutants may not be available for all locations (API limitation).

---

###  Hourly Graphs

- Temperature (°C / °F toggle)
- Humidity
- Precipitation
- Visibility
- Wind Speed
- PM10 & PM2.5 (Combined Chart)

✔ Horizontal Scroll Supported  
✔ Responsive Design  

---

### 📄 Page 2: Historical Data

- Select date range (up to 2 years)
- Temperature (Min, Max, Mean)
- Precipitation Trends
- Wind Speed
- Sunrise & Sunset (IST)

---

##  UI/UX Features

- Modern SaaS Design
- Glassmorphism Cards
- Smooth Hover Animations
- Sticky Navbar
- Fully Mobile Responsive
- Clean Layout & Spacing

---

##  Performance

- Fast API calls
- Optimized rendering
- Lightweight components

---

## 📁 Project Structure

```
weather-dashboard/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/
│
│   ├── components/
│   │   ├── charts/
│   │   ├── layout/
│   │   ├── WeatherCard.jsx
│   │   ├── Chart.jsx
│   │   ├── Navbar.jsx
│   │   └── Loader.jsx
│
│   ├── pages/
│   │   ├── CurrentWeather.jsx
│   │   └── Historical.jsx
│
│   ├── hooks/
│   │   ├── useLocation.js
│   │   ├── useWeather.js
│   │   └── useHistorical.js
│
│   ├── services/
│   │   ├── weatherApi.js
│   │   ├── airQualityApi.js
│   │   └── historicalApi.js
│
│   ├── utils/
│   │   ├── formatDate.js
│   │   ├── convertTemp.js
│   │   ├── formatHourlyData.js
│   │   └── formatAirQuality.js
│
│   ├── context/
│   │   └── WeatherContext.jsx
│
│   ├── routes/
│   │   └── AppRoutes.jsx
│
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```
## 🌐 APIs Used

### Weather API
https://api.open-meteo.com/v1/forecast

### Air Quality API
https://air-quality-api.open-meteo.com/v1/air-quality

> No API key required (public APIs)

---

## 📍 Location Detection

- Uses browser Geolocation API
- Automatically fetches latitude & longitude
- Displays localized weather data

---

##  Known Limitations

- Some air quality values may be missing depending on location
- Historical API supports limited data combinations
- Forecast-based date filtering (past dates may not update UI fully)

---

##  Installation & Setup

```bash
# Clone repo
git clone https://github.com/your-username/weather-dashboard.git

# Go to project
cd weather-dashboard

# Install dependencies
npm install

# Run project
npm run dev
```
