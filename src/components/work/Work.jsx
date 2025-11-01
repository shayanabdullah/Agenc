import React from 'react'
import task from '../../assets/task.jpg'
import saas from '../../assets/sass.png'
import app from '../../assets/app.png'
import landing from '../../assets/landing.png'
import dashboard from '../../assets/dashboard.png'
import webApp from '../../assets/web-app.png'
import { motion } from 'motion/react'
import { fadeIn, textVariant } from '../../Utilitils/motion'

const Work = () => {
    return (
        <>
        <motion.section
          variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{once : true}}
        className='py-[150px] bg-[#F3F3F3]' id='about'>
            <motion.div
            
            className="container">
                     <motion.div variants={fadeIn('down', 0.3)} className="header w-full text-center pb-14 px-3">
                        <motion.h2 variants={textVariant(0.3)} className="normal:text-[45px] text-[38px] font-inter font-bold text-[#151515]">Our Recent Work</motion.h2>
                        <motion.p variants={textVariant(0.4)}  className="text-center font-inter font-normal text-[#737373] normal:text-[16px] text-[12px] leading-[150%] pt-4">There are many variations of passages of Lorem Ipsum available, but themajority
                            <span className="block">
                                have suffered alteration in some form.
                            </span>
                        </motion.p>
                    </motion.div>
                          <div className="services grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-2">
                                            <motion.div variants={fadeIn('up', 0.3)} className="service-items rounded-[20px] bg-white max-w-[424px] mx-auto">
                                                <div className="item-body text-center">
                                                    <div className="img w-full rounded-[20px]">
                                                        <img src={task} alt="lg:w-[418px]" />
                                                    </div>
                                                    <div className="text-box text-center px-11 py-8">
                                                        <h3 className='font-inter font-bold normal:text-[25px] text-xl  text-[#151515] '>Task Management App</h3>
                                                        <p className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%] normal:text-[16px] text-xs'>This is a task management application that can help you be more 
                                                            </p>
                                                    </div>
                    
                                                </div>
                                            </motion.div>
                                            <motion.div variants={fadeIn('up', 0.4)} className="service-items  rounded-[20px] bg-white max-w-[424px] mx-auto">
                                                <div className="item-body text-center">
                                                    <div className="img w-full">
                                                        <img src={saas } alt="w-full" />
                                                    </div>
                                                    <div className="text-box text-center px-11 py-8">
                                                        <h3 className='font-inter font-bold text-[25px] text-[#151515] '>Saas Landing Page Design</h3>
                                                        <p className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%] normal:text-[16px] text-xs '>This is a task management application that can help you be more 
                                                            </p>
                                                    </div>
                    
                                                </div>
                                            </motion.div>
                                            <motion.div variants={fadeIn('up', 0.5)} className="service-items  rounded-[20px] bg-white max-w-[424px] mx-auto">
                                                <div className="item-body text-center">
                                                    <div className="img w-full">
                                                        <img src={app } alt="w-full" />
                                                    </div>
                                                    <div className="text-box text-center px-11 py-8">
                                                        <h3 className='font-inter font-bold text-[25px] text-[#151515] '>Saas Landing Page Design</h3>
                                                        <p className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%] normal:text-[16px] text-xs'>This is a task management application that can help you be more 
                                                            </p>
                                                    </div>
                    
                                                </div>
                                            </motion.div>
                              
                                            <motion.div variants={fadeIn('up', 0.6)} className="service-items  rounded-[20px] bg-white max-w-[424px] mx-auto">
                                                <div className="item-body text-center">
                                                    <div className="img w-full">
                                                        <img src={landing } alt="w-full" />
                                                    </div>
                                                    <div className="text-box text-center px-11 py-8">
                                                        <h3 className='font-inter font-bold text-[25px] text-[#151515] '>Landing Page Design</h3>
                                                        <p className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%] normal:text-[16px] text-xs'>This is a task management application that can help you be more 
                                                            </p>
                                                    </div>
                    
                                                </div>
                                            </motion.div>
                                            <motion.div variants={fadeIn('up', 0.7)} className="service-items  rounded-[20px] bg-white max-w-[424px] mx-auto">
                                                <div className="item-body text-center">
                                                    <div className="img w-full">
                                                        <img src={dashboard } alt="w-full" />
                                                    </div>
                                                    <div className="text-box text-center px-11 py-8">
                                                        <h3 className='font-inter font-bold text-[25px] text-[#151515] '>Dashboard Design</h3>
                                                        <p className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%] normal:text-[16px] text-xs'>This is a task management application that can help you be more 
                                                            </p>
                                                    </div>
                    
                                                </div>
                                            </motion.div>
                                            <motion.div variants={fadeIn('up', 0.8)} className="service-items  rounded-[20px] bg-white max-w-[424px] mx-auto">
                                                <div className="item-body text-center">
                                                    <div className="img w-full">
                                                        <img src={webApp } alt="w-full" />
                                                    </div>
                                                    <div className="text-box text-center px-11 py-8">
                                                        <h3 className='font-inter font-bold text-[25px] text-[#151515] '>Web App Design</h3>
                                                        <p className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%] normal:text-[16px] text-xs'>This is a task management application that can help you be more 
                                                            </p>
                                                    </div>
                    
                                                </div>
                                            </motion.div>
                              
                                        </div>
            </motion.div>
        </motion.section>

        </>
    )
}

export default Work