import React from 'react'
import { abbreviateNumber } from "js-abbreviation-number";

const VideoCard = ({ info }) => {

  return (
    <div className='p-2 m-2 w-[20rem]'>
      <img className='rounded-lg' src={info?.snippet?.thumbnails.medium.url} alt="thumbnail" />

        <ul>
            <li>{info?.snippet?.localized.title}</li>
            <li>{info?.snippet?.channelTitle}</li>
            <li>{abbreviateNumber(info?.statistics?.viewCount, 1)} views</li>
        </ul>
    </div>
  )
}

export default VideoCard
