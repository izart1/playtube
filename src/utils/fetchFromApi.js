import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: { maxResults: '10' },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },

  //   headers: {
  //     'X-RapidAPI-Key': 'c548bc88fdmshed8fc8522228b91p12455djsn5945a3b9894f',
  //     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  //   },
};

export const fetchFromApi = async url => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
