import React, { useState, useEffect } from "react";

import Search from "./Search";

const DUMMY_TOURS = [
  {
    id: 58,
    image: "https://cdn.getyourguide.com/img/tour/6386173fdb322.jpeg/146.jpg",
    country: "Iceland",
    tour_name: "Golden Circle Adventure",
    date: "2023-09-20",
    price_euro: 100,
    duration: "1 day",
    description:
      "Explore Iceland's famous Golden Circle, featuring geysers, waterfalls, and the Þingvellir National Park.",
  },
  {
    id: 68,
    image:
      "https://img.theculturetrip.com/wp-content/uploads/2015/11/3706932185_c5f8cd107d_b.jpg",
    country: "Slovakia",
    tour_name: "Bratislava Old Town Walk",
    date: "2023-09-22",
    price_euro: 50,
    duration: "1 day",
    description:
      "Stroll through the charming old town of Bratislava, with its historic landmarks and vibrant atmosphere.",
  },
  {
    id: 29,
    image:
      "https://images.pexels.com/photos/1071188/pexels-photo-1071188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    country: "Poland",
    tour_name: "Auschwitz-Birkenau Memorial",
    date: "2023-10-15",
    price_euro: 120,
    duration: "1 day",
    description:
      "Visit the poignant Auschwitz-Birkenau Memorial to learn about the history of the Holocaust.",
  },
  {
    id: 26,
    image:
      "https://images.pexels.com/photos/967292/pexels-photo-967292.jpeg?auto=compress&cs=tinysrgb&w=1200",
    country: "Netherlands",
    tour_name: "Amsterdam Canal Cruise",
    date: "2023-09-20",
    price_euro: 70,
    duration: "1 day",
    description:
      "Experience the beauty of Amsterdam from its picturesque canals on a relaxing boat cruise.",
  },
  {
    id: 16,
    image:
      "https://images.pexels.com/photos/951531/pexels-photo-951531.jpeg?auto=compress&cs=tinysrgb&w=1200",
    country: "Greece",
    tour_name: "Acropolis and Ancient Athens Tour",
    date: "2023-09-08",
    price_euro: 90,
    duration: "1 day",
    description:
      "Explore the iconic Acropolis and immerse yourself in the ancient history of Athens.",
  },
  {
    id: 12,
    image:
      "https://images.pexels.com/photos/4452037/pexels-photo-4452037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    country: "France",
    tour_name: "Louvre Museum Express",
    date: "2023-08-25",
    price_euro: 70,
    duration: "1 day",
    description:
      "Discover the world-renowned Louvre Museum in Paris, home to thousands of priceless works of art.",
  },
  {
    id: 11,
    image:
      "https://images.pexels.com/photos/3569950/pexels-photo-3569950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    country: "Indonesia",
    tour_name: "Komodo Island Expedition",
    date: "2023-10-20",
    price_euro: 1000,
    duration: "7 days",
    description:
      "Encounter the prehistoric Komodo dragons and explore the stunning landscapes of Komodo Island.",
  },
  {
    id: 8,
    image:
      "https://images.pexels.com/photos/3889704/pexels-photo-3889704.jpeg?auto=compress&cs=tinysrgb&w=1200",
    country: "Turkey",
    tour_name: "Cappadocia Hot Air Balloon Experience",
    date: "2023-09-20",
    price_euro: 500,
    duration: "2 days",
    description:
      "Float above the breathtaking landscapes of Cappadocia in a magical hot air balloon ride.",
  },
  {
    id: 10,
    image:
      "https://images.pexels.com/photos/3417701/pexels-photo-3417701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    country: "Indonesia",
    tour_name: "Bali Beach Bliss",
    date: "2023-10-10",
    price_euro: 400,
    duration: "4 days",
    description:
      "Relax and unwind on the beautiful beaches of Bali, soaking in the sun and the serene atmosphere.",
  },
  {
    id: 15,
    image:
      "https://www.germany.travel/media/redaktion/natur_aktiv_content/img_9202.jpg",
    country: "Germany",
    tour_name: "Black Forest Nature Retreat",
    date: "2023-10-18",
    price_euro: 900,
    duration: "5 days",
    description:
      "Escape to the tranquility of the Black Forest, surrounded by lush forests and charming villages.",
  },
  {
    id: 25,
    image:
      "https://images.pexels.com/photos/17352591/pexels-photo-17352591/free-photo-of-kent-simgesi-kapi-hindistan-turizm.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    country: "Spain",
    tour_name: "Andalusian Heritage Trail",
    date: "2023-10-01",
    price_euro: 1100,
    duration: "5 days",
    description:
      "Explore the rich heritage of Andalusia, from the Moorish palaces of Alhambra to the charming streets of Seville.",
  },
  {
    id: 44,
    image:
      "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1200",
    country: "United Kingdom",
    tour_name: "London City Highlights",
    date: "2023-09-22",
    price_euro: 70,
    duration: "1 day",
    description:
      "Discover the iconic landmarks of London, from the Tower Bridge to Buckingham Palace.",
  },
];

function TourPackages() {
  return (
    <div>
      <div className="w-full bg-img2 bg-cover pt-44 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-header font-bold text-purple-50 ">
            All Tours
          </h1>
        </div>
      </div>

      <Search toursData={DUMMY_TOURS} />
    </div>
  );
}

export default TourPackages;
