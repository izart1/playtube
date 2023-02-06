import React from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment/moment';
import 'moment/locale/ru';

const VideoCard = ({ video }) => {
  return (
    <>
      <Link to={`/video/${video.id.videoId}`}>
        <img
          src={video?.snippet?.thumbnails?.default?.url}
          alt={video?.snippet?.title}
          className={'w-[320px] h-[180px] rounded'}
        />
      </Link>
      <div className='h-[105px] w-[320px] p-2  flex flex-col gap-1 bg-stone-900/70 rounded'>
        <Link className='cursor-pointer' to={`/video/${video.id.videoId}`}>
          <p className='font-medium text-gray-100'>
            {video?.snippet?.title.slice(0, 60)}
          </p>
        </Link>
        <Link to={`/channel/${video?.snippet?.channelId}`}>
          <p className='text-xs text-gray-400'>
            {video?.snippet?.channelTitle}
          </p>
        </Link>
        <Link to={`/video/${video.id.videoId}`}>
          <p className='text-sm text-gray-400'>
            {moment(video?.snippet?.publishTime).locale('ru').fromNow()}
          </p>
        </Link>
      </div>
    </>
  );
};
export default VideoCard;
