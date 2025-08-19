import {} from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/common/header"
import Home from './pages/Home'
import Aboute from './pages/Aboute'
import Service from './pages/Service'
import Contact from './pages/Contact'
function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='aboute' element={<Aboute/>}/>
      <Route path='server' element={<Service/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
