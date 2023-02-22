import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import peter from "../../Assets/Projects/peter.png";
import visionet from "../../Assets/Projects/visionet.png";
import finclassify from "../../Assets/Projects/finclassify.png";

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
              imgPath={visionet}
              isBlog={false}
              title="VisioNet"
              description="Face detection is used to identify and locate human faces in digital images or video frames. It is a crucial element in a variety of applications, including facial recognition, security, image and video processing. In this, we build a comprehensive deep face detection system using a range of tools and technologies including LabelME, Tensorflow, OpenCV, Matplotlib and Albumentation"
              ghLink="https://github.com/Rishabhku03/VisioNet"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finclassify}
              isBlog={false}
              title="FinClassify"
              description="This project involved the development of a Big Data Financial Classification application using Pyspark, Pyspark-ml, and Power BI. The goal of the project was to analyze and visualize three financial data sets in order to extract insights and trends, After the analysis, we used PowerBI to create visualisations of the results, It was a powerful Learning experience exploring various Big Data tools"
              ghLink="https://github.com/Rishabhku03/FinClassify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={peter}
              isBlog={false}
              title="Peter"
              description="Artificial Intelligence (AI) is the new frontier of technology that has been able to process data and make decisions better than a human being. AI has made its presence felt in every facet of life. From smartphones to home appliances, AI is rapidly becoming an essential part of our lives. This is what our own Peter/Peru can do. The technologies which I have used are Pytorch, GPT3 ,Python, APIs, Whisper"
              ghLink="https://github.com/Rishabhku03/Peter"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
