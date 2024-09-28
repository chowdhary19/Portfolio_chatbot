import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  const [imageClass, setImageClass] = useState("drop");

  useEffect(() => {
    // Trigger bounce effect when the component is mounted
    const timer = setTimeout(() => {
      setImageClass("bounce");
    }, 500); // Start bouncing after a short delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", animation: 'fadeIn 1s ease' }}>
              
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className={`img-fluid ${imageClass}`}
              style={{ transition: "transform 0.5s ease" }} // Ensure smooth transition
            />
          </Col>
        </Row>
        <h1 className="project-heading" style={{ animation: 'fadeIn 1s ease' }}>
          {/* Skill <strong className="purple">Matrix </strong> */}
        </h1>

        <Techstack />

        <h1 className="project-heading" style={{ animation: 'fadeIn 1s ease' }}>
          {/* <strong className="purple">Tool </strong> Arsenal */}
        </h1>
        <Toolstack />

        <Github />
      </Container>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes drop {
          0% { transform: translateY(-150px); } /* Start above the viewport */
          50% { transform: translateY(30px); }  /* First bounce */
          75% { transform: translateY(15px); }  /* Second bounce */
          90% { transform: translateY(5px); }   /* Third bounce */
          100% { transform: translateY(0); }     /* Settle */
        }

        @keyframes bounce {
          0% { transform: translateY(0); }
          10% { transform: translateY(-50px); }  /* Initial lift */
          25% { transform: translateY(20px); }   /* First descent */
          35% { transform: translateY(-30px); }  /* Second lift */
          45% { transform: translateY(10px); }   /* Second descent */
          55% { transform: translateY(-20px); }  /* Third lift */
          65% { transform: translateY(5px); }    /* Third descent */
          75% { transform: translateY(-10px); }  /* Fourth lift */
          85% { transform: translateY(2px); }    /* Fourth descent */
          100% { transform: translateY(0); }      /* Settle */
        }

        .drop {
          animation: drop 1s ease forwards; /* Smooth drop effect */
        }

        .bounce {
          animation: bounce 3s cubic-bezier(0.25, 1.5, 0.5, 1) forwards; /* Smooth, natural bounce */
        }
      `}</style>
    </Container>
  );
}

export default About;
