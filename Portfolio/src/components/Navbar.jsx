

// // import React, { act, useState } from 'react'
// // import { Link } from 'react-router-dom'
// // import { FaHeart, FaRegHeart } from 'react-icons/fa';
// // import { motion } from 'framer-motion';
// // function Navbar() {
   
// //     const [liked, setLiked] = useState(false);
// //     const [count, setCount] = useState(1);

// //     const clickHandler = () => {
// //         setLiked(!liked);
// //         setCount(count + 1);
// //     };

    

// //   return (
// //     <div className='w-full flex justify-between items-center px-28 py-8  shadow'>
// //         {/* <div className='flex items-center justify-center bg-black rounded-full w-10 h-10'>  
// //             <h3 className='font-semibold text-white'>MB</h3>
// //         </div> */}

// // <motion.div
// //       className="flex items-center justify-center bg-black rounded-full w-10 h-10 shadow-md"
// //       whileHover={{ scale: 1.1 }}
// //       whileTap={{ scale: 0.95 }}
// //       aria-label="Badge"
// //     >
// //       <h3 className="font-semibold text-white">MB</h3>
// //     </motion.div>

// //         <div className='flex  items-center gap-7 mx-auto text-xl
// //          '>
           
// //         <Link to ='/' className='hover:text-[#a668ff] translate ease-linear' >
// //             Home
// //         </Link>
// //         <Link to='/projects'  className='hover:text-[#a668ff]' >
// //             Projects
// //         </Link>
// //         <Link to='/skills'  className='hover:text-[#a668ff]' >
// //             Skills
// //         </Link>
// //         <Link to='/contacts'   className='hover:text-[#a668ff]'>
// //             Contact
// //         </Link>
// //         </div>
        
// //         <div className='flex justify-center items-center relative'>
// //             <button onClick={clickHandler} className='relative'>
// //                 <div className='absolute top-[-25px] left-1/2 transform -translate-x-1/2'>
// //                     {count}
// //                 </div>
// //                 {liked ? <FaHeart/> : <FaRegHeart />}
// //             </button>
// //         </div>
           
// //         </div>
// //   )
// // }

// // export default Navbar



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaHeart, FaRegHeart } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// function Navbar() {
//   const [liked, setLiked] = useState(false);
//   const [count, setCount] = useState(1);

//   const clickHandler = () => {
//     setLiked(!liked);
//     setCount(count + 1);
//   };

//   return (
//     <div className='w-full flex justify-between items-center px-6 md:px-28 py-6 shadow bg-white'>
//       <motion.div
//         className="flex items-center justify-center bg-black rounded-full w-10 h-10 shadow-md"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//         aria-label="Badge"
//       >
//         <h3 className="font-semibold text-white">MB</h3>
//       </motion.div>

//       <div className='flex items-center gap-5 md:gap-7 mx-auto text-lg md:text-xl'>
//         <Link to='/' className='hover:text-[#a668ff] transition-colors duration-300'>
//           Home
//         </Link>
//         <Link to='/projects' className='hover:text-[#a668ff] transition-colors duration-300'>
//           Projects
//         </Link>
//         <Link to='/skills' className='hover:text-[#a668ff] transition-colors duration-300'>
//           Skills
//         </Link>
//         <Link to='/contacts' className='hover:text-[#a668ff] transition-colors duration-300'>
//           Contact
//         </Link>
//       </div>

//       <div className='flex justify-center items-center relative'>
//         <button onClick={clickHandler} className='relative text-xl'>
//           <div className='absolute top-[-25px] left-1/2 transform -translate-x-1/2 text-sm'>
//             {count}
//           </div>
//           {liked ? <FaHeart className='text-red-500' /> : <FaRegHeart className='text-gray-500' />}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Navbar() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Load the like status from local storage
    const storedLikedStatus = localStorage.getItem('likedStatus');
    if (storedLikedStatus) {
      setLiked(JSON.parse(storedLikedStatus));
      setCount(JSON.parse(localStorage.getItem('likeCount')) || 0);
    }
  }, []);

  useEffect(() => {
    // Update local storage when like status changes
    localStorage.setItem('likedStatus', JSON.stringify(liked));
    localStorage.setItem('likeCount', JSON.stringify(count));
  }, [liked, count]);

  const clickHandler = () => {
    setLiked(!liked);
    setCount(count + 1);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='relative'>
      <div className='w-full flex justify-between items-center px-6 md:px-28 py-6 shadow bg-white'>
        <motion.div
          className="flex items-center justify-center bg-black rounded-full w-10 h-10 shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Badge"
        >
          <h3 className="font-semibold text-white">MB</h3>
        </motion.div>

        <div className='hidden md:flex items-center gap-5 md:gap-7 mx-auto text-lg md:text-xl'>
          <Link to='/' className='hover:text-[#a668ff] transition-colors duration-300'>
            Home
          </Link>
          <Link to='/education' className='hover:text-[#a668ff] transition-colors duration-300'>
            Education
          </Link>
          <Link to='/projects' className='hover:text-[#a668ff] transition-colors duration-300'>
            Projects
          </Link>
          <Link to='/skills' className='hover:text-[#a668ff] transition-colors duration-300'>
            Skills
          </Link>
          <Link to='/contacts' className='hover:text-[#a668ff] transition-colors duration-300'>
            Contact
          </Link>

        </div>

        <div className='flex items-center gap-4'>
          {/* Like Button Visible on All Screens */}
          <button onClick={clickHandler} className='relative text-xl hidden md:block'>
            <div className='absolute top-[-25px] left-1/2 transform -translate-x-1/2 text-sm'>
              {count}
            </div>
            {liked ? <FaHeart className='text-red-500' /> : <FaRegHeart className='text-gray-500' />}
          </button>

          {/* Hamburger Menu Icon for Small Screens */}
          <button onClick={toggleMobileMenu} className='text-xl md:hidden'>
            <FaBars />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className='fixed inset-0 bg-white flex flex-col items-center py-6 shadow-lg md:hidden'>
          <button onClick={toggleMobileMenu} className='absolute top-4 right-4 text-2xl'>
            <FaBars />
          </button>
          <div className='flex flex-col items-center gap-6 text-lg'>
            <Link to='/' className='hover:text-[#a668ff] transition-colors duration-300' onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link to='/education' className='hover:text-[#a668ff] transition-colors duration-300' onClick={toggleMobileMenu}>
             Education
            </Link>
            <Link to='/projects' className='hover:text-[#a668ff] transition-colors duration-300' onClick={toggleMobileMenu}>
              Projects
            </Link>
            <Link to='/skills' className='hover:text-[#a668ff] transition-colors duration-300' onClick={toggleMobileMenu}>
              Skills
            </Link>
            <Link to='/contacts' className='hover:text-[#a668ff] transition-colors duration-300' onClick={toggleMobileMenu}>
              Contact
            </Link>
           
            <button onClick={clickHandler} className='flex items-center text-xl mt-4'>
              <div className='relative'>
                <div className='absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-sm'>
                  {count}
                </div>
                {liked ? <FaHeart className='text-red-500' /> : <FaRegHeart className='text-gray-500' />}
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
