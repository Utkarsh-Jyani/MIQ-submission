import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import aahar from "../../Assets/Projects/aahar.jpg";
import blog from "../../Assets/Projects/blog.jpg";
import covid from "../../Assets/Projects/covid.jpg";
import asd from "../../Assets/Projects/asd.jpg";
import dore from "../../Assets/Projects/dore.jpg";
import gan from "../../Assets/Projects/gan.jpg";
import music from "../../Assets/Projects/music.jpg";
import sentiment from "../../Assets/Projects/sentiment.jpg";

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
              imgPath={dore}
              isBlog={false}
              title="Dore Idioma"
              description="Published a research paper in IEEE Scholar on Sign language Detection.Dore Idioma focuses on model detection and analysis of hand signs created in front of the connected camera and then
              translates it to a sentence in English.Worked on backend of the project. ImplementedTensorflow API for object detection using SSD-mobileNet
              CNN architecture.Created custom database for hand signs which Successfully detects hand signs with an accuracy of 93%"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={asd}
              isBlog={false}
              title="ChatBot for ASD"
              description="Writing a research paper on ways to identify people suffering from Autism Spectrum Dissorder.The ChatBot will also work as a way to communicate with autistic people and create a virtual environment for them to
              gain confidence which will help them to express themselves in real world.Creating the ChatBot using NLP for meaning extraction and using various Machine Learning and Deep
              learning Algorithms such as Bidirectional LSTM ,Logistic Regression, Support Vector Machine and more"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="WriteUp!"
              description="Designed and developed a fully functional blog web application which allows users to create, edit, and delete their blog
              posts as well as view other user’s posts.The frontend and the backend are connected using comment API. Various features like search bar, comments, category
              section along with user profile is implemented."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covid-19 Tracker"
              description="It is a fully functional Application which is used to provides real-time data on COVID-19 cases worldwide and helps
              users visualize the spread of the virus.I utilized React Hooks such as useState and useEffect for state management and data fetching. I also incorporated CSS
              to create an intuitive user interface and enhance the user experience."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aahar}
              isBlog={false}
              title="Aahar"
              description="I utilized React Hooks such as useState and useEffect for state management and data fetching. I also incorporated CSS
              to create an intuitive user interface and enhance the user experience.Working on various Deep learning algorithms such as Bidirectional Encoder Representations from
              Transformers(BERT), LSTM and more for creating an efficient diet and schedule recommendation system for the
              customers."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gan}
              isBlog={false}
              title="Image Upscaling and Generation"
              description="Developed an Image upscaler using Super Resulation GAN to increase an images resolution increasing quality of
              low pixeled images.Developed a Fake image generator using Deep Convolutional GAN used to create fake image data whenever needed."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Versea Portal"
              description="Versea Portal is a music player application for your device which is highly customizable and memorable.Worked on developing backend for the project. Java and android studio was used for development of the project."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={false}
              title="Sentiment Analysis"
              description="Research about various ML models to predict the sentiment as positive negative and neutral in twitter data. Self created
              dataset with combination of various twitter, facebook datasets.Worked on Developing different models Developing different models such as SVM , Naive bayes, Logistic
              regression, Random forest LSTM to Compare their accuracies and find which is best for sentiment analysis."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
