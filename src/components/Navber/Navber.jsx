import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { motion } from 'motion/react';
import { fadeIn } from '../../Utilitils/motion';

const Navber = () => {
  const [activeLink, setActiveLink] = useState('')
  const [MenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* desktop navber */}

      <motion.nav
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{once : true}}
      className='bg-transparent absolute top-0 left-0 z-20 w-full md-2:block hidden ' >
        <div className="container">
          <div className="nav-main flex justify-between items-center py-[50px]">
            <div className="logo">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="menu">
              <ul className='flex lg:gap-[84px] gap-[50px] items-center'>
                <li className=''><a href="#" onClick={() => setActiveLink('home')} className={activeLink === 'home' ? 'text-[#4756DF]! ' : ""} >Home</a></li>
                <li className=''><a href="#about" className={activeLink === 'about' ? 'text-[#4756DF]!' : ""} onClick={() => setActiveLink('about')}>About</a></li>
                <li className=''><a href="#service" className={activeLink === 'service' ? 'text-[#4756DF]!' : ""} onClick={() => setActiveLink('service')}>Service</a></li>
                <li className=''><a href="#carrers" className={activeLink === 'carrer' ? 'text-[#4756DF]!' : ""} onClick={() => setActiveLink('carrer')}>Careers</a></li>
                <li className=''><a href="#contact" className={activeLink === 'contact' ? 'text-[#4756DF]!' : ""} onClick={() => setActiveLink('contact')}>Contact</a></li>
              </ul>
            </div>
            <div className="button">
              <button className="py-4 px-9 bg-[#6A4DF4] text-white text-2xl font-inter font-medium rounded-xl cursor-pointer"> <a href="#contact">Contact</a> </button>
            </div>
          </div>
        </div>
      </motion.nav>
    
      {/* mobile navber */}
<section>
        <nav className='bg-transparent absolute top-0 left-0  py-5 w-full z-98 md-2:hidden'>
        <div className="container">
          <div className="menu-main flex justify-between items-center w-full px-2">
            <div className="logo pl-3">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="menubar cursor-pointer" onClick={ ()=> setMenuOpen(true) }>
              <i class="fa-solid fa-bars text-white text-3xl cursor-pointer"></i>
            </div>
          </div>


        </div>
      </nav>

      <div className="sidebar-main relative">
        <div className={`sidebar h-screen bg-[#927df7] z-99 fixed top-0 right-0 transition-all ease-in-out duration-500 opacity-0 w-0  max-w-[300px]  ${MenuOpen === true ? 'w-full opacity-100' : ''} `}>
          <div className="menu h-full flex flex-col justify-center items-center ">
            <ul className='flex flex-col items-center justify-center gap-[50px]'>
              <li className=''><a href="#" onClick={() => setMenuOpen(false)} >Home</a></li>
              <li className=''><a href="#about"  onClick={()=> setMenuOpen(false)}>About</a></li>
              <li className=''><a href="#service" onClick={()=> setMenuOpen(false)} >Service</a></li>
              <li className=''><a href="#carrers" onClick={()=> setMenuOpen(false)} >Careers</a></li>
              <li className=''><a href="#contact" onClick={()=> setMenuOpen(false)} >Contact</a></li>
            </ul>
            <div className="button pt-9">
              <button className="py-4 px-9 bg-[#6A4DF4] text-white text-2xl font-inter font-medium rounded-xl cursor-pointer"> <a href="#contact">Contact</a> </button>
            </div>
          </div>
       <div className="icon absolute top-4 left-6 text-white text-[24px] cursor-pointer" onClick={() => setMenuOpen(false)}>
<i class="fa-solid fa-xmark"></i>
       </div>
        </div>
      </div>
        <div className={`overlay fixed top-0 left-0 w-full h-screen bg-[#39393c] opacity-75 cursor-pointer z-98 ${MenuOpen === true ? 'block' : "hidden "}`} onClick={ ()=> setMenuOpen(false)}></div>

</section>


    </>
  )
}

export default Navber