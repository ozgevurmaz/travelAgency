import React from "react";

import Contact from "./Contact";
import Information from "./Information";
import About from "./About";
import Recommended from "./Recommended";
import Banner from "./Banner";

function Home() {
  return (
    <div>
      <div className="w-full bg-img1 bg-cover py-44 h-[450px]">
        <div className="mx-auto  ">
          <div className="ml-10 w-7/12 md:ml-24 text-purple-900 ">
            <h1 className="xl:text-[55px] md:text-5xl text-2xl font-header font-bold ">
              It's time to travel
            </h1>
            <h3 className="text-medium md:text-2xl text-gray-700 ">Explore the world with us!</h3>
          </div>
        </div>
      </div>
      <Contact />
      <Recommended />
      <Information />
      <Banner />
      <About />
    </div>
  );
}

export default Home;
