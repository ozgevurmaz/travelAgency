import React from 'react'

import Recommended from './Recommended'
import Contact from './Contact'
import Information from './Information'
import About from './About'

function Home() {
  
  return (
    <div>

      <div className="w-full bg-img1 bg-cover py-44">
        <div className='mx-auto'>
          <div className='ml-10 w-5/12 md:ml-24'>
            <h1 className='md:text-5xl text-2xl font-header font-bold text-red-500'>Book an exclusive!</h1>
            <h3 className='text-2xl'>home for your personal travel</h3>
            <p className='py-10 '>Each property is hand-picked, personally visited and cannot be found elsewhere.</p>
            <button className='px-4 text-xl bg-red-600 rounded-2xl text-white-red font-bold hover:bg-inherit hover:text-red-600'>Explore homes</button>
          </div>
        </div>
      </div>
      <Contact />
      <Information />
      <About />
      <Recommended />

    </div>
  )
}

export default Home
