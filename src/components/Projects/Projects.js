import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import img1 from "../../Assets/Projects/18.jpg";
import img2 from "../../Assets/Projects/2.jpg";
import img3 from "../../Assets/Projects/3.jpg";
import img4 from "../../Assets/Projects/4.jpg";
import img5 from "../../Assets/Projects/5.jpg";
import img6 from "../../Assets/Projects/6.jpg";
import img7 from "../../Assets/Projects/17.jpg";
import img8 from "../../Assets/Projects/16.jpg";
import img9 from "../../Assets/Projects/9.jpeg";
import img10 from "../../Assets/Projects/10.jpg";
import img11 from "../../Assets/Projects/11.jpg";
import img12 from "../../Assets/Projects/12.jpg";
import img13 from "../../Assets/Projects/13.jpg";
import img14 from "../../Assets/Projects/14.jpg";
import img15 from "../../Assets/Projects/15.jpg";
import Fade from "react-reveal/Fade"; // Import Fade for animation

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Map through projects for cleaner code */}
          {[{
            imgPath: img1,
            title: "Autonomous_Vehicle_Genetic",
            description: "An advanced project integrating Convolutional Neural Networks (CNN) and Genetic Algorithms (GA) for optimized machine learning...",
            ghLink: "https://github.com/chowdhary19/Autonomous_Vehicle_Genetic"
          },
          {
            imgPath: img2,
            title: "YuvDall.E",
            description: "Illusionary Artistry Forge is an advanced DALL·E-based image generator...",
            ghLink: "https://github.com/chowdhary19/YuvDALL.E"
          },
          {
            imgPath: img3,
            title: "Proxy_withCache_withoutCache",
            description: "Proxy server with switchable functionality...",
            ghLink: "https://github.com/chowdhary19/Proxy_withCache_withoutCache"
          },
          {
            imgPath: img4,
            title: "CipherVilla",
            description: "The goal of this project is to guide through building a cutting-edge real estate marketplace using the MERN stack...",
            ghLink: "https://github.com/chowdhary19/CipherVilla"
          },
          {
            imgPath: img5,
            title: "MarketMaster---Smart-Basket-Analysis_ThompsonSampling",
            description: "Optimizing ad selection using the Thompson Sampling algorithm...",
            ghLink: "https://github.com/chowdhary19/MarketMaster---Smart-Basket-Analysis_ThompsonSampling"
          },
          {
            imgPath: img6,
            title: "Multilingual Language Translator",
            description: "The Multilingual Language Translator is a robust translation system utilizing Python...",
            ghLink: "https://github.com/chowdhary19/Multilingual-Language-Translator"
          },
          {
            imgPath: img7,
            title: "A3C-Based KungFu Game",
            description: "A3C Based KungFu Game is a reinforcement learning project...",
            ghLink: "https://github.com/chowdhary19/A3C-Based-KungFu-Game"
          },
          {
            imgPath: img8,
            title: "FastAPI_Implementation",
            description: "This project is a FastAPI-based web application for classifying banknotes as genuine or fake...",
            ghLink: "https://github.com/chowdhary19/FastAPI_implementation"
          },
          {
            imgPath: img9,
            title: "YuvGPT",
            description: "This project is a sophisticated Discord chatbot powered by Google Generative AI's Gemini 1.5 model...",
            ghLink: "https://github.com/chowdhary19/YuvGPT"
          },
          {
            imgPath: img10,
            title: "RecommendationModel-PCA",
            description: "This project develops a recommender system using Principal Component Analysis (PCA)...",
            ghLink: "https://github.com/chowdhary19/RecommendationModel-PCA"
          },
          {
            imgPath: img11,
            title: "Sentiment_Analysis-BOW",
            description: "This project involves sentiment analysis of restaurant reviews using Natural Language Processing (NLP)...",
            ghLink: "https://github.com/chowdhary19/Sentiment_Analysis-BOW"
          },
          {
            imgPath: img12,
            title: "MarketMaster---Ad-Optimization-UCB",
            description: "Optimizing ad selection using the Upper Confidence Bound (UCB) algorithm...",
            ghLink: "https://github.com/chowdhary19/MarketMaster---Ad-Optimization-UCB"
          },
          {
            imgPath: img13,
            title: "Cipher-Digitals-SocialMedia",
            description: "Cipher Digitals is a social media platform powered by the MERN and Socket.io...",
            ghLink: "https://github.com/chowdhary19/Cipher-Digitals-SocialMedia"
          },
          {
            imgPath: img14,
            title: "BreastCancer-UsingNN",
            description: "Developed using Python and Google Collab Notebook, this project leverages a Simple Multilayer Perceptron Neural Network...",
            ghLink: "https://github.com/chowdhary19/BreastCancer-UsingNN"
          },
          {
            imgPath: img15,
            title: "SymphonyRead",
            description: "Symphony.IO: Your smart PDF reader! Extract text, ask questions...",
            ghLink: "https://github.com/chowdhary19/SymphonyRead"
          }].map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <Fade bottom>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                  <ProjectCard
                    imgPath={project.imgPath}
                    isBlog={false}
                    title={project.title}
                    description={project.description}
                    ghLink={project.ghLink}
                  />
                </div>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
