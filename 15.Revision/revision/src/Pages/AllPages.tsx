import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Home'
import Login from './Login'

const AllPages = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default AllPages