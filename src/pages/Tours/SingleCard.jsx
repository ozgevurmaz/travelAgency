import React from "react";

const SingleCard = (props) => {
  return (
    <div
      key={props.id}
      className="hover:border hover:scale-105 border-red-500 rounded-lg shadow-lg shadow-red-500 cards"
    >
      <img
        src={props.image}
        className="h-52 w-full object-cover rounded-t-lg"
        alt={props.country}
      />
      <div className="p-3">
        <p className="uppercase font-bold mt-2">{props.country}</p>
        <p className="text-gray mt-2">{props.description}</p>
        <p className="text-gray mt-6">Duration: {props.duration}</p>
        <p className="text-red-500 mt-2">{props.date}</p>
        <div className="flex justify-between px-3">
          <p className="text-red-500 font-bold text-2xl mt-2">{props.price}€</p>
          <button onClick={props.onClick} className="bg-red-500 text-red-50 rounded-lg px-3 py-2 hover:bg-white hover:text-red-500">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
