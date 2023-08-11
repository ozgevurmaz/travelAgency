import React from "react";

const Cards = (props) => {

    <div key={props.id} className="hover:border hover:scale-105 border-red-500 rounded-lg shadow-lg shadow-red-500 cards">
    <img src={props.image} className="h-52 w-full object-cover rounded-t-lg" alt={props.country} />
    <div className='p-3'>
      <p className='uppercase font-bold mt-2'>{props.country}</p>
      <p className='text-gray mt-2'>{props.description}</p>
      <p className='text-gray mt-6'>Duration: {props.duration}</p>
      <p className='text-red-500 mt-2'>{props.date}</p>
      <div className='flex justify-between px-3'>
        <p className='text-red-500 font-bold text-2xl mt-2'>{props.price_euro}€</p>
        <Book />
      </div>
    </div>
  </div>
};

export default Cards;
