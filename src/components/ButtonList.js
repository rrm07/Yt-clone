import React, { useState } from 'react'

const ButtonList = () => {

  const [category, setCategory] = useState('All');

  const categories = ["All", "Gaming", "Music", "Science", "Space", "Astrology", "Sports", "News"]

  return (
   
    <div className='p-2 flex'>
        {categories.map((item, index) => (
            <button onClick={ () => setCategory(item)} key={index}
            className={`${item === category ? "bg-zinc-950 text-white hover:bg-zinc-950" : ""}
            bg-slate-200 px-3 py-1 m-2 rounded-lg hover:bg-slate-100`}>
              {item}
            </button>
        ))}
    </div>
  )
}

export default ButtonList
