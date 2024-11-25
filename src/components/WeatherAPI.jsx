import React, { useEffect, useState } from 'react'
import Searchbar from './Searchbar'
import WeatherDetails from './WeatherDetails'
import FiveDaysWeatherDetails from './FiveDaysWeatherDetails'
import axios from 'axios'

const WeatherAPI = () => {

  const [search, setSearch] = useState('pune')
  const [city, setCity] = useState(null)
  const [loading, setLoading] = useState(true)

  const getWeatherApi = async() =>{
      try {
            const res = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=363891edee22400a834155827242311&q=${search}&days=6&aqi=no&alerts=no`)
            setCity(res.data)
            setLoading(false)
            
      } catch (error) {
        console.log(error);
      }
  }
  useEffect(() => {
        getWeatherApi()
  }, [search])

  if(loading)return <h1> Loading... </h1>

  return (
    <div className='h-screen space-y-2 poppins-extralight'>
     
      <Searchbar search = {search} setSearch = {setSearch} />
     
      <WeatherDetails loading = {loading} city = {city} />
     
      <div className='w-[80%] mx-auto flex justify-around '>
        <ul className='flex space-x-4 text-white text-[8px] sm:text-sm font-semibold'>
        <li> Rise: {city.forecast.forecastday[0].astro.sunrise} </li>
        <li> | </li>
        <li> Set: {city.forecast.forecastday[0].astro.sunset} </li>
        <li> | </li>
        <li> High: {city.forecast.forecastday[0].day.maxtemp_c} &deg; </li>
        <li> Low: {city.forecast.forecastday[0].day.mintemp_c} &deg; </li>
        </ul>

      </div>

      <FiveDaysWeatherDetails loading = {loading} city = {city.forecast.forecastday} />

        
      
    </div>
  )
}

export default WeatherAPI
