import React, { useState } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SearchIcon from '@mui/icons-material/Search';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AttractionsIcon from '@mui/icons-material/Attractions';
import ScheduleIcon from '@mui/icons-material/Schedule';

function About() {

  const [showFirstDiv, setShowFirstDiv] = useState(true);
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [showThirdDiv, setShowThirdDiv] = useState(false);

  const handleFirstButtonClick = () => {
    setShowFirstDiv(true);
    setShowSecondDiv(false);
    setShowThirdDiv(false);
  };

  const handleSecondButtonClick = () => {
    setShowFirstDiv(false);
    setShowSecondDiv(true);
    setShowThirdDiv(false);
  };

  const handleThirdButtonClick = () => {
    setShowFirstDiv(false);
    setShowSecondDiv(false);
    setShowThirdDiv(true);
  };

  return (
    <main className='bg-white'>
      <div className='w-full h-78 bg-purple-900 flex flex-col justify-center items-center'>

        <div className='w-9/12 items-center justify-center flex flex-col'>
          <h1 className='text-5xl text-white flex my-5 text-center'>TOP-RATED TRAVEL AGENTS</h1>
          <p className='text-xl text-white text-center'>Connect with one of our professional travel agents —
            some of the best-reviewed agents in the nation —
            to discover how their expertise can truly enhance your journey.</p>
        </div>

        <div className='flex justify-center items-center mt-4 mb-10'>
          <div className='p-2 lg:p-5 w-4/12'>
            <h1 className='text-2xl lg:text-5xl text-white'>
              4.85/5
              <StarBorderIcon style={{ horizantalAlign: 'middle' }} />
            </h1>
            <p className='text-white'>Average Agent Rating by Past Clients</p>
          </div>
          <div className='p-2 lg:p-5 w-4/12'>
            <h1 className='text-2xl lg:text-5xl text-white'>99.23 %</h1>
            <p className='text-white'>Recommended by Past Clients</p>
          </div>
          <div className='p-2 lg:p-5 w-4/12'>
            <h1 className='text-2xl lg:text-5xl text-red-50'>90,000+</h1>
            <p className='text-red-50'>Number of Positive Reviews for Our Agents</p>
          </div>
        </div>
      </div>

      <div className='w-full h-78 flex flex-col justify-center items-center mt-[-2rem]'>
        <div className='flex flex-col lg:flex-row lg:w-9/12 justify-center items-center bg-gray-200 rounded-2xl lg:rounded-full m-2'>
          <div>
            <button className='text-2xl lg:text-3xl text-purple-600 lg:bg-gray-200 lg:py-2 px-6 rounded-full lg:mr-9 hover:bg-gray-100 active:bg-gray-100'
              onClick={handleFirstButtonClick}>
              How Does It Work?</button>
          </div>

          <div>
            <button className='text-2xl lg:text-3xl text-purple-600 lg:bg-gray-200 lg:py-2 px-6 rounded-full lg:mr-9 hover:bg-gray-100 active:bg-gray-100'
              onClick={handleSecondButtonClick}
            >Why To Use Travel Agent?</button>
          </div>

          <div>
            <button className='text-2xl lg:text-3xl text-purple-600 lg:bg-gray-200 lg:py-2 px-6 rounded-full hover:bg-gray-100 active:bg-gray-100'
              onClick={handleThirdButtonClick}>
              Why Use TravelMe?</button>
          </div>
        </div>

        <div className='flex justify-center items-center p-8'>

          {showFirstDiv && (
            <div className='w-8/12'>

                <p className='text-xl text-center pb-6'>
                  <span className='font-bold'>
                    Travel Leaders Network is the largest network of professional travel agents in Europe. </span>
                  Wherever you want to go, however you want to get there — we have a travel agent for you.</p>
       

              <div className='grid grid-cols-1 gap-2 lg:grid-cols-3 '>
                <div className='flex flex-col'>
                  <p className='font-bold text-xl'><SearchIcon />EXPLORE</p>
                  <p className='w-2/3'>Our database of travel experts & specialists</p>
                </div>

                <div className='flex flex-col'>
                  <p className='font-bold text-xl'><PhoneAndroidIcon />CONNECT</p>
                  <p className='w-2/3'>With an agent via text, email or phone</p>
                </div>

                <div className='flex flex-col'>
                  <p className='font-bold text-xl'><AttractionsIcon />ENJOY</p>
                  <p className='w-2/3'>A stress-free vacation with a professional by your side</p>
                </div>
              </div>
            </div>
          )}

          {showSecondDiv && (
            <div className='w-9/12'>
              <div className='pb-6'>
                <p className='text-xl text-center'>Using an Agent Enhances Your Overall Travel Experience.</p>
              </div>

              <div className='grid grid-cols-1 gap-2 lg:grid-cols-3'>
                <div>
                  <p className='font-bold text-xl'><ScheduleIcon />SAVE TIME</p>
                  <p className=''>Let our expertise and research help guide you</p>
                </div>

                <div>
                  <p className='font-bold text-xl'><PhoneAndroidIcon />TRAVEL BENEFITS</p>
                  <p className=''>Enjoy exclusive offers only available through travel agents</p>
                </div>

                <div>
                  <p className='font-bold text-xl'><AttractionsIcon />CUSTOM SERVICE</p>
                  <p className=''>We can craft unique experiences tailored just for you</p>
                </div>

              </div>

            </div>
          )}

          {showThirdDiv && (
            <div className='w-9/12'>

              <p className='text-xl text-center'>Local Agents. Global Experts.</p>
              <p className='text-xl text-center pt-2 pb-2 mb-2'>Our travel agents are respected worldwide by a massive network of cruise,
                resort and tour companies, giving us special advantages
                to making your vacation truly unique.</p>
                
              <div className='grid grid-cols-1 gap-2 lg:grid-cols-3'>
                <div>
                  <p className='font-bold text-4xl'>10</p>
                  <p className=''>Years Serving the Travel Industry</p>
                </div>
                <div>
                  <p className='font-bold text-4xl'>1683</p>
                  <p className=''>Travel Experts Around The World</p>
                </div>
                <div>
                  <p className='font-bold text-4xl'>289</p>
                  <p className=''>Global Partnenship</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </main >
  )
}

export default About