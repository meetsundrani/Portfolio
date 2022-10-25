import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";

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
              title="Tshirts store"
              description="An ecommerce application to shop Merchandise project, built with MERN stack also integrated stripe as a payment gateway."
              ghLink="https://github.com/meetsundrani/rarebuy_store"
              demoLink=""
            />
          </Col>
          <p className="purple">Still Projects Section is under development!!! Till then keep calm & visit again 😊</p>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;