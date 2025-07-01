import React from 'react'
import { Link } from 'react-router-dom'

function RecipeItem({item}) {
  return (
    <div className='flex flex-col w-80 overflow-hidden p-5 shadow-xl dark:shadow-gray-900 bg-white/75 dark:bg-slate-800/85 gap-5 border-2 rounded-2xl border-white dark:border-gray-700'>
        <div className='h-40 flex justify-center overflow-hidden items-center rounded-xl'>
            <img src={item.image_url} alt={`${item.publisher}-${item.title}`} className='block w-full' />
        </div>
        <div>
            <span className='text-sm text-cyan-700 font-medium'>{item.publisher}</span>
            <h3 className='font-bold text-2xl truncate text-black dark:text-gray-200'>{item.title}</h3>
            <Link className='text-sm py-3 px-5 mt-3 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white hover:bg-cyan-700 duration-300' to={`/recipe-item/${item.id}`}>Recipe Details</Link>
        </div>
    </div>
  )
}

export default RecipeItem