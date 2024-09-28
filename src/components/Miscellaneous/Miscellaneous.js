import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MiscellaneousCard from "./MiscellaneousCard";
import img1 from "../../Assets/Certificates/Blockchain.jpg";
import img2 from "../../Assets/Certificates/git.jpg";
import img3 from "../../Assets/Certificates/LLM.jpg";
import img4 from "../../Assets/Certificates/ml.jpg";
import img5 from "../../Assets/Certificates/Microsoft.jpg";
import img6 from "../../Assets/Certificates/problem.jpg";
import img7 from "../../Assets/Certificates/python.jpg";
import img8 from "../../Assets/Certificates/sql.jpg";
import img9 from "../../Assets/Certificates/webdev.jpg";
import winningImg1 from "../../Assets/1.jpg"; // Replace with your actual image paths
import winningImg2 from "../../Assets/2.jpg";
import winningImg3 from "../../Assets/3.jpg";
import winningImg4 from "../../Assets/4.jpg";
import winningImg5 from "../../Assets/5.jpg";
import winningImg6 from "../../Assets/6.jpg";
import winningImg7 from "../../Assets/7.jpg";
import winningImg8 from "../../Assets/8.jpg";
import winningImg9 from "../../Assets/9.jpg";
import Carousel from 'react-bootstrap/Carousel';
import CountUp from 'react-countup';


function Miscellaneous() {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const countersSection = document.getElementById("counters");
      const sectionTop = countersSection.getBoundingClientRect().top;
      const isVisible = sectionTop < window.innerHeight && sectionTop >= 0;

      if (isVisible) {
        setStartCounting(true);
        window.removeEventListener("scroll", handleScroll); // Remove event listener after counting starts
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container fluid className="miscellaneous-section" style={{ paddingTop: "80px" }}>
      <h1 className="miscellaneous-heading" style={{ animation: 'fadeIn 1s ease', color: 'white' }}>
        <strong className="purple">Certifications</strong>
      </h1>
      <Row className="justify-content-center" style={{ paddingBottom: "30px" }}>
        {[
          { img: img1, title: "Blockchain Development Essentials", link: "https://www.udemy.com/certificate/UC-70dafd9e-21ab-4400-98f8-39654d35a10e/" },
          { img: img2, title: "Git, GitHub & Markdown Power Tools", link: "https://www.udemy.com/certificate/UC-93ce6091-c798-464c-b038-9e6024c3ceff/" },
          { img: img3, title: "AI Mastery: Fundamentals to Advanced 2024", link: "https://www.udemy.com/certificate/UC-039db102-ff66-4353-a39e-a276887c6eaf/" },
          { img: img4, title: "ML & NLP Bootcamp: MLOps & Deployment", link: "https://www.udemy.com/certificate/UC-537ce112-30bb-4566-95b0-4bdb4bdfe45d/" },
          { img: img5, title: "Generative AI by Microsoft & LinkedIn", link: "https://www.linkedin.com/learning/certificates/8a9de2e669639392a5c3f0bd2a576fa3736bfdb627c96e63baf19506f08f1b48" },
          { img: img6, title: "Problem Solving Certification", link: "https://www.hackerrank.com/certificates/deea9c033f20" },
          { img: img7, title: "Python Programming Mastery", link: "https://www.udemy.com/certificate/UC-97754ebb-aa43-4fda-8f13-179ada0b2c07/" },
          { img: img8, title: "SQL for Data-Driven Analysis", link: "https://www.udemy.com/certificate/UC-0f8b4121-cc47-4945-8ea2-46cc43386573/" },
          { img: img9, title: "The 2024 Full Stack Web Development", link: "https://www.udemy.com/certificate/UC-aad55665-9233-4721-b75b-aca92fb7d484/" },
        ].map((cert, index) => (
          <Col md={4} sm={6} className="miscellaneous-card" key={index}>
            <MiscellaneousCard imgPath={cert.img} title={cert.title} link={cert.link} />
          </Col>
        ))}
      </Row>


      <div className="highlighted-section">  
      <h1 className="miscellaneous-heading" style={{ animation: 'fadeIn 1s ease', color: 'white' }}>
        <strong className="purple">Research Publications</strong>
      </h1>

      <Carousel interval={3000} controls={false}>
        <Carousel.Item>
          <div className="research-publication-card">
            <h5 style={{ color: 'white' }}><strong>The Convergence of IoT and 5G</strong></h5>
            <p style={{ color: 'white' }}><strong>Authors:</strong> Yuvraj Singh Chowdhary (NSUT, Delhi) , Geetika Singh (IGDTUW, Delhi)</p>
            <p style={{ color: 'white' }}><strong>Presented at:</strong> 2nd Int’l Conf. on Intelligent Cyber Physical Systems & IoT</p>
            <p style={{ color: 'white' }}><strong>Indexing:</strong> Published in IEEE indexing</p>
            <span className="status-watermark published">Published</span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="research-publication-card">
            <h5 style={{ color: 'white' }}><strong>GAFNet: A Hybrid Approach for Autonomous Driving Using Genetic Algorithms and Feed Forward Neural Networks</strong></h5>
            <p style={{ color: 'white' }}><strong>Authors:</strong> Yuvraj Singh Chowdhary (NSUT, Delhi) , Utkarsh Varshney (USAR, Delhi) , Prateek Rathore (NSUT, Delhi)</p>
            <p style={{ color: 'white' }}><strong>Presented at:</strong> Not presented</p>
            <p style={{ color: 'white' }}><strong>Indexing:</strong> Not yet decided</p>
            <span className="status-watermark ongoing">Ongoing</span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="research-publication-card">
            <h5 style={{ color: 'white' }}><strong>Comprehensive Systematic Literature Review on Diabetic Retinopathy</strong></h5>
            <p style={{ color: 'white' }}><strong>Authors:</strong> Yuvraj Singh Chowdhary (NSUT, Delhi) , Geetika Singh (IGDTUW, Delhi)</p>
            <p style={{ color: 'white' }}><strong>Presented at:</strong> Not presented</p>
            <p style={{ color: 'white' }}><strong>Indexing:</strong> Not yet decided</p>
            <span className="status-watermark ongoing">Ongoing</span>
          </div>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />

      <h1 className="miscellaneous-heading" style={{ animation: 'fadeIn 1s ease', color: 'white' }} id="counters">
        <strong className="purple">Statistics</strong>
      </h1>

      <Row className="justify-content-center" style={{ marginTop: "30px" }}>
  <Col md={3} className="text-center">
    <h2 style={{ color: 'white' }}>
      {startCounting ? <CountUp end={3} duration={5} /> : 0}  {/* Increase duration to 5 seconds */}
    </h2>
    <p style={{ color: 'white' }}>Total Publications</p>
  </Col>
  <Col md={3} className="text-center">
    <h2 style={{ color: 'white' }}>
      {startCounting ? <CountUp end={4} duration={5} /> : 0}  {/* Increase duration to 5 seconds */}
    </h2>
    <p style={{ color: 'white' }}>Authors Worked With</p>
  </Col>
  <Col md={3} className="text-center">
    <h2 style={{ color: 'white' }}>
      {startCounting ? <CountUp end={2} duration={5} /> : 0}  {/* Increase duration to 5 seconds */}
    </h2>
    <p style={{ color: 'white' }}>Total Indexing Targeted</p>
  </Col>
</Row>
</div>

<h1 className="miscellaneous-heading" style={{ animation: 'fadeIn 1s ease', color: 'white', marginTop: '60px' }}>
        <strong className="purple">Highlights of Excellence</strong>
      </h1>

      <h5 className="quote" style={{ color: 'white', textAlign: 'center', marginBottom: '10px', fontSize: '18px' }}>
        "Every moment of excellence starts with the decision to push beyond limits."
      </h5>
      <h6 className="motivation" style={{ color: 'white', textAlign: 'center', marginBottom: '30px', fontSize: '16px' }}>
        "These highlights represent the pinnacle of dedication and skill!"
      </h6>

      <Carousel interval={1000} controls={false} indicators={false} style={{ maxWidth: '600px', margin: '0 auto', marginBottom: '80px' }}>
        {[winningImg1, winningImg2, winningImg3, winningImg4, winningImg5, winningImg6, winningImg7, winningImg8, winningImg9].map((img, index) => (
          <Carousel.Item key={index}>
            <div className="winning-image-card" style={{ overflow: 'hidden' }}>
              <img 
                src={img} 
                alt={`Excellence Highlight ${index + 1}`} 
                className="winning-image" 
                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .miscellaneous-section {
          padding: 50px 0; 
          overflow-x: hidden;
          
        }

        .miscellaneous-heading {
          text-align: center; 
          margin-bottom: 40px; 
        }

     
        .research-publication-card {
          
          border: 1px solid #dee2e6; 
          border-radius: 10px; 
          padding: 20px; 
          margin: 0 auto; 
          width: 90%; 
          text-align: left; 
          position: relative; 
        }

       

        .research-publication-card h5 {
          color: #f8f9fa; 
          margin-bottom: 10px; 
        }

        .research-publication-card p {
          color: #f8f9fa; 
          margin: 5px 0; 
        }

        .status-watermark {
          position: absolute; 
          top: 10px; 
          right: 10px; 
          color: white; 
          font-weight: bold; 
          padding: 5px; 
          border-radius: 5px; 
        }

        .published {
          background-color: green; 
        }

        .ongoing {
          background-color: orange; 
        }

        .miscellaneous-card {
          margin-bottom: 20px; 
        }
        
        .highlighted-section {
          border: 2px solid #6f2c91; /* Change color as needed */
          border-radius: 10px;
          padding: 20px; /* Adjust padding as needed */
          background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent background color */
          margin-bottom: 40px; /* Space below this section */
        }
      `}</style>
    </Container>
  );
}

export default Miscellaneous;
