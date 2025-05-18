import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import AnimalHome from './pages/AnimalHome'
import AnimalType from './pages/AnimalType'
import Animal from './pages/Animal'
import WelcomeHome from './pages/WelcomeHome'
import WelcomeAnimal from './pages/WelcomeAnimal'

function App() {
  const [currentPage, setCurrentPage] = useState("home")

  return (
    <>
      <Routes>
        <Route element={<Layout layoutCurrentPage={currentPage}/>}>
          <Route path="/" element={<Home setPage={setCurrentPage}/>}>
            <Route index element={<WelcomeHome/>}/>
            <Route path="/home/:animal" element={<AnimalHome/>}/>
          </Route>
          <Route path=":animalType" element={<AnimalType setPage={setCurrentPage}/>}>
            <Route index element={<WelcomeAnimal type={currentPage}/>}/>
            <Route path=":animal" element={<Animal/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
