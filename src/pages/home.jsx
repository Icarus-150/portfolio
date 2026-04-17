 import Journey from '../pages/journey.jsx';
  import Particle from "../assets/particle.jsx";
  import React from "react";
import { Col, Row } from "react-bootstrap";


import C from "../assets/TechIcons/C++.svg";
import Javascript from "../assets/TechIcons/Javascript.svg";
import Node from "../assets/TechIcons/Node.svg";
import ReactIcon from "../assets/TechIcons/React.svg";
import HaskellIcon from "../assets/TechIcons/Haskell.svg";

import Python from "../assets/TechIcons/Python.svg";
import Typescript from "../assets/TechIcons/Typescript.svg";
import Git from "../assets/TechIcons/Git.svg";
import Firebase from "../assets/TechIcons/Firebase.svg";
import Redis from "../assets/TechIcons/Redis.svg";
import Docker from "../assets/TechIcons/Docker.svg";
import Mongo from "../assets/TechIcons/Mongo.svg";
import SQL from "../assets/TechIcons/SQL.svg";
import Kubernates from "../assets/TechIcons/Kubernates.svg";

import Tailwind from "../assets/TechIcons/Tailwind.svg";

import Postman from "../assets/TechIcons/Postman.svg";
import AWS from "../assets/TechIcons/AWS.svg";

 function Home () {
 return (
 < main >
 <Particle/>
        
 {/* Hero Section */}
 < section className ="hero" >
 <h1 > Hi , I ' m Kevin </ h1 >
 <p> I'm a web developer with a thing for building tech that actually matters</p>
 </section>
 {/* About Section */}
 < section id ="about" className ="section" >
 <h2 > About Me </ h2 >
 <p >
 My career has been varied but intetional, from working directly with NGOs in oceanside housing and neighborhood services to supporting a Euhsd IT needs, I've consistently gravitated toward work where the impact is real and the community feels it.
Cloud computing in civic contexts are where I'm headed next. I am drawn to systems both the natural and man-made; the infrastructure enabling a city's to care for its residents or ocean currents that impact our weather. (Yes, I'm equally excited about space exploration and marine science).
check out some of the technologies i have used to this end:
 </p >

 <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C++" />
         <div className="tech-icons-text">C++</div>
       </Col>
       <Col xs={4} md={2} className="tech-icons">
         <img src={Javascript} alt="javascript" />
         <div className="tech-icons-text">Javascript</div>
       </Col>
       <Col xs={4} md={2} className="tech-icons">
         <img src={Typescript} alt="typescript" />
         <div className="tech-icons-text">Javascript</div>
       </Col>
    
       <Col xs={4} md={2} className="tech-icons">
         <img src={Node} alt="node" />
         <div className="tech-icons-text">Node.Js</div>
       </Col>
       <Col xs={4} md={2} className="tech-icons">
         <img src={ReactIcon} alt="react" />
         <div className="tech-icons-text">React.Js</div>
       </Col>
             <Col xs={4} md={2} className="tech-icons">
      <img src={Mongo} alt="mongoDb" />
         <div className="tech-icons-text">Mongo DB</div>
                </Col>
        {/* <Col xs={4} md={2} className="tech-icons">
         <img src={AWS} alt="Postman" />
         <div className="tech-icons-text">Postman</div>
       </Col> */}

       <Col xs={4} md={2} className="tech-icons">
         <img src={Git} alt="git" />
         <div className="tech-icons-text">Git</div>
       </Col>
       <Col xs={4} md={2} className="tech-icons">
         <img src={Firebase} alt="firebase" />
         <div className="tech-icons-text">Firebase</div>
       </Col>
       <Col xs={4} md={2} className="tech-icons">
         <img src={Redis} alt="redis" />
         <div className="tech-icons-text">Redis</div>
       </Col>
       <Col xs={4} md={2} className="tech-icons">
         <img src={Docker} alt="docker" />
         <div className="tech-icons-text">Docker</div>
       </Col>
       <Col xs={4} md={2} className="tech-icons">
         <img src={Kubernates} alt="kubernetes" />
         <div className="tech-icons-text">Kubernetes</div>
       </Col>

       <Col xs={4} md={2} className="tech-icons">
         <img src={SQL} alt="SQL" />
         <div className="tech-icons-text">Postgresql</div>
       </Col>

       <Col xs={4} md={2} className="tech-icons">
         <img src={Python} alt="Python" />
         <div className="tech-icons-text">Python</div>
       </Col>
   
      

       <Col xs={4} md={2} className="tech-icons">
         <img src={Tailwind} alt="tailwind" />
         <div className="tech-icons-text">Tailwind CSS</div>
       </Col>

       <Col xs={4} md={2} className="tech-icons">
         <img src={Postman} alt="Postman" />
         <div className="tech-icons-text">Postman</div>
       </Col>
     </Row>
 </ section >

 {/* Projects Section */}
 < section id ="projects" className ="section" >
  <h2 > Projects </ h2 >
 < div className ="projects-grid" >
 < ProjectCard
 title ="Tin Can"
 desc ="mobile backcountry camping trailer that conneects to the internet!"
/>
 < ProjectCard
 title ="the pit"
 desc =" my own cloud storage solution to my photography backlog"
 />
 <ProjectCard
 title ="Nufrend"
 desc = "a app to find your new furry family member"
  />
 </div >
 </section>
 {/* journey section */}
 < section id ="Journey" className ="section" >

<Journey/>

 
 </section>
 {/* Contact Section */}
 < section id ="contact" className ="section" >
 <h2 > Contact </ h2 >
 <p > Email : Mendo329@csusm.edu</ p >
 <p > GitHub : github.com/Icarus-150 </ p >
  <p > linkdin : https://www.linkedin.com/in/kevinmmendoza/</ p >
 
 </ section >
 </ main >
 );
 }

function ProjectCard ({ title , desc }) {

 return (
 < div className ="project-card" >
 <h3 >{ title } </ h3 >
 <p >{ desc } </p >
 </ div >
 ) ;
 }


// function Techstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={C} alt="C++" />
//         <div className="tech-icons-text">C++</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Javascript} alt="javascript" />
//         <div className="tech-icons-text">Javascript</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Typescript} alt="typescript" />
//         <div className="tech-icons-text">Javascript</div>
//       </Col>
    
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Node} alt="node" />
//         <div className="tech-icons-text">Node.Js</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={ReactIcon} alt="react" />
//         <div className="tech-icons-text">React.Js</div>
//       </Col>
      
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Mongo} alt="mongoDb" />
//         <div className="tech-icons-text">Mongo DB</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Redux} alt="redux" />
//         <div className="tech-icons-text">Redux</div>
//       </Col>

//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Git} alt="git" />
//         <div className="tech-icons-text">Git</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Firebase} alt="firebase" />
//         <div className="tech-icons-text">Firebase</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Redis} alt="redis" />
//         <div className="tech-icons-text">Redis</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Docker} alt="docker" />
//         <div className="tech-icons-text">Docker</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Kubernates} alt="kubernetes" />
//         <div className="tech-icons-text">Kubernetes</div>
//       </Col>

//       <Col xs={4} md={2} className="tech-icons">
//         <img src={SQL} alt="SQL" />
//         <div className="tech-icons-text">Postgresql</div>
//       </Col>

//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Python} alt="Python" />
//         <div className="tech-icons-text">Python</div>
//       </Col>
   
      

//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Tailwind} alt="tailwind" />
//         <div className="tech-icons-text">Tailwind CSS</div>
//       </Col>


//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Postman} alt="Postman" />
//         <div className="tech-icons-text">Postman</div>
//       </Col>

    

//       <Col xs={4} md={2} className="tech-icons">
//         <img src={AWS} alt="Postman" className="tech-icon-images" />
//         <div className="tech-icons-text">AWS</div>
//       </Col>

 
//     </Row>
//   );
// }


 export default Home