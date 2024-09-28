import React, { useEffect, useRef, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import "./Github.css"; // Import your CSS file for animations

function Github() {
  const [isVisible, setIsVisible] = useState(false);
  const githubRef = useRef(null);

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

    if (githubRef.current) {
      observer.observe(githubRef.current);
    }

    return () => {
      if (githubRef.current) {
        observer.unobserve(githubRef.current);
      }
    };
  }, []);

  return (
    <Row ref={githubRef} style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className={`project-heading ${isVisible ? "zoom" : ""}`} style={{ paddingBottom: "20px" }}>
        Coding <strong className="purple">Chronicles</strong>
      </h1>
      <GitHubCalendar
        username="robhudson"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
