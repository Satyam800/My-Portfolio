import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Screenshot (5).png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/Screenshot (158).png";
import chatify from "../../Assets/Projects/Screenshot (5).png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/Screenshot (156).png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Movie Recommendation platform using React, Firebase, TailwindCSS & OPENAI. Share movie review on twitter, speech recognition for movie search"
              ghLink="https://github.com/Satyam800/NetflixGPT"
              demoLink="https://netflix-gpt-sand-eta.vercel.app/"
            />
          </Col>

        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Social media platform using React, TailwindCSS, Redux, Express, Node, MongoDB. post an tweet with hashtag,photo/gif,text"
              ghLink="https://github.com/Satyam800/InstaChat"
              demoLink="https://insta-chat-three.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Plant AI"
              description="video streaming platform using React, TailwindCSS, Redux, Express, Node, MongoDB.subscribe,like,comment,notes taking  and many more feature integrated"
              ghLink="https://github.com/Satyam800/Showtube"
              demoLink="https://showtube-eosin.vercel.app/"
            />
          </Col>

          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
