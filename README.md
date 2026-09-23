# Weather Application

A simple and responsive Weather Application built with React and Vite. The application allows users to search for a city and view its current weather information using the OpenWeatherMap API.

## Features

- Search weather by city name
- Display current temperature
- Display weather condition
- Display feels-like temperature
- Display humidity
- Display wind speed
- Display weather icon
- Loading state while fetching weather data
- Error message when a city is not found
- Responsive design for desktop and mobile devices
- Cloud background and modern weather card UI

## Technologies Used

- React
- Vite
- JavaScript
- CSS
- OpenWeatherMap API
- pnpm

## Project Structure

```text
weather-app/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── weather-background.png
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── WeatherCard.jsx
│   │   └── ErrorMessage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── package.json
└── README.md