import web from '../../assets/web.png'
import ui from '../../assets/ui.png'
import ai from '../../assets/ai.png'
import motionimg from '../../assets/motion.png'
import ThreeD from '../../assets/3d.png'
import digital from '../../assets/digital.png'
import { motion } from 'motion/react'
import { fadeIn, textVariant } from '../../Utilitils/motion'
import { text } from 'motion/react-client'

const Service = () => {
    return (
        <>
            <motion.section
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="py-[150px] bg-white" id='service'>
                <div className="container">
                    <motion.div
                        variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                    className="header w-full text-center pb-14 px-2">
                        <motion.h2
                        variants={textVariant(0.5)}
                        className="text-[45px] font-inter font-bold text-[#151515]">Our Provided Services
                        </motion.h2>
                        <motion.p
                        variants={textVariant(0.6)}
                        className="text-center font-inter font-normal text-[#737373] leading-[150%] pt-4">There are many variations of passages of Lorem Ipsum available, but themajority
                            <span className="block">
                                have suffered alteration in some form.
                            </span>
                        </motion.p>
                    </motion.div>
                    <div className="services grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        <motion.div variants={fadeIn('up', 0.3)} className="service-items normal-2:px-[49px] pt-20 pb-[47px] rounded-[20px] border-2 border-transparent hover:border-black/25 hover:shadow-xl duration-300 px-2">
                            <div className="item-body text-center">
                                <motion.div
                                variants={fadeIn('up', 0.4)}
                                className="img w-full flex justify-center">
                                    <img src={web} alt="" />
                                </motion.div>
                                <div className="text-box text-center">
                                    <motion.h3 
                                    variants={fadeIn('up', 0.5)}
                                    className='font-inter font-bold md:text-[25px] text-3xl text-[#151515] pt-10'>Web Design</motion.h3>
                                    <motion.p 
                                    variants={fadeIn('up', 0.6)}
                                    className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words
                                        <br />  which don't look.
                                    </motion.p>
                                </div>

                            </div>
                        </motion.div>
                        <motion.div variants={fadeIn('up', 0.4)}  className="service-items normal-2:px-[49px] pt-20 pb-[47px] rounded-[20px] border-2 border-transparent hover:border-black/25 hover:shadow-xl  duration-300 px-2">
                            <div className="item-body text-center">
                                <motion.div 
                                variants={fadeIn('up', 0.4)}
                                className="img w-full flex justify-center">
                                    <img src={ui} alt="" />
                                </motion.div>
                                <div className="text-box text-center">
                                    <motion.h3 variants={textVariant(0.4)} className='font-inter font-bold md:text-[25px] text-3xl text-[#151515] pt-10'>UI/UX Design</motion.h3>
                                    <motion.p variants={textVariant(0.5)} className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words
                                        <br />  which don't look.
                                    </motion.p>
                                </div>

                            </div>
                        </motion.div>
                        <motion.div variants={fadeIn('up', 0.5)}  className="service-items normal-2:px-[49px] pt-20 pb-[47px] rounded-[20px] border-2 border-transparent hover:border-black/25 hover:shadow-xl  duration-300 px-2">
                            <div className="item-body text-center">
                                <div className="img w-full flex justify-center">
                                    <img src={ai} alt="" />
                                </div>
                                <div className="text-box text-center">
                                    <h3 className='font-inter font-bold md:text-[25px] text-3xl text-[#151515] pt-10'>Machine Learning and AI</h3>
                                    <p className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words
                                        <br />  which don't look.
                                    </p>
                                </div>

                            </div>
                        </motion.div>
                        <motion.div variants={fadeIn('up', 0.6)}  className="service-items normal-2:px-[49px] pt-20 pb-[47px] rounded-[20px] border-2 border-transparent hover:border-black/25 hover:shadow-xl  duration-300 px-2">
                            <div className="item-body text-center">
                                <div className="img w-full flex justify-center">
                                    <img src={motionimg} alt="" />
                                </div>
                                <div className="text-box text-center">
                                    <h3 className='font-inter font-bold md:text-[25px] text-3xl text-[#151515] pt-10'>Motion Graphics</h3>
                                    <p className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words
                                        <br />  which don't look.
                                    </p>
                                </div>

                            </div>
                        </motion.div>
                        <motion.div variants={fadeIn('up', 0.7)}  className="service-items normal-2:px-[49px] pt-20 pb-[47px] rounded-[20px] border-2 border-transparent hover:border-black/25 hover:shadow-xl  duration-300 px-2">
                            <div className="item-body text-center">
                                <div className="img w-full flex justify-center">
                                    <img src={ThreeD} alt="" />
                                </div>
                                <div className="text-box text-center">
                                    <h3 className='font-inter font-bold md:text-[25px] text-3xl text-[#151515] pt-10'>3D Animation</h3>
                                    <p className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words
                                        <br />  which don't look.
                                    </p>
                                </div>

                            </div>
                        </motion.div>
                        <motion.div variants={fadeIn('up', 0.8  )}  className="service-items normal-2:px-[49px] pt-20 pb-[47px] rounded-[20px] border-2 border-transparent hover:border-black/25 hover:shadow-xl  duration-300 px-2">
                            <div className="item-body text-center">
                                <div className="img w-full flex justify-center">
                                    <img src={digital} alt="" />
                                </div>
                                <div className="text-box text-center">
                                    <h3 className='font-inter font-bold text-[25px] text-[#151515] pt-10'>Digital Marketing</h3>
                                    <p className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words
                                        <br />  which don't look.
                                    </p>
                                </div>

                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

        </>
    )
}

export default Service