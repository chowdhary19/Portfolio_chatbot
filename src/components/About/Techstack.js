import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiPostgresql,
} from "react-icons/di";
import {
  SiCplusplus,
  SiSolidity,
  SiExpress,
  SiFlask,
  SiFastapi,
  SiKeras,
  SiTensorflow,
  SiScikitlearn,
  SiTailwindcss,
  SiRedis,
  SiOracle,
  SiRedux,
} from "react-icons/si";
import "./Techstack.css"; // Import your CSS file

function Techstack() {
  const [isVisible, setIsVisible] = useState(false);
  const techStackRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the target is visible
    );

    if (techStackRef.current) {
      observer.observe(techStackRef.current);
    }

    return () => {
      if (techStackRef.current) {
        observer.unobserve(techStackRef.current);
      }
    };
  }, []);

  return (
    <div ref={techStackRef} style={{ textAlign: "center", paddingBottom: "50px" }}>
      <h1 className={`skill-matrix ${isVisible ? "zoom" : ""}`}>Skill <strong className="purple">Matrix </strong></h1>
      <Row style={{ justifyContent: "center" }}>
        {[
          <DiPython />,
          <DiJavascript1 />,
          <SiCplusplus />,
          <DiReact />,
          <SiRedux />,
          <DiNodejs />,
          <SiExpress />,
          <SiFlask />,
          <SiFastapi />,
          <SiKeras />,
          <SiTensorflow />,
          <SiScikitlearn />,
          <SiTailwindcss />,
          <DiMongodb />,
          <DiMysql />,
          <DiPostgresql />,
          <SiRedis />,
          <SiOracle />,
          <SiSolidity />,
        ].map((icon, index) => (
          <Col key={index} xs={4} md={2} className="tech-icons">
            <div className={`icon ${isVisible ? "animate" : ""}`}>
              {icon}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
