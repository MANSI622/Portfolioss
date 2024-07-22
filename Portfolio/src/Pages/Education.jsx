import React, { useState } from 'react';
import { FaLaptopCode, FaGraduationCap, FaBook } from 'react-icons/fa';

const AccordionItem = ({ title, content, isOpen, onToggle, icon }) => (
  <div className='bg-white shadow-md rounded-lg mb-4'>
    <button
      className='w-full text-left px-6 py-4 text-2xl text-[#bb6bd9] font-semibold flex items-center justify-between focus:outline-none'
      onClick={onToggle}
    >
      <div className='flex items-center'>
        {icon && <span className='text-2xl mr-3'>{icon}</span>}
        {title}
      </div>
      <span className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
        &#9660; {/* Down arrow symbol */}
      </span>
    </button>
    {isOpen && (
      <div className='px-6 py-4'>
        {content}
      </div>
    )}
  </div>
);

const Education = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='px-4 md:px-8 lg:px-16 py-12'>
      <h2 className='text-3xl font-semibold text-center mb-8'>Education</h2>

      <AccordionItem
        title='BTech in Computer Science'
        isOpen={openIndex === 0}
        onToggle={() => toggleAccordion(0)}
        icon={<FaLaptopCode />}
        content={
          <div>
            <p className='text-lg font-medium text-[#bb6bd9]'>Dit University</p>
            <p className='text-sm text-gray-600'>Graduated: 2025</p>
            <p className='mt-2'>
              <strong>Description:</strong> Completed a Bachelor of Technology degree in Computer Science with a focus on software development and data structures. Relevant coursework included Algorithms and Web Development.
            </p>
            <p>
              <strong>CGPA:</strong> 9.5
            </p>
          </div>
        }
      />

      <AccordionItem
        title='Class 12'
        isOpen={openIndex === 1}
        onToggle={() => toggleAccordion(1)}
        icon={<FaGraduationCap />}
        content={
          <div>
            <p className='text-lg font-medium text-[#bb6bd9]'>Sarti Devi Raja Ram Public School</p>
            <p className='text-sm text-gray-600'>Graduated: 2021</p>
            <p className='mt-2'>
              <strong>Description:</strong> Completed Class 12 with a focus on Science and Mathematics. Achieved top grades in Physics, Chemistry, Painting, and Mathematics, preparing for a career in technology.
            </p>
            <p>
              <strong>Percentage:</strong> 94.4%
            </p>
          </div>
        }
      />

      <AccordionItem
        title='Class 10'
        isOpen={openIndex === 2}
        onToggle={() => toggleAccordion(2)}
        icon={<FaBook />}
        content={
          <div>
            <p className='text-lg font-medium text-[#bb6bd9]'>Sarti Devi Raja Ram Public School</p>
            <p className='text-sm text-gray-600'>Graduated: 2019</p>
            <p className='mt-2'>
              <strong>Description:</strong> Completed Class 10 with a strong foundation in core subjects including Mathematics, Science, and English.
            </p>
            <p>
              <strong>Percentage:</strong> 95.5%
            </p>
          </div>
        }
      />
    </div>
  );
};

export default Education;
