import React from 'react'
import choose from '../../assets/choose.jpg'
import icon from '../../assets/choose-icon (1).png'
import icon2 from '../../assets/choose-icon (2).png'
import { motion } from 'motion/react'
import { fadeIn, textVariant } from '../../Utilitils/motion'
const Choose = () => {
    return (
        <>
        <motion.section
          variants={fadeIn('down', 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{once : true}}
        className='pt-[150px] pb-[106px] bg-white' id='carrers'>
            <div className="container">
                  <div className="header w-full text-center pb-[130px]">
                        <motion.h2
                        variants={textVariant(0.3)}
                        className="normal-2:text-[45px] text-[38px] font-inter font-bold text-[#151515]">Why You Should  <br />  Choose Agenc </motion.h2>
                        <motion.p
                        variants={textVariant(0.5)}
                        className="text-center normal:text-[16px] text-[14px] font-inter font-normal text-[#737373] leading-[170%] pt-4 px-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration <br />
                            in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </motion.p>
                    </div>
                    <div className="choose-main flex flex-col md-2:flex-row! justify-center gap-y-20 ">
                        <div className="right md:w-[70%] grid normal-3:grid-cols-2 grid-cols-1 gap-y-[95px] normal-3:gap-[60px] normal-3:gap-y-[90px] mx-auto px-2 normal-3:px-3">
                        <motion.div variants={fadeIn('up', 0.4)} className="choose-items mx-auto">
                            <div className="img w-full">
                                <img src={icon2} alt="" className='w-[70px]' />
                            </div>
                            <div className="text-box pt-5 px-2">
                                <h2 className='font-inter font-bold text-[25px] normal-2:text-3xl text-[#151515]'>Innovative Ideas</h2>
                                <p className='font-inter font-normal text-[#737373] text-[16px] pt-3 '>Because each project is different, we adapt
                                    <br />
                                     to your business model.</p>
                            </div>

                        </motion.div>
                        <motion.div variants={fadeIn('up', 0.5)} className="choose-items mx-auto">
                            <div className="img">
                                <img src={icon} alt="" className='w-[70px]' />
                            </div>
                            <div className="text-box pt-5">
                                <h2 className='font-inter font-bold text-[25px] text-[#151515]normal-2:text-3xl'>Innovative Ideas</h2>
                                <p className='font-inter font-normal text-[#737373] text-[16px] pt-3'>Because each project is different, we adapt
                                    <br />
                                     to your business model.</p>
                            </div>

                        </motion.div>
                        <motion.div variants={fadeIn('up', 0.6)} className="choose-items mx-auto">
                            <div className="img">
                                <img src={icon2} alt=""  className='w-[70px]'/>
                            </div>
                            <div className="text-box pt-5">
                                <h2 className='font-inter font-bold text-[25px] text-[#151515]normal-2:text-3xl'>Innovative Ideas</h2>
                                <p className='font-inter font-normal text-[#737373] text-[16px] pt-3'>Because each project is different, we adapt
                                    <br />
                                     to your business model.</p>
                            </div>

                        </motion.div>
                        <motion.div variants={fadeIn('up', 0.7)} className="choose-items mx-auto">
                            <div className="img">
                                <img src={icon} alt="" className='w-[70px]' />
                            </div>
                            <div className="text-box pt-5">
                                <h2 className='font-inter font-bold text-[25px] text-[#151515]normal-2:text-3xl'>Innovative Ideas</h2>
                                <p className='font-inter font-normal text-[#737373] text-[16px] pt-3'>Because each project is different, we adapt
                                    <br />
                                     to your business model.</p>
                            </div>

                        </motion.div>
                        
                        </div>
                        <div className="left md:w-[30%] px-4 md:p-0 mx-auto">
                        <motion.div
                        variants={fadeIn("up", 0.5)}
                        className="img w-full">
                            <img src={choose} alt="" />
                        </motion.div>
                        </div>

                    </div>
            </div>
        </motion.section>

        </>
    )
}

export default Choose