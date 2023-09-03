import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/UIElements/Button";
import Typewriter from "../../components/UIElements/Typewriter";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-img3 bg-cover pb-7 md:pb-0 overflow-auto h-auto md:h-[450px] xl:h-[550px]">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-[50px] tracking-wider font-semibold text-white opacity-70 text-center">
          E
          <Typewriter
            text="urope is waiting for you..."
            delay={100}
            infinite="false"
          />
        </h1>
        <Link to="/tour-packages">
          <Button
            text="Explore Now"
            type="button"
            otherStyles="text-white bg-orange-900 mt-6"
          />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
