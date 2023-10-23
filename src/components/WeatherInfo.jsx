import React, { useState } from "react";
import Axios from "axios";

const WeatherInfo = ({datas}) => {
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState(false)
  const [dato, setDato] = useState(null)
  const url = "https://api.openweathermap.org/data/2.5/weather?";

  const getCityWeather = () => {
    Axios.get(`${url}q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`).then((res)=>{
      setDato(res.data)
      setError(false)
    }).catch((error)=>{
      console.log(error);
      setError(true)
    })
  };

  return (
    <div className="absolute top-0 bg-black/40 w-full min-h-screen flex flex-col items-center justify-around text-gray-200">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="relative">
          <input
            onChange={(e) => setCityName(e.target.value)}
            type="text"
            name="cityName"
            placeholder="Search a City"
            className="bg-transparent border-2 border-gray-200 rounded-lg p-2 pr-14 placeholder-gray-200 font-semibold outline-none"
          />
          <button className="absolute top-2 right-2" onClick={()=> getCityWeather()} >Search</button>
          {error ? <p className="text-red-300 text-center font-semibold">Error place not found</p> : null}
        </div>
        <div className="flex justify-center items-center gap-10 md:gap-20">
          <div className="text-center">
            <img
              src={`http://openweathermap.org/img/wn/${dato ? dato?.weather[0].icon : datas?.weather[0].icon}@2x.png`}
              alt="/"
              width="100"
              height="100"
            />
            <p className="text-2xl">{dato ? dato?.weather[0].description : datas?.weather[0].description}</p>
          </div>
          <div className="text-6xl">
            {(dato ? dato.main.temp - 273.15 : datas.main.temp - 273.15).toFixed(0)}&#176;
          </div>
        </div>
      </div>
      <div className="relative w-[350px] h-[150px] text-center">
        <div className="absolute top-0 bg-gray-400/50 w-full h-full rounded p-4 ">
          <p className="text-lg font-semibold mb-4">
            The weater in {dato ? dato.name : datas.name}
          </p>
          <div className="flex justify-center gap-4">
            <p>
              Humidity: <span className="block">{dato ? dato.main.humidity : datas.main.humidity}%</span>
            </p>
            <p>
              Wind speed: <span className="block">{dato ? dato.wind.speed : datas.wind.speed}MPH</span>
            </p>
            <p>
              Country: <span className="block">{dato ? dato.sys.country : datas.sys.country}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
