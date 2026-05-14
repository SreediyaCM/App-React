import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Features from './pages/Features'
import Community from './pages/Community'
import Blog from './pages/Blog'
import Pricing from './pages/Pricing'
import logo from './images/logo.svg'
import Footer from './components/Footer'



function App() {
 
  return (
    <>
      <BrowserRouter> 
        <nav>
          <img src='/images/logo.svg' />
          <h2><b>Nexcent</b></h2>
          <Link to="/">Home</Link><br /> 
          <Link to="/Features">Features</Link><br />
          <Link to="/Community">Community</Link><br />
          <Link to="/Blog">Blog</Link><br />
          <Link to="/Pricing">Pricing</Link><br />
          <button>Register Now</button>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Features' element={<Features/>}/>
          <Route path='/Community' element={<Community/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/Pricing' element={<Pricing/>}/> 
        </Routes>
      
        
        <Footer/>
      
      </BrowserRouter>
    </>
  )
}

export default App
