import Journey from '../pages/journey.jsx';
import Particle from "../assets/particle.jsx";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useEffect } from "react";

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
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useState } from 'react';
import ContactCard from './contactcard.jsx';

function TechIcon({ src, name, description, isOpen, onToggle }) {
  return (

    <div
      className={`tech-icons ${isOpen ? 'tech-icons--expanded' : ''}`}
      onClick={onToggle}
    >
      <div className="tech-icons-header">
        <img src={src} alt={name} className="tech-icon-images" />
        <div className="tech-icons-text">{name}</div>
      </div>
      <div className="tech-icons-details">
        <p>{description}</p>
      </div>
    </div>
  );
}

function TechStack() {
  const [openIcon, setOpenIcon] = useState(null);

  return (
    <div className="tech-icons-grid">  {/* grid only here */}
      <div className="tech-icons-grid">
        <TechIcon src={C} name="C++"
          description="Used for systems programming and competitive coding."
          isOpen={openIcon === "C++"} onToggle={() => setOpenIcon(openIcon === "C++" ? null : "C++")} />

        <TechIcon src={Python} name="Python"
          description="Primary language for data science and scripting."
          isOpen={openIcon === "Python"} onToggle={() => setOpenIcon(openIcon === "Python" ? null : "Python")} />

        <TechIcon src={Javascript} name="JavaScript"
          description="Core language for web development and frontend interactivity."
          isOpen={openIcon === "JavaScript"} onToggle={() => setOpenIcon(openIcon === "JavaScript" ? null : "JavaScript")} />

        <TechIcon src={Typescript} name="TypeScript"
          description="Strongly typed superset of JavaScript for scalable apps."
          isOpen={openIcon === "TypeScript"} onToggle={() => setOpenIcon(openIcon === "TypeScript" ? null : "TypeScript")} />

        <TechIcon src={Node} name="Node.js"
          description="JavaScript runtime for building fast backend services."
          isOpen={openIcon === "Node.js"} onToggle={() => setOpenIcon(openIcon === "Node.js" ? null : "Node.js")} />

        <TechIcon src={ReactIcon} name="React.js"
          description="Component-based library for building dynamic user interfaces."
          isOpen={openIcon === "React.js"} onToggle={() => setOpenIcon(openIcon === "React.js" ? null : "React.js")} />

        <TechIcon src={Mongo} name="MongoDB"
          description="NoSQL document database for flexible, scalable data storage."
          isOpen={openIcon === "MongoDB"} onToggle={() => setOpenIcon(openIcon === "MongoDB" ? null : "MongoDB")} />

        <TechIcon src={Git} name="Git"
          description="Version control system for tracking and managing code changes."
          isOpen={openIcon === "Git"} onToggle={() => setOpenIcon(openIcon === "Git" ? null : "Git")} />

        <TechIcon src={Firebase} name="Firebase"
          description="Google's platform for real-time databases and app hosting."
          isOpen={openIcon === "Firebase"} onToggle={() => setOpenIcon(openIcon === "Firebase" ? null : "Firebase")} />

        <TechIcon src={Redis} name="Redis"
          description="In-memory data store used for caching and fast data access."
          isOpen={openIcon === "Redis"} onToggle={() => setOpenIcon(openIcon === "Redis" ? null : "Redis")} />

        <TechIcon src={Docker} name="Docker"
          description="Platform for building and running containerized applications."
          isOpen={openIcon === "Docker"} onToggle={() => setOpenIcon(openIcon === "Docker" ? null : "Docker")} />

        <TechIcon src={Kubernates} name="Kubernetes"
          description="Container orchestration system for automating deployment and scaling."
          isOpen={openIcon === "Kubernetes"} onToggle={() => setOpenIcon(openIcon === "Kubernetes" ? null : "Kubernetes")} />

        <TechIcon src={SQL} name="PostgreSQL"
          description="Powerful open-source relational database with advanced SQL support."
          isOpen={openIcon === "PostgreSQL"} onToggle={() => setOpenIcon(openIcon === "PostgreSQL" ? null : "PostgreSQL")} />

        <TechIcon src={Tailwind} name="Tailwind CSS"
          description="Utility-first CSS framework for rapidly building custom designs."
          isOpen={openIcon === "Tailwind CSS"} onToggle={() => setOpenIcon(openIcon === "Tailwind CSS" ? null : "Tailwind CSS")} />

        <TechIcon src={Postman} name="Postman"
          description="API platform for building, testing, and documenting APIs."
          isOpen={openIcon === "Postman"} onToggle={() => setOpenIcon(openIcon === "Postman" ? null : "Postman")} />
      </div>
    </div>
  );

}
function Home() {
  return (
    < main >
      <Particle />

      {/* Hero Section */}
      < section className="hero" >
        <h1 id="name-banner"> Hi, I'm Kevin Mendoza</ h1 >
        <p> I'm a web developer with a thing for building tech that actually matters</p>
        <FunFacts />
      </section>
      {/* About Section */}
      < section id="about" className="section" >
        <h2 > About Me </ h2 >
        <p >
          My career has been varied but intentional, spaning years and fields, from working directly with NGOs in oceanside housing and neighborhood services to supporting Euhsd's IT needs to automotive apprentice, I've consistently gravitated toward work where the impact is real and My community feels it.
          Cloud computing in civic contexts are where I'm headed next. I am drawn to systems both the natural and man-made; the infrastructure enabling a city's to care for its residents or ocean currents that impact our weather. (Yes, I'm equally excited about space exploration and marine science).
          check out some of the technologies i have used to this end:
        </p >

        {/* Tech Stack Section */}

        <TechStack>     </TechStack>

      </ section >

      {/* Projects Section */}
      < section id="projects" className="section" >
        <h2 > Projects </ h2 >
        < div className="projects-grid" >
          < ProjectCard
            title="Tin Can"
            desc="mobile backcountry camping trailer that conneects to the internet!"
          />
          < ProjectCard
            title="the pit"
            desc=" my own cloud storage solution to my photography backlog"
          />
          <ProjectCard
            title="Nufrend"
            desc="a app to find your new furry family member"
          />
        </div >
      </section>
      {/* journey section */}
      < section id="Journey" className="section" >
        <h2 > career journey </ h2 >

        <Journey />


      </section>
      {/* Contact Section */}
      <ContactCard>
        
      </ContactCard>
      
    </ main >
  );
}
function FunFacts() {
  const [fact, setFact] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFact() {
      try {
        const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        setFact(data.text);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchFact();
  }, []); // empty array = runs once on mount

  if (error) return <p>Error: {error}</p>;
  if (!fact) return <p>Loading...</p>;

  return (
    <>
      <p>A fun fact for You: {fact}</p>
    </>
  );
}
function ProjectCard({ title, desc }) {

  return (
    < div className="project-card" >
      <h3 >{title} </ h3 >
      <p >{desc} </p >

    </ div >
  );
}


export default Home