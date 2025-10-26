import web from '../../assets/web.png'
import ui from '../../assets/ui.png'
import ai from '../../assets/ai.png'
import motion from '../../assets/motion.png'
import ThreeD from '../../assets/3d.png'
import digital from '../../assets/digital.png'

const Service = () => {
    return (
        <>
            <section className="py-[150px] bg-white" id='service'>   
                <div className="container">
                    <div className="header w-full text-center pb-14">
                        <h2 className="text-[45px] font-inter font-bold text-[#151515]">Our Provided Services</h2>
                        <p className="text-center font-inter font-normal text-[#737373] leading-[150%] pt-4">There are many variations of passages of Lorem Ipsum available, but themajority
                            <span className="block">
                                have suffered alteration in some form.
                            </span>
                        </p>
                    </div>
                    <div className="services grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        <div className="service-items px-[49px] pt-20 pb-[47px] rounded-[20px] border-2 border-transparent hover:border-black/25 hover:shadow-xl duration-300 ">
                            <div className="item-body text-center">
                                <div className="img w-full flex justify-center">
                                    <img src={web} alt="" />
                                </div>
                                <div className="text-box text-center">
                                    <h3 className='font-inter font-bold text-[25px] text-[#151515] pt-10'>Web Design</h3>
                                    <p className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words 
                                      <br />  which don't look.
                                        </p>
                                </div>

                            </div>
                        </div>
                        <div className="service-items px-[49px] pt-20 pb-[47px] rounded-[20px] border-2 border-transparent hover:border-black/25 hover:shadow-xl  duration-300 ">
                            <div className="item-body text-center">
                                <div className="img w-full flex justify-center">
                                    <img src={ui} alt="" />
                                </div>
                                <div className="text-box text-center">
                                    <h3 className='font-inter font-bold text-[25px] text-[#151515] pt-10'>UI/UX Design</h3>
                                    <p className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words 
                                      <br />  which don't look.
                                        </p>
                                </div>

                            </div>
                        </div>
                        <div className="service-items px-[49px] pt-20 pb-[47px] rounded-[20px] border-2 border-transparent hover:border-black/25 hover:shadow-xl  duration-300 ">
                            <div className="item-body text-center">
                                <div className="img w-full flex justify-center">
                                    <img src={ai} alt="" />
                                </div>
                                <div className="text-box text-center">
                                    <h3 className='font-inter font-bold text-[25px] text-[#151515] pt-10'>Machine Learning and AI</h3>
                                    <p className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words 
                                      <br />  which don't look.
                                        </p>
                                </div>

                            </div>
                        </div>
                        <div className="service-items px-[49px] pt-20 pb-[47px] rounded-[20px] border-2 border-transparent hover:border-black/25 hover:shadow-xl  duration-300 ">
                            <div className="item-body text-center">
                                <div className="img w-full flex justify-center">
                                    <img src={motion} alt="" />
                                </div>
                                <div className="text-box text-center">
                                    <h3 className='font-inter font-bold text-[25px] text-[#151515] pt-10'>Motion Graphics</h3>
                                    <p className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words 
                                      <br />  which don't look.
                                        </p>
                                </div>

                            </div>
                        </div>
                        <div className="service-items px-[49px] pt-20 pb-[47px] rounded-[20px] border-2 border-transparent hover:border-black/25 hover:shadow-xl  duration-300 ">
                            <div className="item-body text-center">
                                <div className="img w-full flex justify-center">
                                    <img src={ThreeD} alt="" />
                                </div>
                                <div className="text-box text-center">
                                    <h3 className='font-inter font-bold text-[25px] text-[#151515] pt-10'>3D Animation</h3>
                                    <p className='text-center pt-4 font-inter font-normal text-[#737373] leading-[150%]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words 
                                      <br />  which don't look.
                                        </p>
                                </div>

                            </div>
                        </div>
                        <div className="service-items px-[49px] pt-20 pb-[47px] rounded-[20px] border-2 border-transparent hover:border-black/25 hover:shadow-xl  duration-300 ">
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
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Service