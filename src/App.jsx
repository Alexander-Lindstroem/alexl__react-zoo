
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Mammals from './pages/Mammals'
import Birds from './pages/Birds'
import Reptiles from './pages/Reptiles'

function App() {
  const [currentPage, setCurrentPage] = useState("home")

  return (
    <>
      <Routes>
        <Route element={<Layout layoutCurrentPage={currentPage}/>}>
          <Route path="/" element={<Home setPage={setCurrentPage}/>} />
          <Route path="/mammals" element={<Mammals setPage={setCurrentPage}/>} />
          <Route path="/birds" element={<Birds setPage={setCurrentPage}/>} />
          <Route path="/reptiles" element={<Reptiles setPage={setCurrentPage}/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
