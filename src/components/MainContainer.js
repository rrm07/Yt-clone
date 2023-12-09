import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux';

const MainContainer = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className={`${!isMenuOpen ? 'w-full ml-1' : 'ml-[18rem]'}`}>
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer
