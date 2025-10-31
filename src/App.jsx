import React, { useEffect, useState } from 'react'
import Navber from './components/Navber/Navber'
import Banner from './components/Banner/Banner'
import Success from './components/Success/Success'
import Service from './components/Service/Service'
import Work from './components/work/Work'
import Choose from './components/choose/Choose'
import Review from './components/Review/Review'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import loaderImg from './assets/loader.gif'

const App = () => {
  const [loading, setLoading] = useState(true)
useEffect(() =>{
const handleLoad = () => {
setTimeout(()=>{
setLoading(false)
},100)
}

if( document.readyState === 'complete'){
  handleLoad();
}else {
  window.addEventListener("load", handleLoad);
  return ()=> window.removeEventListener('load', handleLoad);
}
}, [])


if (loading){
  return(
 <div className={`loader-container  bg-[#f1e6fd] fixed top-0 left-0 bottom-0 right-0 z-101   transition-all ease-in-out duration-300} ${loading === true ? ' block ' : 'hidden'}`}>
    <div className="loader w-full h-full  flex justify-center items-center">
      <img src={loaderImg} alt="" className='lg:w-[200px] w-[150px] z-105' />
    </div>
  </div> 
  )
}
  return (
  <>
  {/* all components */}
  <Navber/>
  <Banner/>
  <Success/>
  <Service/>
  <Work/>
  <Choose/>
  <Review/>
  <Contact/>
  <Footer/>
  </>
  )
}

export default App 
