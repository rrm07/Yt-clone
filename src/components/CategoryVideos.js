import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const CategoryVideos = () => {

    const categoryVideosData = useSelector((store) => store.app.categoryVideo)

  return (
    <div className='p-2 m-2 ml-[18rem] l-0 overflow-y-auto h-screen max-h-[87vh]'>
        {
            categoryVideosData?.items.map((video, index) => (
                <div key={index}>
                    <Link to={'/watch?v=' + video.id.videoId} className='flex'>
                        <img className='rounded-lg m-1' src={video?.snippet?.thumbnails.medium.url} alt="thumbnail" />

                        <div>   
                            <ul>
                                <li>{video?.snippet?.title}</li>
                                <li>{video?.snippet?.channelTitle}</li>
                            </ul>
                        </div>
                    </Link>
                </div>
            ))
        }

    </div>
  )
}

export default CategoryVideos
