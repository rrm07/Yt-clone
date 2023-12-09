import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LiveChat from "./LiveChat";

const RelatedVideos = () => {
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [chatbutton, setChatButton] = useState(false);

  useEffect(() => {
    fetchRelatedVideos();
  });

  const fetchRelatedVideos = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=IN&key="
    );
    const json = await data.json();
    setRelatedVideos(json.items);
  };

  const handleChatClick = () => {
    setChatButton(!chatbutton);
  };

  return (
    <div className="m-2 p-1 -ml-14">
        
        {chatbutton && <LiveChat />}

      <button
        onClick={handleChatClick}
        className="bg-gray-200 rounded-xl p-2 m-1 w-[25rem]"
      >
        {chatbutton ? "Hide Live Chat" : "Show Live Chat"}
      </button>

      {relatedVideos?.map((video, index) => (
        <div key={index}>
          <Link to={"/watch?v=" + video.id} className="flex">
            <img
              className=" w-44 rounded-lg m-1"
              src={video?.snippet?.thumbnails.medium.url}
              alt="thumbnail"
            />

            <div className="m-1">
              <ul>
                <li>{video?.snippet?.title}</li>
                <li className="font-bold">{video?.snippet?.channelTitle}</li>
              </ul>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RelatedVideos;
