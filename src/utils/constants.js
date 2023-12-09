import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
    { name: "New", icon: <AiFillHome size={24}/>, type: "home" },
    { name: "Trending", icon: <MdLocalFireDepartment size={24} />, type: "category" },
    { name: "Music", icon: <CgMusicNote size={24} />, type: "category" },
    { name: "Films", icon: <FiFilm size={24} />, type: "category" }, 
    { name: "Live", icon: <MdLiveTv size={24} />, type: "category" },
    { name: "Gaming", icon: <IoGameControllerSharp size={24} />, type: "category" },
    { name: "News", icon: <ImNewspaper size={24} />, type: "category" },
    { name: "Sports", icon: <GiDiamondTrophy size={24} />, type: "category" },
    { name: "Learning", icon: <RiLightbulbLine size={24} />, type: "category" },
    {
        name: "Fashion & beauty",
        icon: <GiEclipse size={24} />,
        type: "category",
        divider: true,
    },
    { name: "Settings", icon: <FiSettings size={24} />, type: "menu" },
    { name: "Report History", icon: <AiOutlineFlag size={24} />, type: "menu" },
    { name: "Help", icon: <FiHelpCircle size={24} />, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine size={24} />, type: "menu" },
];

const GOOGLE_API_KEY = "AIzaSyAC_SL8B3RyKPJx2B0eR2zsrAtXZkzFLZo"
export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY

export const YOUTUBE_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" + GOOGLE_API_KEY + "&q="

export const YOUTUBE_SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
