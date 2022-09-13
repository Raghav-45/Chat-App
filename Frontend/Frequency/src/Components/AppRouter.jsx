import React from 'react'
import Profile from '../Pages/Profile'
import Login from '../Pages/Login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function AppRouter() {
  
  return (
    <Router>
      <Routes>
        <Route index element={<Profile/>} />
        <Route path='/login' element={<Login/>} />
        {/* <Route path='/puppet' element={<Puppet/>} />
        <Route path='/profile/:seed' element={<Profile/>} />
        <Route path='/seed/:seed' element={<SeedPage/>} /> */}
      </Routes>
    </Router>
  )
}

export default AppRouter