import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {

    return (

        <header className='absolute w-full mt-4 px-4 header'>
            <div className='w-11/12 lg:w-9/12 flex flex-col lg:flex-row justify-between m-auto'>
                <h2 className='flex text-4xl font-header font-bold text-red-600'>
                    <Link to='/'>TravelME</Link>
                </h2>
                <div className='flex justify-between items-center menu mt-4 md:justify-end'>
                    <Link to='/tour-packages' className='px-4 py-2 text-xl bg-red-600 rounded-2xl text-white font-bold hover:bg-inherit hover:text-red-600'>Explore Tours</Link>
                </div>
            </div>
        </header>

    )
}

export default Header