import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
  <>
  <Navbar />
  <Routes>
    <Route element={<Home/>} path="/"/>
    </Routes>
    </>
  )
}

export default App
