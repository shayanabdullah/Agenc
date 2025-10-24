import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import banner from '../../assets/banner.png'
;
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
            <section className='relative z-10 banner lg:py-[300px] py-[100px]  px-4 '>
               
                <div className="container">
                  <div className="w-full flex items-center justify-center ">
                    <div className="content-main w-full ">
                     <Slider {...settings}>
                           <div className="content-items text-center">
                            <h1 className='lg:text-[75px] text-5xl text-white font-inter font-bold leading-[120%] text-center'>We Help brands with high
                                <span className="block">quality services</span>
                            </h1>
                            <p className='text-center pt-[51px] text-white font-inter font-normal text-lg leading-[180%] '>
                                There are many variations of passages of Lorem Ipsum available, but themajority 
                                 <span className="block">have suffered alteration in some form, by injected humour, or randomised words </span>
                                 which don't look.
                            </p>
                               <div className="button py-10">
            <button className="py-4 px-9 bg-[#6A4DF4] text-white text-2xl font-inter font-medium rounded-xl cursor-pointer"> Get Started </button>
          </div>

                        </div>
                           <div className="content-items text-center">
                            <h1 className='lg:text-[75px] text-5xl text-white font-inter font-bold leading-[120%] text-center capitalize'>Turning Ideas into <span className='md:block'>Digital </span>
                                <span className="md:block">quality services</span>
                            </h1>
                            <p className='text-center pt-[51px] text-white font-inter font-normal text-lg leading-[180%] '>
                                There are many variations of passages of Lorem Ipsum available, but themajority 
                                 <span className="block">have suffered alteration in some form, by injected humour, or randomised words </span>
                                 which don't look.
                            </p>
                               <div className="button py-10">
            <button className="py-4 px-9 bg-[#6A4DF4] text-white text-2xl font-inter font-medium rounded-xl cursor-pointer"> Get Started </button>
          </div>

                        </div>
                           <div className="content-items text-center">
                            <h1 className='lg:text-[75px] text-5xl text-white font-inter font-bold leading-[120%] text-center'>Connecting Brands with <span className='block'>Their Audience</span>
                            </h1>
                            <p className='text-center pt-[51px] text-white font-inter font-normal text-lg leading-[180%] '>
                                There are many variations of passages of Lorem Ipsum available, but themajority 
                                 <span className="block">have suffered alteration in some form, by injected humour, or randomised words </span>
                                 which don't look.
                            </p>
                               <div className="button py-10">
            <button className="py-4 px-9 bg-[#6A4DF4] text-white text-2xl font-inter font-medium rounded-xl cursor-pointer"> Get Started </button>
          </div>

                        </div>
                           <div className="content-items text-center">
                            <h1 className='lg:text-[75px] text-5xl text-white font-inter font-bold leading-[120%] text-center'>Where Creativity Meets <span className='block'>Strategy</span>
                            </h1>
                            <p className='text-center pt-[51px] text-white font-inter font-normal text-lg leading-[180%] '>
                                There are many variations of passages of Lorem Ipsum available, but themajority 
                                 <span className="block">have suffered alteration in some form, by injected humour, or randomised words </span>
                                 which don't look.
                            </p>
                               <div className="button py-10">
            <button className="py-4 px-9 bg-[#6A4DF4] text-white text-2xl font-inter font-medium rounded-xl cursor-pointer"> Get Started </button>
          </div>

                        </div>
                     </Slider>
                    </div>
                </div>  
                </div>
                

            </section>

        </>
    )
}

export default Banner