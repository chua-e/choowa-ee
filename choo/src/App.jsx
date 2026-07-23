import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'

import About from './components/pages/About'
import Resume from './components/pages/Resume'
import Sample from './components/pages/Sample'
import References from './components/pages/References'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/choowa-ee/' element={<About />}/>
        <Route path='/choowa-ee/resume' element={<Resume />}/>
        <Route path='/choowa-ee/sampleworks' element={<Sample />}/>
        <Route path='/choowa-ee/references' element={<References />}/>
      </Routes>
    </>
  )
}

export default App
