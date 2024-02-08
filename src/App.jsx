import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import { Index } from './pages/Index'
import About from './pages/About'
import ScrollToTop from './components/ScrollToTop'
import { usePreloader } from './components/Hooks'
import useNetwork from './components/useNetwork'
import { Alert } from '@mui/material'
import Preloder from './components/Preloader'
function App() {
  const networkState = useNetwork();
  const isLoading = usePreloader();
  return (
    <>
      {!networkState.online && <Alert className="fixed bottom-0 z-[100] max-md:!hidden" severity="error">you lost your internet connection</Alert>}
      {isLoading ? (<Preloder />) : (<>
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/Tokenomic" element={<Mision />} /> */}
          {/* <Route path="/Roadmap" element={<Traga />} /> */}
        </Routes>
        {/* <Footer /> */}
        <ScrollToTop />
      </>)}
    </>
  )
}

export default App
