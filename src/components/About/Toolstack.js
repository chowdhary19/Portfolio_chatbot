import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGit,
  SiDocker,
  SiKubernetes,
  SiJupyter,
  SiFigma,
  SiGooglecloud,
  SiAmazonaws,
  SiMicrosoftazure,
  SiFirebase,
  SiPowerbi,
  SiVisualstudiocode,
  SiGrafana,
  SiPrometheus,
} from "react-icons/si";
import "./Toolstack.css"; // Import your CSS file

function Toolstack() {
  const [isVisible, setIsVisible] = useState(false);
  const toolStackRef = useRef(null);

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

    if (toolStackRef.current) {
      observer.observe(toolStackRef.current);
    }

    return () => {
      if (toolStackRef.current) {
        observer.unobserve(toolStackRef.current);
      }
    };
  }, []);

  return (
    <div ref={toolStackRef} style={{ textAlign: "center", paddingBottom: "50px" }}>
      <h2 className={`tool-stack-title ${isVisible ? "zoom" : ""}`}><strong className="purple">Tool </strong> Stack</h2>
      <Row style={{ justifyContent: "center" }}>
        {[
          <SiGit />,
          <SiDocker />,
          <SiKubernetes />,
          <SiAmazonaws />,
          <SiGooglecloud />,
          <SiMicrosoftazure />,
          <SiFirebase />,
          <SiJupyter />,
          <SiFigma />,
          <SiPowerbi />,
          <SiVisualstudiocode />,
          <SiGrafana />,
          <SiPrometheus />,
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

export default Toolstack;
