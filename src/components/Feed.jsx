import React, { useState, useEffect } from 'react';
import { fetchFromApi } from '../utils/fetchFromApi';
import { SideBar, Video } from './';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then(data =>
      setData(data.items)
    );
  }, [selectedCategory]);

  return (
    <main className='md:container flex flex-col items-center text-gray-100  mx-auto mt-2 gap-4'>
      <section className='sticky top-0 w-full mx-auto flex justify-center'>
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </section>

      <section>
        {/* <h3 className='text-2xl font-medium text-gray-200 hidden  sm:flex'>
          {selectedCategory}
        </h3> */}
        <div className='flex items-center justify-center  flex-wrap mt-4 gap-8 mx-auto'>
          <Video data={data} />
        </div>
      </section>
    </main>
  );
};
export default Feed;
