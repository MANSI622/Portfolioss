

// import React, { useState } from 'react'
// import Navbar from '../components/Navbar';
// import { motion } from 'framer-motion';
// import Footer from '../components/Footer';
// import img from '../assets/images/Mansi Bansal.jpg'
// import { FaLinkedinIn } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import { FaGithub } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// function Home() {
    
//   return (
//     <div className='flex px-56 py-12 mt-10 justify-between select-none  '>
      
//       <div className="flex justify-center items-center">
     
//       <span className="font-roboto font-helvetica text-[1.5vh] text-[#1f1f1f] mx-10 box-border m-0 max-w-full
//        shadow-[0_0.5rem_1rem_rgba(0,0,0,0.4)] rounded-full p-3 w-[35vh] h-[35vh] mb-4 mr-0 flex items-center justify-center">
//         <img src={img} className="w-full  select-none h-full object-cover rounded-full" alt="circle content"/>
//       </span>
//     </div>

//       <div className='flex flex-col ml-[-23px] '>
//       <div className="flex justify-center items-center text-5xl ">
//         Hi ,I'm  <span className='text-[#bb6bd9] px-2 '> Mansi Bansal</span> 
//       <motion.span
//         className="font-roboto font-helvetica text-[3vh]  text-5xl text-[#bb6bd9] flex mr-5"
//         animate={{ scale: [1, 1.2, 1] }}
//         transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
//       >
//           <span className="ml-2">🙂</span>
//       </motion.span>
//     </div>
//     <h4 className='mt-4 text-3xl font-extralight'> Developer and Programmer</h4>
//     <div className=' flex text-xl font-light gap-4 '>
//         {/*gmail  */}
//         <Link to='https://www.google.com/search?q=mail&oq=mail&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAjIGCAQQRRhBMgYIBRBFGEHSAQgzMTEyajBqMagCALACAA&sourceid=chrome&ie=UTF-8'
//         className='mt-5 flex text-xl font-light gap-4 '>
//         <span className='text-3xl text-blue-200'> <MdEmail/></span> 
//         <h3 className='hover:text-[#bb6bd9] '> let's get in touch</h3> 
//         </Link>
        
//     </div>
//      {/* <h3 className='mt-4 text-2xl font-extralight'> "Coding is the language of the future"</h3> */}
//      <div className='mt-8 text-4xl items-center  cursor-pointer flex gap-5 px-16'> 
//      <Link to='https://github.com/MANSI622'>
//      <FaGithub />
//      </Link>
//         <Link to='https://www.linkedin.com/in/mansi-bansal-5504a7232/'>
//             <FaLinkedinIn/>
//         </Link>
//         <Link to='https://x.com/MansiBa5115389?t=0OL3pkLL8NAfXh1rTU0xIA&s=09'>
//             <FaTwitter/>
//         </Link>
//      </div>
//       </div>
//       <div className='absolute bottom-0 left-1/4 right-1/4 translate-x-50 translate-y-50 '>
//         <Footer/>
//       </div>

//     </div>
//   )
// }

// export default Home


import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import img from '../assets/images/Mansi Bansal.jpg';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='flex flex-col lg:flex-row px-4 lg:px-56 py-12 mt-10 justify-between select-none'>
      
      <div className="flex justify-center items-center mb-8 lg:mb-0">
        <span className="font-roboto font-helvetica text-[1.5vh] text-[#1f1f1f] mx-10 box-border m-0 max-w-full
          shadow-[0_0.5rem_1rem_rgba(0,0,0,0.4)] rounded-full p-3 w-[25vh] h-[25vh] lg:w-[35vh] lg:h-[35vh] mb-4 lg:mr-0 flex items-center justify-center">
          <img src={img} className="w-full h-full object-cover rounded-full" alt="Mansi Bansal"  loading='lazy'/>
        </span>
      </div>

      <div className='flex flex-col items-center lg:items-start'>
        <div className="flex flex-col lg:flex-row items-center text-3xl lg:text-5xl text-center lg:text-left">
          <p>Hi, I'm <span className='text-[#bb6bd9] px-2'>Mansi Bansal</span></p>
          <motion.span
            className="font-roboto font-helvetica text-[2vh] lg:text-[3vh] text-[#bb6bd9] flex mt-2 lg:mt-0"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
          >
            <span className="ml-2">🙂</span>
          </motion.span>
        </div>
        <h4 className='mt-4 text-xl lg:text-3xl font-extralight text-center lg:text-left'>Developer and Programmer</h4>
        <div className='flex flex-col items-center lg:items-start text-xl font-light mt-4'>
          <Link to='https://www.google.com/search?q=mail&oq=mail&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAjIGCAQQRRhBMgYIBRBFGEHSAQgzMTEyajBqMagCALACAA&sourceid=chrome&ie=UTF-8'
            className='flex items-center gap-4'>
            <span className='text-2xl lg:text-3xl text-blue-200'><MdEmail /></span>
            <h3 className='hover:text-[#bb6bd9]'>Let's get in touch</h3>
          </Link>
        </div>
        <div className='mt-8 text-3xl lg:text-4xl flex gap-5'>
          <Link to='https://github.com/MANSI622'>
            <FaGithub />
          </Link>
          <Link to='https://www.linkedin.com/in/mansi-bansal-5504a7232/'>
            <FaLinkedinIn />
          </Link>
          <Link to='https://x.com/MansiBa5115389?t=0OL3pkLL8NAfXh1rTU0xIA&s=09'>
            <FaTwitter />
          </Link>
        </div>
      </div>
      <div className='mb-72'></div>

      {/* <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-1/4 right-1/4 lg:right-auto'>
        <Footer />
      </div> */}
    </div>
  );
}

export default Home;



     