import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChannelCard, Video } from '../components';
import { fetchFromApi } from '../utils/fetchFromApi';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideo, setChannelVideo] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then(data =>
      setChannelDetail(data?.items[0])
    );
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(data =>
      setChannelVideo(data?.items)
    );
  }, [id]);

  return (
    <div>
      <div className='bg-gradient-to-br from-[#8BC6EC] to-[#9599E2] h-[150px] rounded'></div>
      <ChannelCard channelDetail={channelDetail} />
      <div className='flex flex-wrap gap-6 items-center justify-center mt-8'>
        <Video data={channelVideo} />
      </div>
    </div>
  );
};
export default ChannelDetail;
