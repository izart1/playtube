import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Video } from '../components';
import { fetchFromApi } from '../utils/fetchFromApi';

const Search = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then(data =>
      setVideos(data?.items)
    );
  }, [searchTerm]);

  return (
    <section className=''>
      <h3 className='text-2xl font-medium text-gray-200 hidden mt-2 sm:flex'>
        Поиск по запросу:{' '}
        <span className='ml-2 text-rose-500'>{searchTerm}</span>
      </h3>

      <Video data={videos} />
    </section>
  );
};
export default Search;
