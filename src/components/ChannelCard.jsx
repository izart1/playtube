import React from 'react';

const ChannelCard = ({ channelDetail }) => {
  return (
    <div className=' -mt-[90px] z-10 text-white flex flex-col gap-1 items-center justify-center'>
      <img
        className='rounded-full h-[180px] w-[180px] border border-gray-400'
        src={channelDetail?.brandingSettings.image.bannerExternalUrl}
        alt={channelDetail?.snippet?.title}
      />
      <p className='font-medium text-gray-100'>
        {channelDetail?.snippet?.title}
      </p>
      <p className='text-gray-400 text-sm'>
        {channelDetail?.statistics?.subscriberCount} подписчиков
      </p>
    </div>
  );
};
export default ChannelCard;
