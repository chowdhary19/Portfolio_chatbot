import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const sectionRef = useRef(null);
  const avatarRef = useRef(null);
  const [textInView, setTextInView] = useState(false);

  useEffect(() => {
    let avatarRotationTimeout;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (avatarRef.current) {
            avatarRef.current.classList.add("rotate-avatar");
            avatarRotationTimeout = setTimeout(() => {
              avatarRef.current.classList.remove("rotate-avatar");
            }, 6000); // Adjust time based on number of rotations
          }
          setTextInView(true); // Set textInView to true when in view
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Trigger when at least 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      clearTimeout(avatarRotationTimeout);
    };
  }, []);

  // Optional: Add click to rotate functionality
  const handleAvatarClick = () => {
    if (avatarRef.current) {
      avatarRef.current.classList.add("rotate-avatar");
      setTimeout(() => {
        avatarRef.current.classList.remove("rotate-avatar");
      }, 6000); // Match this with the scroll timeout for smooth behavior
    }
  };

  const tingleLetters = (text) => {
    return text.split("").map((letter, index) => (
      <span key={index} className="tingle-letter" style={{ animationDelay: `${index * 0.1}s` }}>
        {letter}
      </span>
    ));
  };

  return (
    <Container fluid className="home-about-section" id="about" ref={sectionRef}>
      <Container>
        <Row>
          <Col md={8} className={`home-about-description ${textInView ? "slide-in" : ""}`}>
            <h1 style={{ fontSize: "2.6em" }}>
              Delve into My <span className="purple">{tingleLetters("World")}</span>
            </h1>
            <p className="home-about-body">
              <i>
                <b className="quote">
                  "The best way to predict the future is to invent it." — Alan Kay
                </b>
              </i>
              <br />
              <br />
              Hey there! I'm Yuvraj Singh Chowdhary. My love for programming began with a spark of curiosity and has evolved into a passion for creating innovative solutions. 🚀
              <br />
              <br />
              With a solid foundation in <b className="purple">{tingleLetters("C++, JavaScript, and Solidity")}</b>, I delve into the world of <b className="purple">{tingleLetters("Web Technologies")}</b>, <b className="purple">{tingleLetters("Blockchain")}</b>, and <b className="purple">{tingleLetters("Generative AI")}</b>. I enjoy transforming ideas into reality using <b className="purple">{tingleLetters("Node.js")}</b> and <b className="purple">{tingleLetters("Modern  JavaScript  Libraries")}</b> like <b className="purple">{tingleLetters("React.js")}</b> and <b className="purple">{tingleLetters("Next.js")}</b>.
              <br />
              <br />
              I'm always excited about new challenges and opportunities to collaborate. If you're passionate about technology or have an interesting project in mind, let's connect and create something amazing together!
              <br />
              <br />
              <b className="cta">Reach out to me, and let's make innovation happen!</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Tilt>
              <img
                src={myImg}
                className="img-fluid avatar-img"
                alt="avatar"
                ref={avatarRef}
                onClick={handleAvatarClick} // Optional click-to-rotate behavior
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social animate-slide-up" style={{ animationDelay: "0.7s" }}>
            <h1 className="glow">Engage With Me Here 💬</h1>
            <p className="glow">
              Open to New <span className="purple">Connections</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons animate-pop" style={{ animationDelay: "0.8s" }}>
                <a
                  href="https://github.com/chowdhary19"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons glow"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons animate-pop" style={{ animationDelay: "0.9s" }}>
                <a
                  href="https://x.com/Yuvrajsing67321"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons glow"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons animate-pop" style={{ animationDelay: "1s" }}>
                <a
                  href="https://www.linkedin.com/in/connectyuvraj/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons glow"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons animate-pop" style={{ animationDelay: "1.1s" }}>
                <a
                  href="https://www.instagram.com/yuvi_1689/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons glow"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes rotate360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(1080deg); } /* 3 full rotations */
        }

        @keyframes glow {
          0% { text-shadow: 0 0 2px #fff, 0 0 4px #ff00ff, 0 0 6px #ff00ff; }
          50% { text-shadow: 0 0 5px #fff, 0 0 8px #ff00ff, 0 0 10px #ff00ff; }
          100% { text-shadow: 0 0 2px #fff, 0 0 4px #ff00ff, 0 0 6px #ff00ff; }
        }

        @keyframes tingle {
          0% { transform: translate(0); }
          25% { transform: translate(-0.5px, -0.5px); } /* Reduced translation */
          50% { transform: translate(0.5px, 0.5px); }
          75% { transform: translate(-0.5px, 0.5px); }
          100% { transform: translate(0); }
        }


        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
        }

        .slide-in {
          animation: slideIn 0.9s ease-out forwards; /* Slide-in animation */
        }

        .animate-pop {
          animation: pop 0.5s cubic-bezier(0.26, 0.53, 0.74, 1.48) forwards;
        }

        .rotate-avatar {
          animation: rotate360 6s ease-in-out forwards; /* Adjust timing */
        }

        .avatar-img {
          transition: transform 0.3s ease;
        }

        .tingle-letter {
          display: inline-block;
          animation: tingle 1s infinite; /* Slower tingle */
        }

        .glow {
          animation: glow 2s infinite; /* Glow effect */
        }
      `}</style>
    </Container>
  );
}

export default Home2;
