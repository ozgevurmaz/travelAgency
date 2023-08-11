import React, { useState } from 'react';
import Cards from './Cards';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Search({ toursData }) {
  const [search, setSearch] = useState('');

  const [selectedDate, setSelectedDate] = useState(null);

  const validationSchema = Yup.object().shape({
    selectedDate: Yup.date()
      .test('is-later-than-now', 'Date must be later than now', (value) => {
        const now = new Date();
        return value && value > now;
      }),
  });

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  function compareDates(a, b) {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB; 
  }

  const filteredData = toursData
  .filter((tour) => {
    const tourDate = new Date(tour.date);
    const isCountryMatch = !search || (tour.country && tour.country.toLowerCase().includes(search));
    const isDescMatch = !search || (tour.description && tour.description.toLowerCase().includes(search));
    const isDateMatch = !selectedDate || tourDate >= selectedDate;
    return ((isCountryMatch || isDescMatch) && isDateMatch);
  })
  .sort(compareDates);


  const isDateValid = selectedDate ? validationSchema.isValidSync({ selectedDate }) : true;

  return (
    <div>
      <div className='flex items-center justify-center'>
        <div className='grid grid-cols-2 mt-[-2rem] bg-red-200 p-2 rounded-lg'>
          <input
            type="text"
            id="search"
            value={search}
            onChange={handleSearchChange}
            placeholder='Search For Tours'
            className='py-4 lg:pr-44 pl-2 border-r-2 border-red-200 border-dashed'
          />
          <div>
            <DatePicker
              className='py-4 lg:pr-44 pl-2'
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
            />
            {!isDateValid && <div className="text-red-600">Date must be later than now</div>}
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-5'>
        <div className='w-10/12'>
          <h1 className='text-5xl text-red-500'>FROM A TO Z</h1>
          <p className='text-red-300 font-bold'>OUR RANGE OF HOLIDAY DESTINATIONS IS SPREADING OVER ALL EUROPE</p>
          {filteredData.length === 0 ? (
            <p className='text-red-500 font-bold mt-7 text-center text-4xl'>No tours match the selected criteria. Please check other criteria.</p>
          ) : (
            <Cards toursData={filteredData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
