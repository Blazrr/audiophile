import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Earphones from './pages/Earphones'
import HeadPhones from './pages/HeadPhones'
import Home from './pages/Home'
import Speakers from './pages/Speakers'

function App() {

  return (
  <>
    <Navbar />
  <Routes>
    <Route element={<Home/>} path="/"/>
    <Route element={<HeadPhones/>} path="/Headphones" />
    <Route element={<Speakers/>} path="/Speakers" />
    <Route element={<Earphones/>} path="/Earphones" />
    </Routes>
    </>
  )
}

export default App
