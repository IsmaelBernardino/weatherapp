import React, { useEffect, useState } from "react";
import Axios from "axios";
import Loading from "./Loading";
import WeatherInfo from "./WeatherInfo";

const MyLocation = ({ coords }) => {
  const url = "https://api.openweathermap.org/data/2.5/weather?";
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true)

  const getLocation = async() => {
    await Axios.get(
      `${url}lat=${coords.latitude}&lon=${coords.longitude}&appid=${process.env.REACT_APP_API_KEY}`
    ).then((res) => {
      setDatas(res.data);
    })
  };
  setTimeout(() => {
    setLoading(false)
  }, 3000);
  useEffect(() => {
    getLocation();
  }, []);
  console.log('cargo');

  return (
    <div className="relative w-full h-screen">
      {loading ? <Loading/> : <WeatherInfo datas={datas} />}
    </div>
  );
};

export default MyLocation;
