import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import recipe from "../../Assets/Projects/recipe.jpg";
import imdb from "../../Assets/Projects/imdb.png";
import weather from "../../Assets/Projects/weather.jpg";

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
              imgPath={recipe}
              isBlog={false}
              title="Restaurant-App"
              description="The restaurant site built using ReactJS and Material UI is a visually highly interactive platform that delivers an exceptional user experience.With Material UI, the site boasts a modern and sleek design,featuring clean typography, vibrant colors, and intuitive navigation.The use of ReactJS and Material UI enables seamless transitions between pages, smooth scrolling,and effortless browsing."
              ghLink="https://github.com/Sejal99/Restaurant"
              demoLink="https://admirable-horse-bd7db0.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imdb}
              isBlog={false}
              title="Imdb Clone"
              description="An IMDb clone built using React is like a web application that mimics the functionality and design of the original IMDb website. Application is built using React as the front-end framework, along with other technologies such as JavaScript, HTML, and CSS. The application also required a back-end server to store and retrieve data, which is built using APIs such as the Open Movie Database API."
              ghLink="https://github.com/Sejal99/imdbClone"
              demoLink="https://imdbsejal99.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather-App"
              description="The app displays the current weather conditions in a visually appealing way using icons, images, or animations to represent the weather. The app also provide additional information like the time of sunrise and sunset, hourly and daily forecasts, and air quality index.
              The app is built using HTML, CSS, and JavaScript. The JavaScript code will handle the API requests and the rendering of the weather data."
              ghLink="https://github.com/Sejal99/weather"
              demoLink="https://sejal99.github.io/weather/"
            />
          </Col>

         
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
