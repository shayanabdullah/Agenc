import React from 'react'
import quote from "../../assets/quote.png"
import reviewer from "../../assets/reviewer.png"
import reviewer2 from "../../assets/reviewer-2.png"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Review = () => {
    const NextArrow = ({ onClick }) => {
        return (
            <div
                className="w-10 h-10 rounded-full bg-[#4756DF] flex items-center justify-center absolute top-1/2 right-0 z-20 -translate-y-1/2 cursor-pointer"
                onClick={onClick}
            >
                <i className="fa-solid fa-chevron-right text-white text-lg"></i>
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div
                className="w-10 h-10 rounded-full bg-[#4756DF] flex items-center justify-center absolute top-1/2 left-0 z-20 -translate-y-1/2 cursor-pointer"
                onClick={onClick}
            >
                <i className="fa-solid fa-chevron-left text-white text-lg"></i>
            </div>
        );
    };

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        initialSlide: 0,
        centerMode: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        initialSlide: 0,
    responsive: [
  {
    breakpoint: 1250,
    settings: {
      slidesToShow: 2,
       infinite : true
    
    },
  },
  {
    breakpoint: 824,
    settings: {
      slidesToShow: 1,
      infinite : true
 
    },
  },
],

    };

    return (
        <>
            <section className='bg-white pb-[207px]'>
                <div className="container ">
                    {/* Header */}
                    <div className="header w-full text-center pb-[130px]">
                        <h2 className="text-[45px] font-inter font-bold text-[#151515] leading-[120%]">Some Client Reviews</h2>
                        <p className="text-center font-inter font-normal text-[#737373] leading-[170%] pt-4">There are many variations of passages of Lorem Ipsum available, but themajority <br />  have suffered alteration in some form..
                        </p>
                    </div>

                    {/* Reviews */}
                    <div className="reviews-main relative w-full">

                        <Slider {...settings}>
                            <div className="reviews-items py-[54px] px-[58px] rounded-[30px]">
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

                            </div>
                            <div className="reviews-items py-[54px] px-[58px] rounded-[30px]">
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

                            </div>
                            <div className="reviews-items py-[54px] px-[58px] rounded-[30px]">
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

                            </div>
                            <div className="reviews-items py-[54px] px-[58px] rounded-[30px]">
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

                            </div>
                        </Slider>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Review