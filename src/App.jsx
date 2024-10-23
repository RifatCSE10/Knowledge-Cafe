import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <div className='w-11/12 mx-auto mt-3 px-3'>
          <Header></Header>
          <div className='w-full mt-3 h-[1px] bg-gray-200 mx-auto'></div>
          <Blogs></Blogs>
      </div>
    </>
  )
}

export default App
