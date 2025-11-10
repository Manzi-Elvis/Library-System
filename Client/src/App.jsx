import React from 'react'
import { useState } from 'react'
import Signup from './pages/signup.jsx'
import Login from './pages/login.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
   </BrowserRouter>

  )
}

export default App