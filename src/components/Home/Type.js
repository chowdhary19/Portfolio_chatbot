import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="typewriter-text">
      <Typewriter
        options={{
          strings: [
            "MERN Stack Developer",
            "REST API Specialist",
            "DevOps Engineer",
            "Machine Learning Practitioner",
            "Blockchain Developer",
            "Generative AI Innovator"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 100,
        }}
      />
      <style jsx>{`
        .typewriter-text {
          text-align: left;
          font-size: 1rem;
          line-height: 1.5;
          margin-left: 2.7rem; /* Aligned with heading */
        }
      `}</style>
    </div>
  );
}

export default Type;
