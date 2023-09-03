import React from "react";

const SingleCard = (props) => {
  return (
    <div
      key={props.id}
      className="hover:border hover:scale-105 border-purple-900 rounded-lg shadow-lg shadow-purple-200 cards"
    >
      <img
        src={props.image}
        className="h-52 w-full object-cover rounded-t-lg"
        alt={props.country}
      />
      <div className="p-3">
        <p className="uppercase font-bold mt-2 text-purple-700">{props.country}</p>
        <p className="text-gray mt-2">{props.description}</p>
        <p className="mt-4">{props.date}</p>
        <p className="text-gray my-2">Duration: {props.duration}</p>
        <div className="flex justify-between px-3">
          <p className="font-bold text-2xl mt-2">{props.price}€</p>
          <button onClick={props.onClick} className="bg-purple-700 text-red-50 rounded-lg px-3 py-2 hover:bg-white hover:text-purple-700">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
