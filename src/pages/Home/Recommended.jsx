import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import countries from './contries';

const Recommended = () => {
  const navigate = useNavigate();

  const [countryID, setCountryID] = useState(0);

  const handleCountryId = (id) => {
    setCountryID(id)
  }

  const handleCountryCards = (name) => {
    navigate(`/${name}`);
  };


  return (
    <div className='w-9/12 pt-12 m-auto flex flex-col items-center '>
      <h1 className='flex text-4xl font-header font-bold text-black'>Discover A Country</h1>
      <h3 className='flex text-gray font-bold font-sans pb-12'>All Destination</h3>

      <div className='flex bg-red-500'>

        <div className='flex flex-col p-3'>
          {countries.map((items) =>
            <button key={items.name}
              className={`rounded-full text-sm md:text-xl text-red-50 px-1 hover:bg-red-50 hover:text-red-500 
            ${items.id === countryID ? 'bg-red-50 text-red-500' : ''}`}
              onClick={() => handleCountryId(items.id)}>{items.name}</button>
          )}
        </div>

        <div className='flex flex-col bg-red-200 justify-center items-center align-baseline p-3 '>
          <div className='text-xl md:text-3xl text-center p-3 font-semibold'>{countries[countryID].name}</div>
          <img src={countries[countryID].image} className="w-[200px] h-[100px] md:w-[500px] md:h-[300px] object-cover rounded-3xl" />
          <div className='py-5 px-2 md:px-12 text-center text-sm md:text-xl text-red-500 font-header'>{countries[countryID].description}</div>

          <button onClick={() => handleCountryCards(countries[countryID].name)}
            className='bg-red-500 text-red-50 rounded-lg p-2 md:px-3 hover:bg-red-50 hover:text-red-500'>
            Discover Now</button>

        </div>

      </div>

    </div>
  )
}

export default Recommended