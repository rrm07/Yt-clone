import React, { useEffect, useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import {
  MdOutlineNotifications,
  MdOutlineVideoCall,
  MdOutlineSearch,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addCategoryVideo, toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";
import { cachedResults } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [Showsuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search)

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery])
      }else{
        getSeacrhSuggestion()
      }
      // getSeacrhSuggestion()
    }, 200)

    return() => {
      clearTimeout(timer);
    }
  }, [searchQuery])

  const getSeacrhSuggestion = async() => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery)
    const json = await data.json()
    setSuggestion(json[1])
    dispatch(cachedResults({
      [searchQuery] : json[1]
    }))
  }

  const handleOpenMenu = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = async(e, searchQuery) => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const categoryVideos = await data.json();
    dispatch(addCategoryVideo(categoryVideos))
    navigate("/categoryVideos")
  }

  return (
    <div className="grid grid-flow-col h-16 sticky top-0">
      <div className="m-8 mt-4 flex col-span-1">
        <button
          className="mb-6 hover:bg-slate-200 rounded-lg active:bg-slate-100"
          onClick={handleOpenMenu}
        >
          <TfiMenu size={24} />
        </button>
        <div className="-mt-6 px-4">
          <Link to="/">
            <img
              className="h-[5rem]"
              src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png"
              alt="youtube logo"
            />
          </Link>
        </div>
      </div>

      <div className="mb-10 flex col-span-5 items-center justify-center pr-48 pl-32">
        <input
          placeholder="Search"
          className="w-[30rem] p-4 border border-gray-400 h-10 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
                window.location.href = "/categoryVideos";
            }
        }}
        />
        <button onClick={(e) => handleSearch(e, searchQuery)}>
          <MdOutlineSearch
            className="border border-gray-400 rounded-r-full bg-gray-100 p-2"
            size={40}
          />
        </button>

        <div className="fixed bg-white shadow-lg w-[30rem] mt-[26rem] mr-8 rounded-lg">
          <ul>
            {
            Showsuggestion &&
            suggestion.map((s, index) => (
              <li
              key={index} className="hover:bg-gray-100 rounded-lg p-1 m-1">{s}</li>
            ))
            }
          </ul>
        </div>

      </div>

      <div className="flex col-span-4 m-8 mt-4 justify-between">
        <MdOutlineNotifications size={28} />
        <MdOutlineVideoCall size={28} />
        <img
          className="h-[2rem] w-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user icon"
        />
      </div>
    </div>
  );
};

export default Header;
