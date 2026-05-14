import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import pdf from '../assets/Kevin_Mendoza.pdf';
 import Particle from "../assets/particle.jsx";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import 'react-pdf/dist/Page/TextLayer.css';
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
          {/* <Document file="/public/HW2.pdf"> */}
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
    
      </Container>
    </div>
  );
}

export default ResumeNew;
