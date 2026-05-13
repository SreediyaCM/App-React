import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Features from './pages/Features'
import Community from './pages/Community'
import Blog from './pages/Blog'
import Pricing from './pages/Pricing'


function App() {
 
  return (
    <>
      <BrowserRouter> 
      <header>
      <nav>
        <img src="my-app/src/images/logo.svg" />
        <h2><b>Nexcent</b></h2>
        <Link to="/">Home</Link><br /> 
        <Link to="/Features">Features</Link><br />
        <Link to="/Community">Community</Link><br />
        <Link to="/Blog">Blog</Link><br />
        <Link to="/Pricing">Pricing</Link><br />
        <button>Register Now</button>
      </nav>
      </header>

      <footer>
        <div>
          <div className='footsec'>
            <h1>Nexcent</h1>
            <p>Copyright © 2020 Landify UI Kit.All rights reserved</p>

          </div><br />
          <div className='footsec'>
            <h3>Company</h3>
            <p>About us <br />Blog</p>
            <p>Contact us <br />Pricing <br />Testimonials</p>

          </div><br />
          <div>
            <h3>Support</h3>
            <p>Help center <br />Terms of service <br />Legal <br />Privacy policy <br />Status</p>

          </div><br /><br />

          <div>
            stay up to date 
            <input type="email" />
            
          </div>
        </div>
      </footer>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Features' element={<Features/>}/>
        <Route path='/Community' element={<Community/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
