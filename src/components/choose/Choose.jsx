import React from 'react'
import choose from '../../assets/choose.jpg'
import icon from '../../assets/choose-icon (1).png'
import icon2 from '../../assets/choose-icon (2).png'
const Choose = () => {
    return (
        <>
        <section className='pt-[150px] pb-[106px] bg-white'>
            <div className="container">
                  <div className="header w-full text-center pb-[130px]">
                        <h2 className="text-[45px] font-inter font-bold text-[#151515]">Why You Should  <br />  Choose Agenc </h2>
                        <p className="text-center font-inter font-normal text-[#737373] leading-[170%] pt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration <br />
                            in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                    </div>
                    <div className="choose-main flex normal:flex-wrap md:flex-row! justify-center gap-y-20 ">
                        <div className="right md:w-[70%] grid md:grid-cols-2 grid-cols-1 gap-y-[95px]">
                        <div className="choose-items">
                            <div className="img w-full">
                                <img src={icon2} alt="" />
                            </div>
                            <div className="text-box pt-5">
                                <h2 className='font-inter font-bold text-[25px] text-[#151515]'>Innovative Ideas</h2>
                                <p className='font-inter font-normal text-[#737373] text-[16px] pt-3'>Because each project is different, we adapt
                                    <br />
                                     to your business model.</p>
                            </div>

                        </div>
                        <div className="choose-items">
                            <div className="img">
                                <img src={icon2} alt="" />
                            </div>
                            <div className="text-box pt-5">
                                <h2 className='font-inter font-bold text-[25px] text-[#151515]'>Innovative Ideas</h2>
                                <p className='font-inter font-normal text-[#737373] text-[16px] pt-3'>Because each project is different, we adapt
                                    <br />
                                     to your business model.</p>
                            </div>

                        </div>
                        <div className="choose-items">
                            <div className="img">
                                <img src={icon} alt="" />
                            </div>
                            <div className="text-box pt-5">
                                <h2 className='font-inter font-bold text-[25px] text-[#151515]'>Innovative Ideas</h2>
                                <p className='font-inter font-normal text-[#737373] text-[16px] pt-3'>Because each project is different, we adapt
                                    <br />
                                     to your business model.</p>
                            </div>

                        </div>
                        <div className="choose-items">
                            <div className="img">
                                <img src={icon} alt="" />
                            </div>
                            <div className="text-box pt-5">
                                <h2 className='font-inter font-bold text-[25px] text-[#151515]'>Innovative Ideas</h2>
                                <p className='font-inter font-normal text-[#737373] text-[16px] pt-3'>Because each project is different, we adapt
                                    <br />
                                     to your business model.</p>
                            </div>

                        </div>
                        
                        </div>
                        <div className="left md:w-[30%] px-4 md:p-0">
                        <div className="img w-full">
                            <img src={choose} alt="" />
                        </div>
                        </div>

                    </div>
            </div>
        </section>

        </>
    )
}

export default Choose