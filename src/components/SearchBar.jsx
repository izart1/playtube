import { FiSearch } from 'react-icons/fi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <div className='w-1/3 relative flex items-center bg-gray-200  rounded-full'>
      <input
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
        className='w-full outline-none bg-transparent pl-3 py-1 rounded-full focus:ring focus:ring-indigo-600'
        placeholder='Поиск'
      />
      <span className='absolute right-1 p-1 bg-gray-200 rounded-full cursor-pointer '>
        <FiSearch
          onClick={handleSubmit}
          className='flex ml-auto text-2xl text-indigo-600 '
        />
      </span>
    </div>
  );
};
export default SearchBar;
