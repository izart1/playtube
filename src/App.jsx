import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Feed, SearchBar, Navbar } from './components';
import { VideoDetail, ChannelDetail, Search } from './pages';
export const MenuContext = createContext();

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      <div className='flex-1 flex flex-col bg-gradient-to-br from-[#000000] to-[#130F40] px-4 md:px-6  '>
        <Navbar />
        <div className='h-screen overflow-y-scroll no-scrollbar flex xl:flex-row flex-col-reverse'>
          <div className='flex-1 h-fit '>
            <Routes>
              <Route path='/' element={<Feed />} />
              <Route path='/video/:id' element={<VideoDetail />} />
              <Route path='/channel/:id' element={<ChannelDetail />} />
              <Route path='/search/:searchTerm' element={<Search />} />
            </Routes>
          </div>
        </div>
      </div>
    </MenuContext.Provider>
  );
}

export default App;
