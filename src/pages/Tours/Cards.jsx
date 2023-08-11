import React, { useEffect, useState } from "react";

import Book from "./Book";
import BookContent from "./BookContent";
import ScrollReveal from "scrollreveal";

import SingleCard from "./SingleCard";
import BackDrop from "../../components/UIElements/BackDrop";

function Cards({ toursData }) {
  const [IsOpen, setIsOpen] = useState(false);
  useEffect(() => {
    ScrollReveal({
      distance: "100px",
      duraction: 200,
      delay: 200,
      reset: true,
    });

    ScrollReveal().reveal(".cards", { origin: "top" });
  }, []);

  const formOpenHandler = () => {
    setIsOpen(true);
  };

  const formCloseHandler = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      formCloseHandler();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      {IsOpen && <BackDrop onClick={formCloseHandler} />}

      {IsOpen && (
        <BookContent onClick={formCloseHandler}>
     
        </BookContent>
      )}
      <div className="w-full flex justify-around py-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-red-500">
          {toursData.map((tour) => (
            <SingleCard
              key={tour.id}
              id={tour.id}
              image={tour.image}
              description={tour.description}
              country={tour.country}
              duraction={tour.duraction}
              price={tour.price_euro}
              onClick={formOpenHandler}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cards;
