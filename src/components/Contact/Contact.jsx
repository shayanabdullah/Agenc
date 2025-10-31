import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }
    const [error, setError] = useState({})
    const validation = () => {
        const newError = {}
        const phoneRegex = /^\d{11}$/ ;
        if (!formData.name) newError.name = 'Please Enter your name !'
        if (!formData.email) newError.email = 'Please Enter your Email'
        if (!formData.phone) newError.phone = 'Please Enter your phone number'
        else if (formData.phone && isNaN(formData.phone)) {
            newError.phone = 'Phone number must be numeric'
        } else if (formData.phone.length > 11) {
            newError.phone = 'Phone number must be 11 digits'
        } else if ( !phoneRegex.test(formData.phone))   newError.phone = 'Phone number must be exactly 11 digits'
        if (!formData.email.includes("@") || !formData.email.includes('.com')) newError.email = 'Please Enter a Valid Email'
        setError(newError);
        return Object.keys(newError).length === 0


    }

    console.log(formData);
    console.log(formData.phone.length);
    

    const [submit, setSubmit] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validation()) {
            setFormData({
                name: '',
                email: '',
                phone: ''
            })
            setError({})

            const notify = setInterval(() => {
                setSubmit(true);
                setTimeout(() => {
                    clearInterval(notify);
                    setSubmit(false)
                }, 3000)
            }, 50)
        }
    }



    return (
        <>
            <section className='md:py-[150px] py-20 bg-[#F3F3F3]' id='contact'>
                <div className="container">
                    <div className="contact-main px-3 flex flex-col md:flex-row md:gap-44">
                        <div className="right md:w-[40%] md:py-44 py-10">
                            <div className="text text-center md:text-left">
                                <h2 className='md:text-[45px] text-4xl font-inter font-bold text-[#151515] leading-[120%] pb-6'>We Do design, Code  & Development</h2>
                                <p className='md:text-[16px] text-xs font-inter font-normal text-[#737373] leading-[170%] pb-2.5'>I had a good experience while using this app, what fascinated me <br /> was the live tracking feature There are many variations of passages <br /> of Lorem Ipsum available, but the majority.</p>
                                <p className='md:text-[16px] text-xs font-inter font-normal text-[#737373] leading-[170%]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
                            </div>
                        </div>
                        <div className="left md:w-[40%]">
                            <div className="form-box bg-white md:pt-[61px] md:px-11 pt-10 px-7 rounded-[20px]">
                                <div className="header pb-8">
                                    <h2 className='font-inter font-bold text-3xl text-[#151515] text-center'>Get a free quote now</h2>
                                </div>
                                {/* form */}
                                <form onSubmit={handleSubmit}>
                                    <div className="name pb-5 ">
                                        <div className="pb-4">
                                            <label htmlFor="name" className='text-[16px] font-inter font-medium text-[#151515] '>Name</label>
                                        </div>
                                        <input type="text" name="name" placeholder='Enter your name' onChange={handleChange} value={formData.name} className='w-full py-5 pl-6 rounded-[10px] outline-[#E8E8E8] focus:outline-2 border-2 border-[#E8E8E8] placeholder:font-inter placeholder:font-normal placeholder:text-[16px] placeholder:text-[#D0D0D0] ' />
                                        {
                                            error.name && <>
                                                <div className="flex gap-2 items-center pt-3">
                                                    <p className='font-inter font-semibold text-red-500 '>{error.name}</p>
                                                    <i className="fa-solid fa-triangle-exclamation text-red-500"></i>
                                                </div>
                                            </>

                                        }
                                    </div>
                                    <div className="email pb-5">
                                        <div className="pb-4">
                                            <label htmlFor="email" className='text-[16px] font-inter font-medium text-[#151515] '>Email</label>
                                        </div>
                                        <input type="email" name="email" placeholder='Enter your email' onChange={handleChange} value={formData.email} className='w-full py-5 pl-6 rounded-[10px] outline-[#E8E8E8] focus:outline-2 border-2 border-[#E8E8E8] placeholder:font-inter placeholder:font-normal placeholder:text-[16px] placeholder:text-[#D0D0D0] ' />
                                        {
                                            error.email && <>
                                                <div className="flex gap-2 items-center pt-3">
                                                    <p className='font-inter font-semibold text-red-500 '>{error.email}</p>
                                                    <i className="fa-solid fa-triangle-exclamation text-red-500"></i>
                                                </div>
                                            </>

                                        }
                                    </div>
                                    <div className="phone pb-8">
                                        <div className="pb-4">
                                            <label htmlFor="phone" className='text-[16px] font-inter font-medium text-[#151515] '>Phone</label>
                                        </div>
                                        <input type="text" name="phone" placeholder='Enter your phone number' onChange={handleChange} value={formData.phone} className='w-full py-5 pl-6 rounded-[10px] outline-[#E8E8E8] focus:outline-2 border-2 border-[#E8E8E8] placeholder:font-inter placeholder:font-normal placeholder:text-[16px] placeholder:text-[#D0D0D0] ' />
                                        {
                                            error.phone && <>
                                                <div className="flex gap-2 items-center pt-3">
                                                    <p className='font-inter font-semibold text-red-500 '>{error.phone}</p>
                                                    <i className="fa-solid fa-triangle-exclamation text-red-500"></i>
                                                </div>
                                            </>

                                        }
                                    </div>
                                    {/* button */}
                                    <div className="button pb-20">
                                        <button className="py-4 w-full bg-[#6A4DF4] text-white text-2xl font-inter font-medium rounded-xl cursor-pointer" type='submit'> Get Pricing Now </button>
                                    </div>
                                </form>
                                {/* notify */}
                                             <div className={`notify fixed top-[-110px] left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${submit === true ? 'top-[50px]' : ""}`}>
                                        <div className="box bg-[#e2e0e0] py-3 text-center px-2  border border-[#d3d3d3] rounded-[10px] w-[450px]">
                                            <p className='font-inter font-medium text-[#151515] text-center text-[14px] flex items-center gap-1 justify-center'><span className=" font-bold text-lg">Thank you! Your submission was successful.</span> <i className="fa-solid fa-circle-check text-lg text-green-800"></i> <br />
                                               </p>
                                               <p className='font-inter font-medium text-[#151515] text-center text-[14px] '> We appreciate your interest and will reply as soon as possible.</p>
                                            
                                        </div>
                                    </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact