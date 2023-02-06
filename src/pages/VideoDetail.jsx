import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { fetchFromApi } from '../utils/fetchFromApi';
import { AiFillLike, AiFillEye } from 'react-icons/ai';
import { Video } from '../components';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then(data =>
      setVideoDetail(data?.items[0])
    );

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      data => setVideos(data?.items)
    );
  }, [id]);

  if (!videos?.length) {
    return 'Loading...';
  }

  return (
    <section>
      <div className='flex flex-col sm:flex-row  gap-4'>
        <div className='flex flex-col gap-4'>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            width='100%'
          />
          <p className='font-medium text-xl text-gray-100'>
            {videoDetail?.snippet?.title}
          </p>
          <div className='text-gray-400 flex justify-between items-center'>
            <p>{videoDetail?.snippet?.channelTitle}</p>

            <div className='flex items-center justify-between gap-2'>
              <p className='flex items-center justify-between gap-2'>
                <AiFillLike className='text-xl' />{' '}
                {videoDetail?.statistics?.likeCount}
              </p>
              <p className='flex items-center justify-between gap-2 '>
                <AiFillEye className='text-xl' />{' '}
                {videoDetail?.statistics?.viewCount}
              </p>
            </div>
          </div>

          <p className='text-sm text-gray-200'>
            {videoDetail?.snippet?.description}
          </p>
          <div className='flex gap-2 text-xs flex-wrap '>
            {videoDetail?.snippet?.tags?.map(item => (
              <span
                key={item}
                className='flex  px-2 py-1 bg-gray-800 text-gray-100 rounded-xl'
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className='flex flex-col flex-1 '>
          <Video data={videos} />
        </div>
      </div>
    </section>
  );
};
export default VideoDetail;
