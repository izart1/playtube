import React, { useContext } from 'react';
import { GiPauseButton } from 'react-icons/gi';
import { RiMenuUnfoldFill, RiMenuFoldFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { MenuContext } from '../App';
import SearchBar from './SearchBar';

const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext);
  return (
    <header className='border-b border-slate-800 h-[70px]   flex items-center justify-between  '>
      <nav className='container mx-auto flex items-center justify-between w-full'>
        <div className='font-medium text-gray-100  flex items-center gap-2'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='hidden sm:flex mr-4 text-2xl'
          >
            {isOpen ? <RiMenuFoldFill /> : <RiMenuUnfoldFill />}
          </button>
          <Link to={'/'}>
            <span className=' uppercase px-3 py-1 bg-indigo-600 rounded-xl flex items-center '>
              P<GiPauseButton />
              ay
            </span>
          </Link>
          <span className='text-xl'>PlayTube</span>
        </div>
        <SearchBar />
      </nav>
    </header>
  );
};
export default Navbar;
