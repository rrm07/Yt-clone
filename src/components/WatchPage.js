import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVideos, closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import Comments from "./Comments";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import RelatedVideos from "./RelatedVideos";

const WatchPage = () => {

  const [showMore, setShowMore] = useState(false);
    
  const dispatch = useDispatch();
  let [searchParams] = useSearchParams();

  const videos = useSelector(store => store.app.videos)
  const videoData = videos?.find(video => video.id === searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
    fetchVideos()
  }, []);

  const fetchVideos = async() => {
    const data = await fetch(YOUTUBE_VIDEO_API)
    const json = await data.json();
    dispatch(addVideos(json.items))
  }

  return (
    <>
      <div className="px-20 mt-4">
        <iframe className="rounded-lg"
          width="800"
          height="450"
          src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?si=GDKNiXOfbxx21wDU"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

      {videoData &&
        <div className="mt-4 w-[50rem]">
          <p className="font-bold">{videoData?.snippet.localized.title}</p>

          <div className="grid grid-flow-col mt-2">
            <p className="col-span-4 font-semibold mt-3">{videoData?.snippet.channelTitle}</p>
            <p className="col-span-5 h-10 flex ml-[30rem] border border-gray-400 rounded-l-full bg-gray-100 p-2">
              <BiLike className="" size={25}/>
              <p className="">{abbreviateNumber(videoData?.statistics.likeCount)} Likes</p> 
            </p>
            <p className="border h-10 border-gray-400 rounded-r-full mr-2 bg-gray-100 p-2">
              <BiDislike size={25}/>
            </p>
          </div>

        <div className="bg-gray-200 rounded-xl p-2 mt-3">
          <p className="font-bold">{abbreviateNumber(videoData?.statistics.viewCount, 1)} Views</p>
          <h6>
            {showMore ? videoData?.snippet.localized.description : `${videoData?.snippet.localized.description.substring(0, 200)}`}
            <button className="text-white bg-zinc-950 rounded-xl p-2 m-1" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
          </h6>
        </div>
        <p className="mt-5 font-bold">{abbreviateNumber(videoData?.statistics.commentCount, 1)} comments</p>
      </div>
        
      }

        <Comments />
      </div>

      <RelatedVideos />
    </>
  );
};

export default WatchPage;
