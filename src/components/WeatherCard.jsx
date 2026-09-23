function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />

      <h3>{Math.round(weather.main.temp)}°C</h3>

      <p className="condition">
        {weather.weather[0].description}
      </p>

      <div className="weather-details">
        <div className="detail-box">
          <span className="detail-value">
            {weather.main.humidity}%
          </span>
          <span className="detail-label">Humidity</span>
        </div>

        <div className="detail-box">
          <span className="detail-value">
            {weather.wind.speed} m/s
          </span>
          <span className="detail-label">Wind Speed</span>
        </div>

        <div className="detail-box">
          <span className="detail-value">
            {Math.round(weather.main.feels_like)}°C
          </span>
          <span className="detail-label">Feels Like</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard