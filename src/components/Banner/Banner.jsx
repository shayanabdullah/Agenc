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
            <section className='relative z-10'>
                <div className="w-full">
                    <img src={banner} alt="" className='w-full' />
                </div>
                <div className="max-w-[1350px] w-full absolute top-[45%] left-1/2 -translate-x-6/12 -translate-y-[45%]">
                    <div className="content-main w-full ">
                     <Slider {...settings}>
                           <div className="content-items text-center">
                            <h1 className='text-[75px] text-white font-inter font-bold leading-[120%] text-center'>We Help brands with high
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
                            <h1 className='text-[75px] text-white font-inter font-bold leading-[120%] text-center'>Turning Ideas into <span className='block'>Digital Masterpieces</span>
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
                            <h1 className='text-[75px] text-white font-inter font-bold leading-[120%] text-center'>Connecting Brands with <span className='block'>Their Audience</span>
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
                            <h1 className='text-[75px] text-white font-inter font-bold leading-[120%] text-center'>Where Creativity Meets <span className='block'>Strategy</span>
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

            </section>

        </>
    )
}

export default Banner