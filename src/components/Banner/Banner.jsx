import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import banner from '../../assets/banner.png'
import { motion } from "motion/react";
import { fadeIn, textVariant } from "../../Utilitils/motion";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : false,
    autoplay: true,
    autoplayspeed: 2000,
   
  };


    return (
        <>
            <motion.section
            className='relative z-10 banner lg:py-[260px] md:py-[220px] py-[140px] px-4 lg:h-screen lg:w-full'>
                <div className="container">
                  <div className="w-full flex items-center justify-center ">
                    <motion.div
                          variants={fadeIn("up", 0.3)}
                          initial="hidden"
                          whileInView="show"
                          viewport={{once : true}}
                    className="content-main w-full ">
                     <Slider {...settings}>
                           <div className="content-items text-center">
                            <motion.h1 
                            variants={textVariant(0.4)}
                                  initial="hidden"
                                  whileInView="show"
                                  viewport={{once : true}}
                            className='lg:text-[75px] normal:text-5xl text-4xl text-white font-inter font-bold leading-[120%] text-center'>We Help brands with high
                                <span className="block">quality services</span>
                            </motion.h1>
                            <motion.p
                            variants={textVariant(0.5)}
                                initial="hidden"
                                  whileInView="show"
                                  viewport={{once : true}}  
                            className='text-center normal:pt-[51px] pt-[30px] text-white font-inter font-normal normal:text-lg text-xs leading-[180%] '>
                                There are many variations of passages of Lorem Ipsum available, but themajority 
                                 <span className="block">have suffered alteration in some form, by injected humour, or randomised words </span>
                                 which don't look.
                            </motion.p>
                                       <motion.div
                                             variants={fadeIn("up", 0.6)}
                                             
                                            
                                       className="button py-10">
            <button className="py-4 px-9 bg-[#6A4DF4] text-white text-2xl font-inter font-medium rounded-xl cursor-pointer"> <a href="#contact">Get Started</a> </button>
          </motion.div>

                        </div>
                           <div className="content-items text-center">
                            <h1 className='lg:text-[75px] normal:text-5xl text-4xl text-white font-inter font-bold leading-[120%] text-center'>Turning Ideas into <span className='md:block'>Digital </span>
                                <span className="md:block">quality services</span>
                            </h1>
                            <p className='text-center normal:pt-[51px] pt-[30px] text-white font-inter font-normal normal:text-lg text-xs leading-[180%] '>
                                There are many variations of passages of Lorem Ipsum available, but themajority 
                                 <span className="block">have suffered alteration in some form, by injected humour, or randomised words </span>
                                 which don't look.
                            </p>
                                    <div className="button py-10">
            <button className="py-4 px-9 bg-[#6A4DF4] text-white text-2xl font-inter font-medium rounded-xl cursor-pointer"> <a href="#contact">Get Started</a> </button>
          </div>


                        </div>
                           <div className="content-items text-center">
                            <h1 className='lg:text-[75px] normal:text-5xl text-4xl text-white font-inter font-bold leading-[120%] text-centerr'>Connecting Brands with <span className='block'>Their Audience</span>
                            </h1>
                            <p className='text-center normal:pt-[51px] pt-[30px] text-white font-inter font-normal normal:text-lg text-xs leading-[180%] '>
                                There are many variations of passages of Lorem Ipsum available, but themajority 
                                 <span className="block">have suffered alteration in some form, by injected humour, or randomised words </span>
                                 which don't look.
                            </p>
                               <div className="button py-10">
            <button className="py-4 px-9 bg-[#6A4DF4] text-white text-2xl font-inter font-medium rounded-xl cursor-pointer"> <a href="#contact">Get Started</a> </button>
          </div>


                        </div>
                           <div className="content-items text-center">
                            <h1 className='lg:text-[75px] normal:text-5xl text-4xl text-white font-inter font-bold leading-[120%] text-center'>Where Creativity Meets <span className='block'>Strategy</span>
                            </h1>
                            <p className='text-center normal:pt-[51px] pt-[30px] text-white font-inter font-normal normal:text-lg text-xs leading-[180%] '>
                                There are many variations of passages of Lorem Ipsum available, but themajority 
                                 <span className="block">have suffered alteration in some form, by injected humour, or randomised words </span>
                                 which don't look.
                            </p>
                               <div className="button py-10">
            <button className="py-4 px-9 bg-[#6A4DF4] text-white text-2xl font-inter font-medium rounded-xl cursor-pointer"> <a href="#contact">Get Started</a> </button>
          </div>

                        </div>
                     </Slider>
                    </motion.div>
                </div>  
                </div>
                

            </motion.section>


        </>
    )
}

export default Banner