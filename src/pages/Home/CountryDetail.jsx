import { ConstructionOutlined } from '@mui/icons-material';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Cards from '../Tours/Cards';

import countries from './contries';

function CountryDetail() {
  let params = useParams()

  const [tours, setTours] = useState([]);
  const [countryData, setCountryData] = useState([])
  const [country, setCountry] = useState('')

  useEffect(() => {
    const fetchToursData = async () => {
      try {
        const response = await fetch('/src/tours.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTours(data.tours);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchToursData();
  }, []);


  useEffect(() => {
    const countryName = params.country
    const filteredTours = tours.filter((tour) =>
      tour.country.toLowerCase() === countryName.toLowerCase()
    );
    setCountryData(filteredTours);
  }, [tours, params]);


  useEffect(() => {
    const countryName = params.country
    const filteredCountry = countries.filter((country) =>
      country.name.toLowerCase() === countryName.toLowerCase()
    );
    setCountry(filteredCountry);
   
  }, [params])

  

  return (
    <div>
      <div className='w-full h-78 flex flex-col justify-center items-center pt-32 md:pt-24'>
        <div className='w-9/12 items-center justify-center flex flex-col'>
          <h1 className='text-5xl text-red-500 flex my-5 text-center'>{params.country}</h1>
          <p className='text-xl text-red-500 text-center'>{country.description}</p>
        </div>
      </div>

      <div className='p-12'>
        <Cards toursData={countryData} />
      </div>
    </div>
  )
}

export default CountryDetail