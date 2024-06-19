import React from 'react'
import menBanner from "../assets/menBanner.webp";
import kidbanner3 from "../assets/kidBanner3.jpg";
import kidbanner4 from "../assets/kidBanner4.webp";

import womenBanner3 from "../assets/womenBanner3.webp";

const BannerCategory = () => {
  return (
    <div className='mt-8'>
      <div className='flex flex-col md:flex-row justify-between bg-black gap-8'>
        <div className='relative'>
          <img src={menBanner} alt="" width={500} height={20} className='object-cover'/>
          <button className='w-96 absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 bg-white text-xl font-inter font-bold p-4 rounded-sm hover:text-white hover:bg-violet2'>
            Shop Men's Sneakers
          </button>
        </div>

        <div className='relative'>
          <img src={kidbanner3} alt="" width={497} height={20} className='object-cover'/>
          <button className='w-96 absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 bg-white text-xl font-inter font-bold p-4 rounded-sm hover:text-white hover:bg-violet2'>
            Shop Kids' Sneakers
          </button>
        </div>

        <div className='relative'>
          <img src={womenBanner3} alt="" width={500} height={20} className='object-cover'/>
          <button className='w-96 absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 bg-white text-xl font-inter font-bold p-4 rounded-sm hover:text-white hover:bg-violet2'>
            Shop Women's Sneakers
          </button>
        </div>

      </div>
    </div>
  )
}

export default BannerCategory