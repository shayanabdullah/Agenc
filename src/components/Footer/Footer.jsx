import React from 'react'
import logo from '../../assets/favicon.png'
const Footer = () => {
    return (
        <>
        <section className='md:py-[150px] py-20 bg-white' id='footer'>
            <div className="container">
                <div className="footer-main flex flex-col md:flex-row  gap-[130px]">
                    <div className="right md:w-[30%]">
                        <div className="text">
                            {/* logo */}
                            <div className="logo flex items-center gap-2 pb-8 pl-4 md:pl-0">
                                <img src={logo} alt="" />
                                <h2 className='font-inter font-semibold text-4xl text-[#151515]'>Agenc</h2>
                            </div>
                            <p className='text-[16px] font-inter font-normal text-[#737373] leading-[170%] pl-4 md:pl-0 '>I had a good experience while using this app, 
                                <br />
                                what fascinated me was the live tracking
                                <br />
                                 feature There are many variations of passages
                                 <br />
                                  of Lorem Ipsum available, but the majority.</p>
                        </div>
                    </div>
                    <div className="left md:w-[70%]">
                        <div className="text-box grid xs:grid-cols-2 normal:grid-cols-3 md:grid-cols-4 gap-y-[50px] ">
                            <div className="about pl-4 md:pl-4">
                                <h2 className='font-inter font-semibold text-xl pb-[41px]'>About</h2>
                                <ul className='leading-[260%]'>
                                    <li className='text-[16px] font-inter font-normal text-[#737373] cursor-pointer'><a href="#about">About Us</a></li>
                                <li className='text-[16px] font-inter font-normal text-[#737373] cursor-pointer'>Features</li>
                                <li className='text-[16px] font-inter font-normal text-[#737373] cursor-pointer'>News</li>
                                <li className='text-[16px] font-inter font-normal text-[#737373] cursor-pointer'>Careers</li>
                                </ul>

                            </div>
                            <div className="company pl-4 md:pl-4">
                                <h2 className='font-inter font-semibold text-xl pb-[41px]'>Company</h2>
                                <ul className='leading-[260%]'>
                                    <li className='text-[16px] font-inter font-normal text-[#737373] cursor-pointer'><a href="#about">Our Team</a></li>
                                <li className='text-[16px] font-inter font-normal text-[#737373] cursor-pointer'>Partner With Us</li>
                                <li className='text-[16px] font-inter font-normal text-[#737373] cursor-pointer'>FAQ</li>
                                <li className='text-[16px] font-inter font-normal text-[#737373] cursor-pointer'>Blog</li>
                                </ul>

                            </div>
                            <div className="Support pl-4 md:pl-4">
                                <h2 className='font-inter font-semibold text-xl pb-[41px]'>Support</h2>
                                <ul className='leading-[260%]'>
                                    <li className='text-[16px] font-inter font-normal text-[#737373] cursor-pointer'><a href="#about">About</a></li>
                                <li className='text-[16px] font-inter font-normal text-[#737373] cursor-pointer'>Support Center</li>
                                <li className='text-[16px] font-inter font-normal text-[#737373] cursor-pointer'>Contact Us</li>
                                <li className='text-[16px] font-inter font-normal text-[#737373] cursor-pointer'>Accesbility</li>
                                </ul>

                            </div>
                            <div className="Get-in-touch pl-4 md:pl-4">
                                <h2 className='font-inter font-semibold text-xl pb-[41px]'>Get in touch</h2>
                                <ul className='leading-[260%]'>
                                    <li className='text-[16px] font-inter font-normal text-[#737373] cursor-pointer'><a href="#about">info@gmail.com</a></li>
                                <li className='text-[16px] font-inter font-normal text-[#737373] cursor-pointer'>+88 0121 0212</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
         <div className="container">
             <footer className='py-8 border-t border-[#E8E8E8] bg-white text-center'>
  <p className='text-[16px] font-inter font-normal text-[#cccccc] cursor-pointer'>All credit goes to Shayan Abdullah</p>
                </footer>
         </div>

        </>
    )
}

export default Footer