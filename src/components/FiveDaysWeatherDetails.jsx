import React from 'react'

const FiveDaysWeatherDetails = ({loading, city}) => {
  if(loading)return <h1> Loading... </h1>
  console.log(city);

  // city.map((curForcast) =>{
  //   return console.log(curForcast.day.avgtemp_c);
  // })
  
  return (
    <>
      <div className='w-[80%] mx-auto  grid grid-cols-2 lg:grid-cols-3 place-items-center text-[10px] sm:text-base'>
        {
          city.map((curForcast, index) =>{
            return (
              <div key={index} className='text-white shadow-[10px_10px_0px_black] mt-4 sm:h-32 w-[80%] bg-black/60 rounded-xl text-center sm:flex sm:justify-around items-center'>
              <div>
                  <ul>
                    <li> {curForcast.day.condition.text} </li>
                    <li> {curForcast.day.avgtemp_c}&deg; </li>
                  </ul>
              </div>
              <div>
                  <ul>
                    <li> {curForcast.date} </li>
                    <li> {curForcast.hour[0].humidity}% </li>
                    <li> {curForcast.day.maxwind_kph} km/h </li>
                  </ul>
              </div>
              <div>
                <img src={curForcast.day.condition.icon} alt="" />
              </div>
            </div>
            )
          })

        }

      </div>
    </>
  )
}

export default FiveDaysWeatherDetails
