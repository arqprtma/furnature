import React from 'react'
import Navbar from '../components/Navigation/NavigationFix'
import Services from '../components/Services/Index'
import Products from '../components/Products/Index'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
        <Navbar />
        {/* banner */}
          <div className="bg-banner-home min-h-screen ">
            <div className="card pt-20 lg:pt-0 lg:bg-white lg:w-[643px] lg:h-[443px] lg:float-right lg:me-10 lg:mt-20 ">
                  <h4 className='ps-10 pt-10 pb-5 text-base lg:text-[24px] tracking-[3px]'>New Arrival</h4>
                  <h3 className='ps-10  text-4xl lg:text-[52px] font-[700] lg:leading-[75px]'>Discover Our New Collection</h3>
                  <p className='ps-10 pt-5 text-base lg:text-[18px] font-[300] lg:font-[400] leading-7 lg:leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                 <Link className='ms-10 mt-10 decoration-sky-500 border-black border-2 w-36 h-10 text-center leading-[2.3] cursor-pointer uppercase'>BUY NOW</Link>
            </div>
        </div>
        {/* end banner */}
        <Services />
        <Products />
      
    </div>
  )
}

export default About