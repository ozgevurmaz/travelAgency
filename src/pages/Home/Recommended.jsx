import React, { useState, useEffect } from "react";

import Button from "../../components/UIElements/Button";
import BookContent from "../../components/Form/BookContent";
import BackDrop from "../../components/UIElements/BackDrop";

const tour = [
  {
    id: 59,
    image:
      "https://images.pexels.com/photos/831056/pexels-photo-831056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    country: "Iceland",
    tour_name: "Landmannalaugar Trek",
    date: "2023-10-05",
    price_euro: 800,
    duration: "5 days",
    description:
      "Embark on a challenging yet rewarding trek through the colorful landscapes of Landmannalaugar.",
  },
];
const Recommended = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      {isOpen && <BackDrop onClick={formCloseHandler} />}

      {isOpen && <BookContent onClick={formCloseHandler}></BookContent>}
      <div className="w-full bg-purple-900 flex overflow-auto h-auto md:h-[450px] xl:h-[550px] pb-7 md:pb-0">
        <div className="flex flex-col md:flex-row gap-4">
          <h1 className="z-10 absolute text-2xl pl-10 pr-4 py-2 bg-orange-600 text-orange-100 mt-5">
            Special Offer
          </h1>
          <img
            src={tour[0].image}
            className="shadow-md shadow-inherit h-full object-contain md:ml-[-50%] lg:ml-[-25%] rounded-r-full"
          />

          <div className="flex p-5 xl:items-center xl:justify-center xl:mr-5">
            <div className="text-orange-100 flex flex-col">
              <img
                src="/plane.png"
                className="h-[500px] object-contain absolute right-0 opacity-50"
              />
              <h1 className="font-semibold text-[40px] md:text-[60px] text-center ">
                {tour[0].tour_name}
              </h1>
              <h2 className="text-2xl self-end ">
                {tour[0].duration} in{" "}
                <span className="font-bold">{tour[0].country}</span>
              </h2>

              <p className="p-4 tracking-wide text-[16px] xl:text-[22px]">
                {tour[0].description}
              </p>

              <div className="flex text-[35px] leading-[20px] justify-between mt-6 xl:mt-10">
                <Button
                  type="submit"
                  text="Book Now!"
                  otherStyles="flex px-4 py-3 bg-purple-300 rounded-lg text-purple-800 hover:bg-inherit transition duration-200 hover:text-purple-300 hover:ease-in"
                  handleClick={()=>{}}
                />

                <p className="flex flex-col items-center justify-center">
                  <span className="text-[14px] tracking-widest">
                    Start from
                  </span>
                  <span className="underline underline-offset-4 decoration-2">
                    ${tour[0].price_euro}.00
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Recommended;
