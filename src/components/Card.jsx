import React from 'react'
import { RiPagesLine } from "react-icons/ri";
import { FaDownload } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data,reference}) {
  return (
    <>
    
        <motion.div drag dragConstraints={reference} whileTap={{scale:1.5}}  className='relative flex-shrink-0 w-52 rounded-[20px] h-64 bg-[#ca0948] p-5 overflow-hidden mycard'>
        <RiPagesLine className='text-3xl mb-4 mx-auto' />
        <p className='font-semibold leading-tight'>{data.desc}</p>
        <footer className='absolute bottom-12 w-full h-10 left-0'>
            <div className='flex item-center justify-around mt-2'>
                <h5 className='text-sm'>{data.location}</h5>
                {data.close ? <IoMdClose /> : <FaDownload />}
            </div>
        </footer>
        {data.tag.isopen ? (
            <div className='absolute flex  bottom-0 w-full h-10 left-0 bg-green-900 '>
            <h3 className='ml-10 mt-1.5'>Download Now</h3>
            </div>
        ): null}
        

        </motion.div>
    </>
  )
}

export default Card