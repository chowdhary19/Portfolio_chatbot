import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf1 from "../../Assets/Yuvraj_Chowdhary_Resume_2024.pdf";
import pdf2 from "../../Assets/Yuvraj_Chowdhary_2024_Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);
  const leftResumeRef = useRef(null);
  const rightResumeRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the resume is visible
    };

    const leftObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setAnimateLeft(true); // Trigger left resume animation
        leftObserver.disconnect(); // Stop observing once it has animated
      }
    }, observerOptions);

    const rightObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setAnimateRight(true); // Trigger right resume animation
        rightObserver.disconnect(); // Stop observing once it has animated
      }
    }, observerOptions);

    if (leftResumeRef.current) {
      leftObserver.observe(leftResumeRef.current);
    }
    if (rightResumeRef.current) {
      rightObserver.observe(rightResumeRef.current);
    }

    return () => {
      if (leftResumeRef.current) leftObserver.unobserve(leftResumeRef.current);
      if (rightResumeRef.current) rightObserver.unobserve(rightResumeRef.current);
    };
  }, []);

  return (
    <div>
      <style>{`
        /* Slide-in Animations */
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-150%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(150%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Infinite sway animation */
        @keyframes sway {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        /* Slide-in and sway effects for resumes */
        .resume-col {
          opacity: 0;
          transition: transform 1s ease-out, opacity 1s ease-out;
        }

        .animate-slide-in-left {
          animation: slideInFromLeft 1s ease-out forwards, sway 3s ease-in-out infinite 1s;
        }

        .animate-slide-in-right {
          animation: slideInFromRight 1s ease-out forwards, sway 3s ease-in-out infinite 1s;
        }

        /* Hover effect for resumes */
        .resume-col:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }

        /* Additional hover styling for the button */
        button:hover {
          background-color: #7b42f6;
          transform: scale(1.05);
        }
      `}</style>

      <Container fluid className="resume-section">
        <Particle />

        <Row className="justify-content-center mb-4">
          <h1 className="resume-heading">
            Profile <strong className="purple">Nexus</strong>
          </h1>
        </Row>

        {/* Resumes with CSS animations */}
        <Row className="resume justify-content-center">
          {/* Resume 1 */}
          <Col
            md={6}
            ref={leftResumeRef}
            className={`resume-col ${animateLeft ? "animate-slide-in-left" : ""} text-center`}
          >
            <h4>Resume 1</h4>
            <Document file={pdf1} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={1} />
            </Document>
            <Button variant="primary" href={pdf1} target="_blank" style={{ marginTop: "15px" }}>
              <AiOutlineDownload />
              &nbsp;Download Resume 1
            </Button>
          </Col>

          {/* Resume 2 */}
          <Col
            md={6}
            ref={rightResumeRef}
            className={`resume-col ${animateRight ? "animate-slide-in-right" : ""} text-center`}
          >
            <h4>Resume 2</h4>
            <Document file={pdf2} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={1} />
            </Document>
            <Button variant="primary" href={pdf2} target="_blank" style={{ marginTop: "15px" }}>
              <AiOutlineDownload />
              &nbsp;Download Resume 2
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
