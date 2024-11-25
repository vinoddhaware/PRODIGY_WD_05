import React from 'react'
import { FaWind } from "react-icons/fa6";
import { FaTemperatureLow } from "react-icons/fa6";
import { PiCoffeeLight } from "react-icons/pi";
import { MdOutlineVisibility } from "react-icons/md";
import { GiDespair } from "react-icons/gi";
import { FaBoltLightning } from "react-icons/fa6";

const WeatherDetails = ({loading, city}) => {
   
   if(loading)return <h1> Loading... </h1>
   
  return (
    <>
          <div className=' box-content w-[80%] flex mx-auto sm:py-5 space-x-2 rounded-lg justify-around items-center '>
            <div className='flex justify-center items-center'>
                <ul className='text-[10px] sm:text-sm font-semibold text-center  text-white space-y-2'>
                    <li className='place-items-center'><img src={city.current.condition.icon} alt={city.location.name} className='sm:h-24' /></li>
                    <li>Clear</li>
                    <li className='text-green-400'>Air Quality : Good </li>
                    <li>Date : {city.location.localtime} | {city.location.name} </li>
                </ul>
            </div>
            <div className='flex justify-center items-center'>
                <ul className='text-center space-y-4'>
                    <li className='text-xl sm:text-3xl font-bold text-[#47efca] capitalize '> {city.location.name}  </li>
                    <li className='text-sm sm:text-xl font-bold text-[#47efca] capitalize '> {city.location.region} | {city.location.country} </li>
                    <li className='text-xs sm:text-xl text-white capitalize'>{city.current.condition.text}</li>
                    <li className='text-2xl sm:text-4xl font-bold text-yellow-400 mt-2'> {city.current.temp_c}  <sup className='sm:text-2xl'> &deg;c </sup> </li>
                </ul>
            </div>
            <div className='flex justify-center items-center'>
                <ul className='text-[10px] sm:text-sm font-semibold text-center text-white space-y-2'>
                    <li className='flex justify-around items-center space-x-2'>  <PiCoffeeLight /> Feels like: <span className='text-[8px] sm:text-xs'> {city.current.feelslike_c}&deg; </span> </li>
                    <li className='flex justify-around items-center space-x-2'> <FaWind /> wind: <span className='text-[8px] sm:text-xs'> {city.current.wind_kph} km/h </span> </li>
                    <li className='flex justify-around items-center space-x-2'> <FaTemperatureLow /> Humadity: <span className='text-[8px] sm:text-xs'> {city.current.humidity} % </span> </li>
                    <li className='flex justify-around items-center space-x-2'> <MdOutlineVisibility /> visibilty: <span className='text-[8px] sm:text-xs'> {city.current.vis_km} km/h </span> </li>
                    <li className='flex justify-around items-center space-x-2'> <GiDespair /> Air pressure: <span className='text-[8px] sm:text-xs'> {city.current.pressure_mb} mBar </span> </li>
                    <li className='flex justify-around items-center space-x-2'> <FaBoltLightning /> Ultra-voilet: <span className='text-[8px] sm:text-xs'> {city.current.uv} </span>  </li>
                </ul>
            </div>
      </div>
    </>
  )
}

export default WeatherDetails
