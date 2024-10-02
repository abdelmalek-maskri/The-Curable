import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

function Footer() {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* {left section} */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt='logo'/>
            <p className='w-full md:w-2/3 text-gray-600 leading-6 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A harum illo, obcaecati deserunt amet fugit ea? Labore, dicta. Perferendis quisquam iure quos aut earum et dicta maxime voluptates, esse odit!</p>
        </div>


        {/* {center section} */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>

        </div>


        {/* {right section} */}
        <div>
            <p className='text-xl font-medium mb-5'>Get itn touch</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>0559445996</li>
                <li>abdelmalekmaskri18@gmail.com</li>
            </ul>
        </div>
      </div>

      <div>
        {/* {copy right text} */}
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2024@ THECURABLE - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
