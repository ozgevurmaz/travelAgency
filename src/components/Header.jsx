import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="absolute w-full mt-4 px-4 header">
      <div className="w-11/12 lg:w-9/12 flex flex-col md:flex-row justify-between items-center m-auto">
        <h2 className="flex text-4xl font-header font-bold text-purple-800">
          <Link to="/">TravelME</Link>
        </h2>
        <div className="flex justify-start items-start mt-4">
          <Link
            to="/tour-packages"
            className="px-4 py-2 text-[20px] bg-purple-800 rounded-2xl text-white font-bold hover:bg-inherit hover:text-purple-800"
          >
            Explore Tours
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
