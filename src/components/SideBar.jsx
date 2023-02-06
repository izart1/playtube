import { categories } from '../assets/constants';
import React, { useContext, useState } from 'react';
import { MenuContext } from '../App';

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  const { isOpen } = useContext(MenuContext);
  return (
    <div
      className={`${
        isOpen ? 'sm:gap-2' : 'sm:gap-6'
      } py-2 flex  items-center backdrop-blur-xl overflow-x-scroll no-scrollbar`}
    >
      {categories.map(category => (
        <button
          onClick={() => setSelectedCategory(category.name)}
          className={` flex flex-col items-center text-gray-200 hover:bg-indigo-700 px-4 py-2 rounded-2xl transition-all ${
            selectedCategory === category.name ? 'bg-indigo-700 ' : null
          }`}
          key={category.name}
        >
          <span className='text-2xl'>{category.icon}</span>
          <span className='text'>{isOpen ? category.name : null}</span>
          {/* <span className='text-xs sm:text-base sm: lowercase '>
            {category.name}
          </span> */}
        </button>
      ))}
    </div>
  );
};
export default SideBar;
//
