import React, { useState, useEffect } from "react";

import Search from "./Search";

function TourPackages() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchToursData = async () => {
      try {
        const response = await fetch("/src/tours.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTours(data.tours);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchToursData();
  }, []);

  return (
    <div>
      <div className="w-full bg-img2 bg-cover pt-44 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-header font-bold text-red-50">
            All Tours
          </h1>
          <h3 className="text-2xl text-red-50">
            Check out our specially prepared Tours for you.
          </h3>
        </div>
      </div>

      <Search toursData={tours} />
    </div>
  );
}

export default TourPackages;
