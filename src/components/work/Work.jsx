import React from 'react'
import task from '../../assets/task.jpg'
import saas from '../../assets/sass.png'
import app from '../../assets/app.png'
import landing from '../../assets/landing.png'
import dashboard from '../../assets/dashboard.png'
import webApp from '../../assets/web-app.png'

const Work = () => {
    return (
        <>
        <section className='py-[150px] bg-[#F3F3F3]' id='about'>
            <div className="container">
                     <div className="header w-full text-center pb-14">
                        <h2 className="text-[45px] font-inter font-bold text-[#151515]">Our Recent Work</h2>
                        <p className="text-center font-inter font-normal text-[#737373] leading-[150%] pt-4">There are many variations of passages of Lorem Ipsum available, but themajority
                            <span className="block">
                                have suffered alteration in some form.
                            </span>
                        </p>
                    </div>
                          <div className="services grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-2">
                                            <div className="service-items rounded-[20px] bg-white ">
                                                <div className="item-body text-center">
                                                    <div className="img w-full rounded-[20px]">
                                                        <img src={task} alt="w-[418px]!" />
                                                    </div>
                                                    <div className="text-box text-center px-11 py-8">
                                                        <h3 className='font-inter font-bold text-[25px] text-[#151515] '>Task Management App</h3>
                                                        <p className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%]'>This is a task management application that can help you be more 
                                                            </p>
                                                    </div>
                    
                                                </div>
                                            </div>
                                            <div className="service-items  rounded-[20px] bg-white ">
                                                <div className="item-body text-center">
                                                    <div className="img w-full">
                                                        <img src={saas } alt="w-full" />
                                                    </div>
                                                    <div className="text-box text-center px-11 py-8">
                                                        <h3 className='font-inter font-bold text-[25px] text-[#151515] '>Saas Landing Page Design</h3>
                                                        <p className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%]'>This is a task management application that can help you be more 
                                                            </p>
                                                    </div>
                    
                                                </div>
                                            </div>
                                            <div className="service-items  rounded-[20px] bg-white ">
                                                <div className="item-body text-center">
                                                    <div className="img w-full">
                                                        <img src={app } alt="w-full" />
                                                    </div>
                                                    <div className="text-box text-center px-11 py-8">
                                                        <h3 className='font-inter font-bold text-[25px] text-[#151515] '>Saas Landing Page Design</h3>
                                                        <p className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%]'>This is a task management application that can help you be more 
                                                            </p>
                                                    </div>
                    
                                                </div>
                                            </div>
                              
                                            <div className="service-items  rounded-[20px] bg-white ">
                                                <div className="item-body text-center">
                                                    <div className="img w-full">
                                                        <img src={landing } alt="w-full" />
                                                    </div>
                                                    <div className="text-box text-center px-11 py-8">
                                                        <h3 className='font-inter font-bold text-[25px] text-[#151515] '>Landing Page Design</h3>
                                                        <p className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%]'>This is a task management application that can help you be more 
                                                            </p>
                                                    </div>
                    
                                                </div>
                                            </div>
                                            <div className="service-items  rounded-[20px] bg-white ">
                                                <div className="item-body text-center">
                                                    <div className="img w-full">
                                                        <img src={dashboard } alt="w-full" />
                                                    </div>
                                                    <div className="text-box text-center px-11 py-8">
                                                        <h3 className='font-inter font-bold text-[25px] text-[#151515] '>Dashboard Design</h3>
                                                        <p className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%]'>This is a task management application that can help you be more 
                                                            </p>
                                                    </div>
                    
                                                </div>
                                            </div>
                                            <div className="service-items  rounded-[20px] bg-white ">
                                                <div className="item-body text-center">
                                                    <div className="img w-full">
                                                        <img src={webApp } alt="w-full" />
                                                    </div>
                                                    <div className="text-box text-center px-11 py-8">
                                                        <h3 className='font-inter font-bold text-[25px] text-[#151515] '>Web App Design</h3>
                                                        <p className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%]'>This is a task management application that can help you be more 
                                                            </p>
                                                    </div>
                    
                                                </div>
                                            </div>
                              
                                        </div>
            </div>
        </section>

        </>
    )
}

export default Work