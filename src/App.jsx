

// export default App
import { Routes , Route , Link } from 'react-router-dom';
import Home from './pages/home.jsx';
 import Blog from './pages/blog.jsx';
 import Journey from './pages/journey.jsx';
  import ResumeNew from './pages/resume.jsx';
  import 'bootstrap/dist/css/bootstrap.min.css';
   import Particle from "./assets/particle.jsx";
 function App () {
 return (
 < div className ="app" >
 < nav className ="navbar" >
 < Link to ="/" className ="nav-logo" > ME </ Link >
 < div className ="nav-links" >
 <a href ="#about" > About </a>
 <a href ="#projects" > Projects </a>
 <a href ="#contact" > Contact </a>
 {/* <a href ="#journey" > Journey </a> */}
 < Link to ="/blog" > Blog </Link>
 < Link to ="/journey" > journey </Link>
 < Link to ="/resume" > resume </Link>
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