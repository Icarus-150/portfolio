

// export default App
import { useEffect } from 'react';
import { Routes , Route , Link, useLocation } from 'react-router-dom';
import Home from './pages/home.jsx';
 import Blog from './pages/blog.jsx';
 import Journey from './pages/journey.jsx';
  import ResumeNew from './pages/resume.jsx';
  import 'bootstrap/dist/css/bootstrap.min.css';
   import Particle from "./assets/particle.jsx";

function ScrollToHash() {
  const { hash,pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay lets the page render before trying to scroll
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [hash, pathname]); // pathname ensures it fires on cross-page navigation too

  return null;
}
 function App () {
 
  return (
 < div className ="app" >
  <ScrollToHash /> 
 < nav className ="navbar" >
 
 < Link to ="/" className ="nav-logo" > Mendoza </ Link >
 < div className ="nav-links" >

    <Link to="/#about">About</Link>
    <Link to="/#projects">Projects</Link>
    <Link to="/#contact">Contact</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/journey">Journey</Link>
    <Link to="/resume">Resume</Link>
    
 </ div >
 </ nav >

 < Routes >
  
 < Route path ="/" element ={< Home/>} /> 
 < Route path ="/blog" element ={ <Blog/>}/>
< Route path ="/journey" element ={ <Journey/>}/>
< Route path ="/resume" element ={ <ResumeNew/>}/>

 </ Routes >
 </ div >
 ) ;
 }

 export default App;