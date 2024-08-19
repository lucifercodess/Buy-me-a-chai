import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Donate from './pages/Donate'
import NotFounf from './pages/NotFounf'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path = "/" element ={<Home/>}/>
        <Route path =  "/about" element ={<About/>}/>
        <Route path = "/contact" element ={<Contact/>}/>
        <Route path = "/donate" element ={<Donate/>}/>
        <Route path = "/not-found" element ={<NotFounf/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
