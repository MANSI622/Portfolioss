

import React from 'react'
import Footer from '../components/Footer'

function Contact() {
    return (
        <div className='relative flex flex-col flex-grow lg:flex-row px-10 lg:px-28 py-5 mt-20 justify-between space-y-10 lg:space-y-0'>
          <div className='lg:w-1/4'>
            <h1 className='font-bold mt-10 lg:mt-20 text-5xl lg:text-7xl text-[#a668ff] cursor-pointer
             hover:text-[#59AED5] '>
              Contact Me
            </h1>
          </div>
          
          <div className='flex flex-col lg:w-2/4 gap-5'>
            <h1 className='text-3xl lg:text-4xl font-semibold leading-6 text-[#a668ff] hover:text-[#59AED5] '>
              Send me a Message
            </h1>
            <form className='flex flex-col gap-5'>
              <input
                type='text'
                className='w-full outline-[#3c298a] border bg-[#F7F6FD] text-black font-light px-4 py-2 rounded-lg'
                placeholder='Full Name...'
              />
              <input
                type='text'
                className='w-full outline-[#3c298a] border bg-[#F7F6FD] text-black font-light px-4 py-2 rounded-lg'
                placeholder='Email Address...'
              />
              <input
                type='text'
                className='w-full outline-[#3c298a] border bg-[#F7F6FD] text-black font-light px-4 py-2 rounded-lg'
                placeholder='Subject...'
              />
              <div className='flex flex-col'>
                <label className='font-medium text-black'>Message</label>
                <textarea
                  className='w-full select-none h-32 bg-[#F7F6FD] outline-[#3c298a] border 
                   text-black font-light px-4 py-2 rounded-lg'
                   draggable="false"
                  placeholder='Type your message here...'
                />
              </div>
              <button
                className='bg-purple-700 text-white border border-blue-50 font-light px-7 py-2 rounded-sm
                 hover:bg-[#59AED5]  transition
                  duration-300 ease-in-out transform hover:scale-105 mb-20'
              >
                Submit
                </button>

        </form>


       </div>

       {/* <div className='absolute  whitespace-nowrap text-center bottom-[-10px] mt-52 left-1/4 right-2/4'>
        <Footer/>
      </div> */}
        </div>
  )
}

export default Contact