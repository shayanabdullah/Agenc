import React from 'react'
import quote from "../../assets/quote.png"
import reviewer from "../../assets/reviewer.png"
import reviewer2 from "../../assets/reviewer-2.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { motion } from 'motion/react';
import { fadeIn, textVariant } from '../../Utilitils/motion';
const Review = () => {
    return (
        <>
            <motion.section
              variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once : true}}
            className='bg-white pb-[207px] pt-20 lg:pt-0'>
                <div className="container ">
                    {/* Header */}
                    <div className="header w-full text-center pb-[130px]">
                        <motion.h2 variants={textVariant(0.4)} className="text-[45px] font-inter font-bold text-[#151515] leading-[120%]">Some Client Reviews</motion.h2>
                        <motion.p variants={textVariant(0.5)} className="text-center font-inter font-normal text-[#737373] leading-[170%] pt-4">There are many variations of passages of Lorem Ipsum available, but themajority <br />  have suffered alteration in some form..
                        </motion.p>
                    </div>

                    {/* Reviews */}

                    <div className="reviews-main  relative w-full">
                        {/* Button */}
                        <div
                            className="swiper-button-prev w-10 h-10 rounded-full bg-[#4756DF] flex items-center justify-center absolute  xl:top-1/2 xl-2:left-0! xl:left-5  z-20 bottom-[-20%] left-[43%] md:bottom-[-25%] md:left-[46%] -translate-y-1/2 -translate-x-[43%]    "
                        >
                            <i className="fa-solid fa-chevron-left text-white text-lg"></i>
                        </div>
                        <div
                            className="swiper-button-next w-10 h-10 rounded-full bg-[#4756DF] flex items-center justify-center absolute  xl:top-1/2 xl:right-[-50px] z-20 bottom-[-20%]  md:bottom-[-25%] right-[31%] md:right-[43%] -translate-y-1/2 -translate-x-[31%] cursor-pointer"
                        >
                            <i className="fa-solid fa-chevron-right text-white text-lg"></i>
                        </div>


                        {/* slider */}
                        <Swiper slidesPerView={1}
                            spaceBetween={5}
                            loop={true}


                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 0,
                                },
                            }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',

                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                                     initial="hidden"
                    whileInView="show"
                    viewport={{once : true}}
                        >
                            <SwiperSlide>
                                <motion.div variants={fadeIn('up', 0.4)} className="reviews-items py-[54px] px-[58px] rounded-[30px]">
                                    <div className="img-box pb-5">
                                        <img src={quote} alt="" />
                                    </div>
                                    <div className="text-box">
                                        <p className=' font-inter font-normal text-[#787878] leading-[170%] pb-5'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                                        <div className="star flex gap-0.5 text-[#F9BD2C] pb-8">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="reviewer-box flex items-center gap-5">
                                            <div className="img">
                                                <img src={reviewer} alt="" />
                                            </div>
                                            <div className="text">
                                                <h4 className='font-inter font-semibold text-xl text-[#252525]'>Rosa Farmer</h4>
                                                <p className='font-inter font-normal text-[#787878] leading-[170%] text-[16px]'>Digital Marketor</p>
                                            </div>
                                        </div>
                                    </div>

                                </motion.div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <motion.div variants={fadeIn('up', 0.5)}  className="reviews-items py-[54px] px-[58px] rounded-[30px]">
                                    <div className="img-box pb-5">
                                        <img src={quote} alt="" />
                                    </div>
                                    <div className="text-box">
                                        <p className=' font-inter font-normal text-[#787878] leading-[170%] pb-5'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                                        <div className="star flex gap-0.5 text-[#F9BD2C] pb-8">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="reviewer-box flex items-center gap-5">
                                            <div className="img">
                                                <img src={reviewer2} alt="" />
                                            </div>
                                            <div className="text">
                                                <h4 className='font-inter font-semibold text-xl text-[#252525]'>Eric Drake</h4>
                                                <p className='font-inter font-normal text-[#787878] leading-[170%] text-[16px]'>UI Designer</p>
                                            </div>
                                        </div>
                                    </div>

                                </motion.div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <motion.div variants={fadeIn('up', 0.6)}  className="reviews-items py-[54px] px-[58px] rounded-[30px]">
                                    <div className="img-box pb-5">
                                        <img src={quote} alt="" />
                                    </div>
                                    <div className="text-box">
                                        <p className=' font-inter font-normal text-[#787878] leading-[170%] pb-5'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                                        <div className="star flex gap-0.5 text-[#F9BD2C] pb-8">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="reviewer-box flex items-center gap-5">
                                            <div className="img">
                                                <img src={reviewer} alt="" />
                                            </div>
                                            <div className="text">
                                                <h4 className='font-inter font-semibold text-xl text-[#252525]'>Rosa Farmer</h4>
                                                <p className='font-inter font-normal text-[#787878] leading-[170%] text-[16px]'>Digital Marketor</p>
                                            </div>
                                        </div>
                                    </div>

                                </motion.div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <motion.div variants={fadeIn('up', 0.7)}  className="reviews-items py-[54px] px-[58px] rounded-[30px]">
                                    <div className="img-box pb-5">
                                        <img src={quote} alt="" />
                                    </div>
                                    <div className="text-box">
                                        <p className=' font-inter font-normal text-[#787878] leading-[170%] pb-5'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                                        <div className="star flex gap-0.5 text-[#F9BD2C] pb-8">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="reviewer-box flex items-center gap-5">
                                            <div className="img">
                                                <img src={reviewer2} alt="" />
                                            </div>
                                            <div className="text">
                                                <h4 className='font-inter font-semibold text-xl text-[#252525]'>Eric Drake</h4>
                                                <p className='font-inter font-normal text-[#787878] leading-[170%] text-[16px]'>UI Designer</p>
                                            </div>
                                        </div>
                                    </div>

                                </motion.div>
                            </SwiperSlide>

                        </Swiper>






                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default Review