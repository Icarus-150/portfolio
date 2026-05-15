import Journey from './journey.jsx';
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



function ContactCard() {
  return (
    < main >
    
      {/* Contact Section */}
      < article id="contact-card" className="section" >
        <h2 > Contact </ h2 >
        <p > <a href="mailto:kevinmoisesmendoza@gmail.com">Email : Mendo329@csusm.edu </a></ p >
        <p > 
         <a href="https://www.github.com/Icarus-150">github.com/Icarus-150</a>
         </ p >
        <p>
          <a href="https://www.linkedin.com/in/kevinmmendoza"> linkedin</a>
          </ p >

      </article >
    </ main >
  );
}



export default ContactCard;