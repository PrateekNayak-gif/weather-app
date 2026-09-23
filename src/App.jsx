import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import ErrorMessage from './components/ErrorMessage'

function App() {
  const [city, setCity] = useState('')
  const [searchedCity, setSearchedCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = () => {
    if (!city.trim()) {
      setError('Please enter a city name.')
      return
    }

    setError('')
    setSearchedCity(city.trim())
  }

  useEffect(() => {
    if (!searchedCity) {
      return
    }

    const fetchWeather = async () => {
      setLoading(true)
      setError('')
      setWeather(null)

      try {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            searchedCity
          )}&appid=${apiKey}&units=metric`
        )

        if (!response.ok) {
          throw new Error('City not found')
        }

        const data = await response.json()
        setWeather(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [searchedCity])

  return (
    <div className="app">
      <h1>Weather Application</h1>

      <SearchBar
        city={city}
        setCity={setCity}
        onSearch={handleSearch}
      />

      {loading && <p>Loading weather data...</p>}

      {error && <ErrorMessage message={error} />}

      {weather && !loading && <WeatherCard weather={weather} />}
    </div>
  )
}

export default App