import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { fadeIn, textVariant } from '../../Utilitils/motion';

const Success = () => {
    // customer 
 const [customer, setCustomer] = useState(0);
const cusEnd = 200;
const durationCus = 4000;
let cusStart = 0;
const eachDuration = Math.round(durationCus/cusEnd);

// rating 
 const [rating, setRating] = useState(0);
const ratingEnd = 4.5;
const durationRate = 4000;
let ratingStart = 0;
const ratingDuration = Math.round(durationRate/ (ratingEnd * 10))

   // deliverd 
 const [projectdel, setprojectdel] = useState(0);
 let delivary = 0;
const totalDelivary = 351;
const delDuration = 4000;
const eachDelDuration = Math.round(delDuration/totalDelivary);

useEffect(()=>{
// customer
const cusTimer = setInterval(()=>{
    cusStart += 1
    setCustomer(cusStart)
    if(cusStart === cusEnd){
        clearInterval(cusTimer)
    }
    
    
},eachDuration )

// rating
const rating = setInterval(()=>{
    ratingStart += 0.1
    setRating(parseFloat(ratingStart.toFixed(1)))
    if(ratingStart === ratingEnd){
        clearInterval(rating)
    }
    
    
},ratingDuration )

// deliverd
const delivaryTimer = setInterval(()=>{
    delivary += 1
    setprojectdel(delivary)
    if(delivary === totalDelivary){
        clearInterval(delivaryTimer)
    }
    
    
},eachDelDuration )


return ()=> {
    clearInterval(cusTimer)
    clearInterval(rating)
    clearInterval(delivaryTimer)
}
},[])

    return (
        <>
            <motion.section
                
            className='lg:pt-[170px] lg:pb-[150px] py-18 bg-white'>
                <div className="container">
                    <motion.div
                      variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView="show"
                     className="succes-main flex items-center flex-col lg:flex-row bg-[#E0FFF9] rounded-[20px] lg:gap-[124px] py-[85px] normal:px-2">
                        <motion.div
                        variants={fadeIn('down', 0.3)}
                        className="lg:w-2/5 md:pl-[50px] pl-2 text-center md:text-left">
                            <motion.p
                            variants={textVariant(0.2)}
                            className='font-inter text-2xl font-medium leading-[120%] text-[#6A4DF4] pb-6'>Our Success</motion.p>
                            <motion.h2 
                            variants={textVariant(0.3)}
                            className='font-inter font-semibold text-4xl text-[#151515] md:pr-20 leading-[140%] pb-8'>
                                West cost Brand makers-Global Edge
                                </motion.h2>

                        </motion.div>
                        <div className="lg:w-3/5 flex items-center flex-col normal-2:flex-row justify-center gap-y-[50px] sm:gap-[90px] pt-8 md:pt-5">
                            <motion.div 
                            variants={fadeIn('up', 0.4)}
                            className="items ">
                                <h3 className='font-inter md:text-[50px] text-5xl normal-2:text-4xl font-bold text-[#151515] normal:pb-5'> {customer}+
                            </h3>
                                <p className='font-inter md:text-xl normal:text-[16px] text-[12px] font-medium text-[#737373] '>Customer Satisfied</p>
                            </motion.div>
                            <motion.div 
                            variants={fadeIn('up', 0.5)}
                            className="items pr-3 normal:pr-3">
                            <h3 className='font-inter md:text-[50px] text-5xl normal-2:text-4xl font-bold text-[#151515] normal:pb-5'>{rating}+</h3>
                                <p className='font-inter md:text-xl normal:text-[16px] text-[14px] font-medium text-[#737373] '>200+ Avg rating</p>
                            </motion.div>
                            <motion.div 
                            variants={fadeIn('up', 0.6)}
                            className="items  normal:pt-0">
                                <h3 className='font-inter md:text-[50px] text-5xl normal-2:text-4xl font-bold text-[#151515] normal:pb-3'>{projectdel} +</h3>
                                <p className='font-inter md:text-xl normal:text-[16px] text-[14px] font-medium text-[#737373] '>Project Delivered</p>
                            </motion.div>
                        </div>

                    </motion.div>
                </div>


            </motion.section>
        </>
    )
}

export default Success