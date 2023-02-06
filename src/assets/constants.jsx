import { AiFillHome } from 'react-icons/ai';
import { BsMusicNote } from 'react-icons/bs';
import { FaBitcoin, FaCode, FaGamepad, FaLaughBeam } from 'react-icons/fa';
import { HiStatusOnline } from 'react-icons/hi';
import { MdLocalMovies, MdOutlineSportsSoccer } from 'react-icons/md';

export const categories = [
  { name: 'New', icon: <AiFillHome /> },
  { name: 'Coding', icon: <FaCode /> },
  { name: 'Music', icon: <BsMusicNote /> },
  { name: 'Movie', icon: <MdLocalMovies /> },
  { name: 'Gaming', icon: <FaGamepad /> },
  { name: 'Live', icon: <HiStatusOnline /> },
  { name: 'Sport', icon: <MdOutlineSportsSoccer /> },
  { name: 'Comedy', icon: <FaLaughBeam /> },
  { name: 'Crypto', icon: <FaBitcoin /> },
];
