import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Protectpag from './pages/Protectpag'
import Pokedex from './pages/Pokedex'
import Stats from './pages/Stats'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<Protectpag />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/stats'element={<Stats/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
