import React, { useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addVideos } from '../utils/appSlice';

const VideoContainer = () => {

  // const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchVideos()
  }, [])

  const videos = useSelector(store => store.app.videos)

  const fetchVideos = async() => {
    const data = await fetch(YOUTUBE_VIDEO_API)
    const json = await data.json();
    // setVideos(json.items);
    dispatch(addVideos(json.items))
  }

  return (
    <div className='flex flex-wrap l-0 overflow-y-auto h-screen max-h-[79vh]'>
      {
        videos?.map((video) => 
        ( <Link key={video.id} to={'/watch?v=' + video.id}><VideoCard info={video} /> </Link>) )
      }
    </div>
  )
}

export default VideoContainer
