import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const [logoVisible, setLogoVisible] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Trigger the logo slide-in after the text appears
  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoVisible(true);
    }, 1000); // Delay the logo slide by 1 second after text appears
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scrolling into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(sectionRef.current); // Stop observing after entering view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef}>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1
                style={{ paddingBottom: 15 }}
                className={`heading animate-fade-in ${inView ? "animate-slide-in-left" : ""}`}
              >
                <span className="animate-slide-up">Code,</span>{" "}
                <span className="animate-slide-up" style={{ animationDelay: "0.2s" }}>create,</span>{" "}
                <span className="animate-slide-up" style={{ animationDelay: "0.4s" }}>captivate</span>{" "}
                <span className="wave animate-wave" role="img" aria-labelledby="wave" style={{ animationDelay: "0.6s" }}>
                  🖥️
                </span>
              </h1>
              <h1 className={`heading-name animate-slide-up ${inView ? "animate-slide-in-left" : ""}`} style={{ animationDelay: "0.8s" }}>
                I'm
                <strong className="main-name"> Yuvraj Singh Chowdhary</strong>
                , Elevating Every Project with Precision and Passion
              </h1>
              <br/>
              <br/>
              <div
                style={{ paddingTop: 30, textAlign: "left", display: "inline-block", verticalAlign: "top" }}
                className="typewriter-container animate-slide-up"
                style={{ animationDelay: "1.2s" }}
              >
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className={`img-fluid ${logoVisible ? "animate-slide-in" : ""}`}
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes slideInFromRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInFromLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slide-up {
          opacity: 0;
          animation: slideUp 1s ease-out forwards;
        }

        .animate-slide-in {
          animation: slideInFromRight 1s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInFromLeft 1s ease-out forwards;
        }

        .wave {
          display: inline-block;
        }

        /* Add any additional styles you need for the home component */
      `}</style>
    </section>
  );
}

export default Home;
