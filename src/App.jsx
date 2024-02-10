import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import { Index } from './pages/Index'
import About from './pages/About'
import ScrollToTop from './components/ScrollToTop'
import { usePreloader } from './components/Hooks'
import Preloder from './components/Preloader'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
function App() {
  useEffect(() => { AOS.init({ once: true, }); }, [])
  const isLoading = usePreloader();
  return (
    <>
      {isLoading ? (<Preloder />) : (<>
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <ScrollToTop />
      </>)}
    </>
  )
}

export default App
