import { useState } from 'react'
import './App.css'
import Blog from './Components/Blog/Blog'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'


function App() {

  return (
    <>
    {/* Header section... */}
      <div className='w-11/12 mx-auto mt-3 px-3'>
          <Header></Header>
          <div className='w-full mt-3 h-[1px] bg-gray-200 mx-auto'></div>
      </div>

    {/* Main Container... */}
      <div className='w-11/12 mx-auto border border-black  mt-6 flex justify-between'>
          {/* Blogs container.. */}
          <div className='w-7/12'>
             <Blogs></Blogs>
          </div>
          {/* BookMark Container... */}
          <div className='w-4/12 border border-green-300'>
            <h2>BookMark Container.</h2>
          </div>
      </div>
    </>
  )
}

export default App
