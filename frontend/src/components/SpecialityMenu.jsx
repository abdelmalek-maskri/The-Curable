import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

function SpecialityMenu() {
  return (
    <div id='speciality' className='flex flex-col bg-green-50 items-center gap-4 py-16 text-gray-800'>
      <h1 className='text-3xl font-medium'>Find By speciality</h1>
      <p className='sm:w-1/3 text-center text-sm '>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free</p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-auto'>
        {specialityData.map((data, index) => (
            <Link onClick={() => scrollTo(0,0)} className = 'flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`doctors/${data.speciality}`}>
                <img className='w-16 sm:w-24 mb-2' src={data.image} alt='speciality-image'/>
                <p>{data.speciality}</p>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
