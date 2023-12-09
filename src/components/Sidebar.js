import React from 'react'
import { YOUTUBE_SEARCH_API, categories } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addCategoryVideo, setCategory } from '../utils/appSlice';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const dispatch = useDispatch();
  const selectedCategory = useSelector((store) => store.app.selectedCategory)

  const navigate = useNavigate();

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const fetchCategoryVideos = async(category) => {
    if(category.name === 'New'){
      navigate("/")
    }
    else{
      const data = await fetch(YOUTUBE_SEARCH_API + category.name)
      const categoryVideos = await data.json();
      dispatch(addCategoryVideo(categoryVideos))
      navigate("/categoryVideos")
    }
  }

  const handleCategoryButtonClick = (e, category) => {
    dispatch(setCategory(category.name))
    fetchCategoryVideos(category)
  }

  if (!isMenuOpen)  return null;

  return (
      <div className='p-1 m-4 mt-2 w-64 bg-white fixed l-0 overflow-y-scroll h-screen max-h-[88vh]'>
        {
          categories.map((category, index) => (
          <div key={index}>  
            <button onClick={ (e) => handleCategoryButtonClick(e, category)}
            className={`${selectedCategory === category.name ? "bg-slate-200" : ""} flex w-full h-14
             hover:bg-slate-200 rounded-lg`}>
              <p className='m-4'>{category.icon}</p>
              <p className='mt-4 px-4'>{category.name}</p>
            </button>

            {category.divider && (
              <hr></hr>
            )}
          </div>
          ))
        }
      </div>
  )
}

export default Sidebar
