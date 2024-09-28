import React, { useState, useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import { FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            setCount(Math.floor(start));
            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observerRef.current.observe(countRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [end, duration]);

  return <span ref={countRef}>{count}</span>;
};

const Testimonial = ({ name, company, content, rating, duration }) => (
  <div className="testimonial">
    <p className="testimonial-content">"{content}"</p>
    <div className="testimonial-info">
      <div>
        <p className="testimonial-name">{name}</p>
        <p className="testimonial-company">{company}</p>
      </div>
      <div className="testimonial-rating">
        <p className="stars">{"★".repeat(rating)}{"☆".repeat(5 - rating)}</p>
        <p>Completed in {duration}</p>
      </div>
    </div>
  </div>
);

function AboutCard() {
  const [expandStage, setExpandStage] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const toggleExpand = () => {
    setExpandStage((prevStage) => (prevStage < 3 ? prevStage + 1 : 0));
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const hobbies = [
    { icon: "🌎", title: "Globe-Trotting Adventures", content: "Exploring diverse cultures, from bustling cities to serene landscapes, capturing memories through photography." },
    { icon: "🎸", title: "Musical Escapades", content: "Strumming melodies on my guitar, composing tunes, and attending live concerts for inspiration." },
    { icon: "📚", title: "Literary Journeys", content: "Diving into sci-fi novels, historical narratives, and tech magazines to fuel my imagination and knowledge." },
    { icon: "🍳", title: "Culinary Experiments", content: "Whipping up fusion dishes in the kitchen, blending global flavors with local ingredients." },
    { icon: "🏋️", title: "Fitness Enthusiasm", content: "Challenging myself with high-intensity workouts and yoga sessions for a balanced mind and body." },
    { icon: "🎨", title: "Digital Art Creation", content: "Designing vibrant illustrations and 3D models, merging technology with artistic expression." }
  ];

  const freelanceProjects = [
    { company: "PlayMate Technology Inc.", work: "Collaborated with PlayMate Studio to develop a state-of-the-art multiplayer gaming platform, integrating blockchain technology for secure in-game transactions. This project supported PlayMate mission to offer innovative gaming experiences, while also aligning with PlayMate Software's goal to enhance competitiveness in the digital world.", duration: "3 months", learnings: "Advanced React patterns, GraphQL integration, AI model deployment" },
    { company: "Spyderwebss", work: "Collaborated with Spyderwebbs to develop an immersive multiplayer game using WebGL and Socket.io, enhancing user engagement through real-time cutting-edge web technologies. The project aligns with Spyderwebbs' mission offering an interactive and dynamic experience that elevates their portfolio in IT services and consulting", duration: "2 months", learnings: "Real-time networking, 3D graphics optimization, and game physics" },
    { company: "DataPulse Analytics", work: "Developed a data visualization dashboard that tracks and displays real-time market trends. Leveraging modern front-end frameworks and back-end technologies, the dashboard provides users with intuitive visualizations. This solution integrates real-time data feeds, ensuring up-to-the-minute accuracy, and is optimized for performance, scalability, and user experience. ", duration: "6 weeks", learnings: "D3.js for complex visualizations, real-time data processing with Apache Kafka" },
    { company: "HashCash Consultants", work: "Engineered a DApp for HashCash Consultants, streamlining cross-border payments with enhanced transparency and security. Utilizing Ethereum smart contracts and Solidity, facilitates seamless, low-cost transactions while ensuring trustless operations between parties. The application integrates advanced encryption methods, ensuring data integrity and compliance.", duration: "4 months", learnings: "Blockchain scalability solutions, building robust microservices architecture, crafting intuitive UX design " }
  ];

  const testimonials = [
    { name: "Francine", company: "PlayMate Technology Inc.", content: "Yuvraj's expertise in developing a blockchain-integrated multiplayer gaming platform has elevated our offerings and transformed the user experience. His innovation was truly groundbreaking.", rating: 5, duration: "3 months" },
    { name: "Bozidar", company: "Spyderwebss", content: "The multiplayer game Yuvraj created using WebGL and Socket.io has become a core highlight of our portfolio. His technical precision and creativity delivered a highly engaging user experience.", rating: 5, duration: "2 months" },
    { name: "David", company: "DataPulse Analytics", content: "Yuvraj's development of the real-time data visualization dashboard transformed how we present and analyze market trends. His solution provided an intuitive, scalable, and high-performance tool.", rating: 4, duration: "6 weeks" },
    { name: "Indrani", company: "HashCash Consultants", content: "Yuvraj's work on our decentralized financial platform exceeded expectations, optimizing both transparency and security for cross-border transactions.", rating: 5, duration: "4 months" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 9500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="quote-card-view about-card">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h2 style={{ textAlign: "center", color: "#5e4b8d" }} className="animated-title">
            <strong className="purple">🌟 Discover My Story</strong>
          </h2>
          <br />
          <Fade bottom>
            <p style={{ textAlign: "justify" }}>
              Hello! I'm <span className="purple">Yuvraj Singh Chowdhary</span>, hailing from the vibrant state of <span className="purple">Punjab, India</span>. 
              By day, I'm a SDE Intern at HCLTech, where I dive into the nitty-gritty of performance optimization and automation, merging code with creativity.
            </p>
            <p style={{ textAlign: "justify" }}>
              My academic journey at Netaji Subhas University of Technology has been about crafting innovative solutions through technology, whether it's developing engaging web applications or exploring the latest in AI and Machine Learning.
            </p>
          </Fade>
          <br/>
          <Fade bottom>
            <h3 className="purple">My Eclectic World</h3>
            <div className="hobby-grid">
              {hobbies.map((hobby, index) => (
                <div key={index} className="hobby-box">
                  <span className="hobby-icon">{hobby.icon}</span>
                  <h4 className="hobby-title">{hobby.title}</h4>
                  <p className="hobby-content">{hobby.content}</p>
                </div>
              ))}
            </div>
          </Fade>
          
          {expandStage > 0 && (
            <Fade bottom>
              <div className="freelance-journey">
                <h3 className="purple">My Freelance Journey</h3>
                <div className="freelance-projects">
                  {freelanceProjects.map((project, index) => (
                    <div key={index} className="project-box hover-animation">
                      <h4>{project.company}</h4>
                      <p className="project-work">{project.work}</p>
                      <p className="project-details">Duration: {project.duration}</p>
                      <p className="project-details">Key Learnings: {project.learnings}</p>
                    </div>
                  ))}
                </div>
                <p className="freelance-note">
                  These projects represent just a fraction of my freelance work. I'm always excited to take on new challenges and collaborate with innovative teams......
                </p>
              </div>

              <div className="stats-grid">
                <div className="stat-box">
                  <p className="stat-number"><CountUp end={50} duration={2000} />+</p>
                  <p className="stat-label">Projects Completed</p>
                </div>
                <div className="stat-box">
                  <p className="stat-number"><CountUp end={30} duration={2000} />+</p>
                  <p className="stat-label">Happy Clients</p>
                </div>
                <div className="stat-box">
                  <p className="stat-number"><CountUp end={15} duration={2000} />+</p>
                  <p className="stat-label">Technologies Mastered</p>
                </div>
              </div>
            </Fade>
          )}

          {expandStage > 1 && (
            <Fade bottom>
              <div className="testimonials-section">
                <h3 className="purple">Client Testimonials</h3>
                <div className="testimonials-carousel">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`testimonial-slide ${
                        index === currentTestimonial ? 'active' : ''
                      } hover-animation`}
                    >
                      <Testimonial {...testimonial} />
                    </div>
                  ))}
                  <button className="carousel-control prev" onClick={prevTestimonial}>
                    <FaChevronLeft />
                  </button>
                  <button className="carousel-control next" onClick={nextTestimonial}>
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </Fade>
          )}

          {expandStage > 2 && (
            <Fade bottom>
              <div className="future-aspirations hover-animation">
                <h3 className="purple">Looking Ahead</h3>
                <div className="aspirations-content">
                  <p>As I continue to grow in the tech world, my aspirations are clear:</p>
                  <ul>
                    <li>Push the boundaries of AI and machine learning in practical applications</li>
                    <li>Contribute to open-source projects that make a difference in people's lives</li>
                    <li>Mentor upcoming developers and foster a community of innovation</li>
                    <li>Blend technology with sustainable practices for a better tomorrow</li>
                  </ul>
                </div>
              </div>
            </Fade>
          )}

          <button onClick={toggleExpand} className="expand-button">
            {expandStage < 3 ? 'Read More' : 'Show Less'}
            {expandStage < 3 ? <FaChevronDown className="expand-icon" /> : <FaChevronUp className="expand-icon" />}
          </button>
        </blockquote>
        </Card.Body>
      <style jsx>{`
        .about-card {
          background-color: transparent;
          border: none;
        }
        .animated-title {
          animation: bounce 2s infinite;
        }
        .hobby-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }
        .hobby-box {
          border: 2px solid #5e4b8d;
          border-radius: 10px;
          padding: 1rem;
          transition: all 0.3s ease;
          background-color: rgba(255, 255, 255, 0.8);
        }
        .hobby-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(94, 75, 141, 0.2);
        }
        .hobby-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          display: block;
        }
        .hobby-title {
          color: #5e4b8d;
          margin-bottom: 0.5rem;
        }
        .hobby-content {
          font-size: 0.9rem;
          color: #333;
        }
        .freelance-journey {
          margin-top: 2rem;
        }
        .freelance-projects {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }
        .project-box {
          border: 1px solid #5e4b8d;
          border-radius: 10px;
          padding: 1rem;
          background-color: rgba(255, 255, 255, 0.8);
        }
        .project-box h4 {
          color: #5e4b8d;
        }
        .project-work {
          color: #333;
        }
        .project-details {
          font-size: 0.9rem;
          color: #444;
        }
        .freelance-note {
          margin-top: 1rem;
          font-style: italic;
          color: #666;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin-top: 2rem;
        }
        .stat-box {
          text-align: center;
          background-color: rgba(240, 230, 255, 0.7);
          padding: 1rem;
          border-radius: 10px;
        }
        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          color: #5e4b8d;
        }
        .stat-label {
          font-size: 0.9rem;
          color: #444;
        }
        .testimonials-section {
          margin-top: 2rem;
        }
        .testimonials-carousel {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .testimonial-slide {
          position: absolute;
          width: 100%;
          opacity: 0;
          transition: opacity 0.5s ease-in-out, transform 0.3s ease;
        }
        .testimonial-slide.active {
          opacity: 1;
        }
        .testimonial {
          background-color: rgba(240, 230, 255, 0.7);
          padding: 1rem;
          border-radius: 10px;
        }
        .testimonial-content {
          font-style: italic;
          margin-bottom: 1rem;
          color: #333;
        }
        .testimonial-info {
          display: flex;
          justify-content: space-between;
        }
        .testimonial-name {
          font-weight: bold;
          color: #5e4b8d;
        }
        .testimonial-company {
          font-size: 0.9rem;
          color: #555;
        }
        .testimonial-rating {
          text-align: right;
        }
        .stars {
          color: gold;
        }
        .carousel-control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: #5e4b8d;
          padding: 10px;
          cursor: pointer;
          transition: color 0.3s;
        }
        .carousel-control:hover {
          color: #7c64b5;
        }
        .carousel-control.prev {
          left: 10px;
        }
        .carousel-control.next {
          right: 10px;
        }
        .future-aspirations {
          margin-top: 2rem;
        }
        .aspirations-content {
          background-color: rgba(240, 230, 255, 0.7);
          padding: 1rem;
          border-radius: 10px;
          color: #333;
          text-align: left;
        }
        .aspirations-content ul {
          padding-left: 20px;
          margin: 0;
        }
        .aspirations-content li {
          margin-bottom: 0.5rem;
        }
        .expand-button {
          background: none;
          border: none;
          color: #5e4b8d;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.5rem;
          transition: color 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin-top: 1rem;
        }
        .expand-button:hover {
          color: #7c64b5;
        }
        .expand-icon {
          margin-left: 0.5rem;
          transition: transform 0.3s;
        }
        .expand-button:hover .expand-icon {
          transform: translateY(3px);
        }
        .hover-animation {
          transition: all 0.3s ease;
        }
        .hover-animation:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(94, 75, 141, 0.2);
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </Card>
  );
}

export default AboutCard;