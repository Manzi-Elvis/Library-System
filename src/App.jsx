import React from 'react'
import { useState } from 'react'
import SignUp from './pages/signup.jsx'
import Login from './pages/login.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
   </BrowserRouter>

  )
}

export default App
