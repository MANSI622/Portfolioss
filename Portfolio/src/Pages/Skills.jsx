
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Html from '../assets/images/Html.svg';
import css from '../assets/images/css.svg';
import Bootstrap from '../assets/images/Bootstrap.svg';
import Java from '../assets/images/Java.svg';
import Javascript from '../assets/images/JavaScript.png';
import ReactIcon from '../assets/images/ReactIcon.svg';
import Tailwindcss from '../assets/images/Tailwindcss.svg';
import nodejs from '../assets/images/nodejs.svg';

function Skills() {
  return (
    <div className='px-4 md:px-16 lg:px-60 py-14'>
      <div className="flex items-center justify-center">
        <span className="bg-zinc-400 w-24 sm:w-36 md:w-52 h-0.5 block"></span>
        <p className='text-lg sm:text-xl md:text-2xl font-semibold font-serif mx-4'>Skills</p>
        <span className="bg-zinc-400 w-24 sm:w-36 md:w-52 h-0.5 block"></span>
      </div>

      {/* Outer shadow box */}
      <div className='shadow-2xl p-5 md:p-10 rounded-lg mt-10'>
        <div className='flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16'>
          <div className='w-24 sm:w-32 md:w-40 lg:w-1/6 h-24 sm:h-32 md:h-40 lg:h-40 flex items-center justify-center shadow-lg p-2 rounded'>
            <img src={Html} className='w-full h-full object-contain' alt='HTML'></img>
          </div>
          <div className='w-24 sm:w-32 md:w-40 lg:w-1/6 h-24 sm:h-32 md:h-40 lg:h-40 flex items-center justify-center shadow-lg p-2 rounded'>
            <img src={css} className='w-full h-full object-contain' alt='CSS'></img>
          </div>
          <div className='w-24 sm:w-32 md:w-40 lg:w-1/6 h-24 sm:h-32 md:h-40 lg:h-40 flex items-center justify-center shadow-lg p-2 rounded'>
            <img src={Javascript} className='w-full h-full object-contain' alt='JavaScript'></img>
          </div>
          <div className='w-24 sm:w-32 md:w-40 lg:w-1/6 h-24 sm:h-32 md:h-40 lg:h-40 flex items-center justify-center shadow-lg p-2 rounded'>
            <img src={ReactIcon} className='w-full h-full object-contain' alt='React'></img>
          </div>
          <div className='w-24 sm:w-32 md:w-40 lg:w-1/6 h-24 sm:h-32 md:h-40 lg:h-40 flex items-center justify-center shadow-lg p-2 rounded'>
            <img src={Java} className='w-full h-full object-contain' alt='Java'></img>
          </div>
          <div className='w-24 sm:w-32 md:w-40 lg:w-1/6 h-24 sm:h-32 md:h-40 lg:h-40 flex items-center justify-center shadow-lg p-2 rounded'>
            <img src={Tailwindcss} className='w-full h-full object-contain' alt='TailwindCSS'></img>
          </div>
          <div className='w-24 sm:w-32 md:w-40 lg:w-1/6 h-24 sm:h-32 md:h-40 lg:h-40 flex items-center justify-center shadow-lg p-2 rounded'>
            <img src={Bootstrap} className='w-full h-full object-contain' alt='Bootstrap'></img>
          </div>
          <div className='w-24 sm:w-32 md:w-40 lg:w-1/6 h-24 sm:h-32 md:h-40 lg:h-40 flex items-center justify-center shadow-lg p-2 rounded'>
            <img src={nodejs} className='w-full h-full object-contain' alt='Node.js'></img>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Skills;
