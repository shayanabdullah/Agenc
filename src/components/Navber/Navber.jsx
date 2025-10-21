import React, { useState } from 'react'
import logo from '../../assets/logo.png'
const Navber = () => {
const [activeLink, setActiveLink] = useState('')

  return (
    <>
    <nav className='bg-transparent absolute top-0 left-0 z-20 w-full '>
      <div className="container">
        <div className="nav-main flex justify-between items-center py-[50px]">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="menu">
            <ul className='flex gap-[84px] items-center'>
              <li className=''><a href="#" onClick={()=> setActiveLink('home')} className={activeLink === 'home' ? 'text-[#4756DF]! ' : ""} >Home</a></li>
              <li className=''><a href="#about" className={activeLink === 'about' ? 'text-[#4756DF]!' : ""} onClick={()=> setActiveLink('about')}>About</a></li>
              <li className=''><a href="#service" className={activeLink === 'service' ? 'text-[#4756DF]!' : ""} onClick={()=> setActiveLink('service')}>Service</a></li>
              <li className=''><a href="#carrers" className={activeLink === 'carrer' ? 'text-[#4756DF]!' : ""} onClick={()=> setActiveLink('carrer')}>Careers</a></li>
              <li className=''><a href="#contact" className={activeLink === 'contact' ? 'text-[#4756DF]!' : ""} onClick={()=> setActiveLink('contact')}>Contact</a></li>    
            </ul>
          </div>
          <div className="button">
            <button className="py-4 px-9 bg-[#6A4DF4] text-white text-2xl font-inter font-medium rounded-xl cursor-pointer"> Contact </button>
          </div>
        </div>
      </div>
    </nav>

    </>
  )
}

export default Navber