import React from 'react';
import { VideoCard, ChannelCard } from './';

const Video = ({ data }) => {
  return (
    <div className='flex flex-wrap gap-8 items-center justify-center mt-4'>
      {data.map((item, idx) => (
        <article className='flex flex-col items-center max-w-xs' key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {/* {item.id.channelId && <ChannelCard channelDetail={item} />} */}
        </article>
      ))}
    </div>
  );
};
export default Video;
