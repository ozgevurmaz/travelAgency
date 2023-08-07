import Book from './Book';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

function Cards({ toursData }) {

  useEffect(() => {

    ScrollReveal({ 
      distance: '100px',
      duraction: 200,
      delay: 200,
      reset: true
  });

    ScrollReveal().reveal('.cards', { origin: 'top' });
  }, []);

  return (

   
    <div className='w-full flex justify-around py-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-red-500'>
          {toursData.map((tour) => (
            <div key={tour.id} className="hover:border hover:scale-105 border-red-500 rounded-lg shadow-lg shadow-red-500 cards">
              <img src={tour.image} className="h-52 w-full object-cover rounded-t-lg" alt={tour.country} />
              <div className='p-3'>
                <p className='uppercase font-bold mt-2'>{tour.country}</p>
                <p className='text-gray mt-2'>{tour.description}</p>
                <p className='text-gray mt-6'>Duration: {tour.duration}</p>
                <p className='text-red-500 mt-2'>{tour.date}</p>
                <div className='flex justify-between px-3'>
                  <p className='text-red-500 font-bold text-2xl mt-2'>{tour.price_euro}€</p>
                  <Book />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Cards;
