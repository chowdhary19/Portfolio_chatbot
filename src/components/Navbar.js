import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { BsCalendarCheck } from "react-icons/bs";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <h2 className="ysc-logo purple">YSC</h2>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Miscellaneous"
                onClick={() => updateExpanded(false)}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Miscellaneous
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="schedule-meet-item">
              <a
                href="https://topmate.io/connect_yuvraj"
                target="_blank"
                rel="noopener noreferrer"
                className="schedule-meet-button"
                onClick={() => updateExpanded(false)}
              >
                <BsCalendarCheck className="schedule-icon" />
                <span className="schedule-text">Schedule Meet</span>
              </a>
              <span className="new-badge">New</span>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/chowdhary19/Portfolio.git"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style jsx>{`
        .ysc-logo {
          font-family: "Poppins", sans-serif;
          font-size: 2rem;
          font-weight: bold;
          animation: brightness 2s infinite alternate;
        }

        @keyframes brightness {
          0% {
            filter: brightness(1);
          }
          100% {
            filter: brightness(1.5);
          }
        }

        .navbar {
          position: fixed;
          transition: all 0.3s ease-out 0s !important;
          padding: 0.3rem 2rem !important;
          font-size: 1.2rem !important;
        }

        .navbar-toggler {
          position: relative !important;
          background-color: transparent !important;
          border-color: transparent !important;
        }

        .navbar-toggler span {
          display: block !important;
          background-color: #cd5ff8 !important;
          height: 4px !important;
          width: 27px !important;
          margin-top: 5px !important;
          margin-bottom: 5px !important;
          transform: rotate(0deg) !important;
          left: 0 !important;
          opacity: 1 !important;
        }

        .navbar-nav .nav-link {
          color: white !important;
          padding-right: 1rem !important;
          padding-left: 1rem !important;
        }

        .nav-link {
          padding: 0.8rem 1rem !important;
        }

        @media (max-width: 767px) {
          .navbar {
            padding: 1rem 2rem !important;
            font-size: 1.4rem !important;
            background-color: #181a27 !important;
          }
          .navbar-nav .nav-item a::after {
            display: none !important;
          }
        }

        .navbar-brand {
          color: rgb(250, 250, 250) !important;
        }

        .logo {
          height: 1.4em !important;
          width: 2.5em !important;
        }

        .navbar-nav .nav-link:hover {
          color: #cd5ff8 !important;
        }

        .navbar-brand {
          color: rgb(250, 250, 250) !important;
        }

        .purple {
          color: #cd5ff8 !important;
        }

        .fork-btn {
          font-size: 1.1em !important;
          padding-top: 10px !important;
        }

        .fork-btn-inner {
          line-height: 1.4em !important;
          background-color: #934cce5e !important;
          padding: 0.25rem 1.1rem !important;
          vertical-align: middle !important;
          text-align: center !important;
        }

        .fork-btn-inner:hover {
          transform: translateY(-2px) !important;
          background-color: #a24dd386 !important;
          border-color: #a24dd386 !important;
        }

        .fork-btn-inner::after {
          display: none !important;
        }

        .schedule-meet-item {
          position: relative;
          display: flex;
          align-items: center;
          margin-right: 10px;
        }

        .schedule-meet-button {
          display: flex;
          align-items: center;
          background-color: transparent;
          color: #cd5ff8;
          border: 2px solid #cd5ff8;
          border-radius: 20px;
          padding: 5px 10px;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          overflow: hidden;
          white-space: nowrap;
          width: 40px;
        }

        .schedule-meet-button:hover {
          width: 150px;
          background-color: #cd5ff8;
          color: #fff;
        }

        .schedule-icon {
          margin-right: 8px;
          font-size: 18px;
        }

        .schedule-text {
          opacity: 0;
          transform: translateX(-20px);
          transition: all 0.3s ease;
        }

        .schedule-meet-button:hover .schedule-text {
          opacity: 1;
          transform: translateX(0);
        }

        .new-badge {
          position: absolute;
          top: -1px;
          right: -5px;
          background-color: #ff4d4d;
          color: white;
          font-size: 0.6rem;
          padding: 2px 6px;
          border-radius: 10px;
          font-weight: bold;
          z-index: 1;
          box-shadow: 0 0 0 2px #181a27; /* This creates an outline effect */
        }

        @media (max-width: 767px) {
          .schedule-meet-button {
            width: auto;
            padding: 5px 10px;
          }

          .schedule-meet-button:hover {
            width: auto;
          }

          .schedule-text {
            opacity: 1;
            transform: translateX(0);
          }

          .new-badge {
            top: -8px;
            right: -8px;
          }
        }
      `}</style>
    </Navbar>
  );
}

export default NavBar;
