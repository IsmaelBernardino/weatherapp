import React, { useEffect, useState } from 'react'
import MyLocation from '../components/MyLocation'

const Main = () => {
  const [location, setLocation] = useState([])
  const [activeLocation, setActiveLocation] = useState(false)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((succes) => {
      if (succes) {
        setLocation(succes.coords)
        setActiveLocation(true)
      }
    })
  }, [])
  
  return (
    <div className='main w-full min-h-screen flex justify-center items-center'>
      {activeLocation ? <MyLocation coords={location} /> : <div>To get the weather please allow the page to use your ubication</div>}
    </div>
  )
}

export default Main