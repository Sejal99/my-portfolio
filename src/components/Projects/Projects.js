import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import recipe from "../../Assets/Projects/recipe.jpg";
import imdb from "../../Assets/Projects/imdb.png";
import weather from "../../Assets/Projects/weather.jpg";
import course from "../../Assets/Projects/class.jpg";

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
              imgPath={course}
              isBlog={false}
              title="Course-Selling-App"
              description="The LearnNest MERN app is a dynamic and user-friendly course selling platform, meticulously crafted using the cutting-edge MERN stack (MongoDB, Express.js, React, Node.js). Seamlessly integrated with an intuitive admin dashboard, LearnNest empowers administrators with effortless control over course management through comprehensive CRUD operations."
              ghLink="https://github.com/Sejal99/Course-selling-app"
              demoLink="https://sejal-course-selling-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Restaurant-App"
              description="I've built a user-friendly web application using React. To handle different parts of the app, I've used handy tools like custom hooks, React Router for navigation, and Redux Toolkit for managing the application's state effectively. The app allows users to search for items right from the header, and they can even filter items by their priority and sort them by price. Users can mark items they like as favorites, and easily access them on a dedicated favorites page. Moreover, there's a shopping cart feature that lets users view their selected items before making a purchase. The app also features a login page with simple form validation to ensure user data accuracy. To fetch a list of products, I've integrated the #FakeStore API into the app."
              ghLink="https://github.com/Sejal99/food_delivery"
              demoLink="https://food-delivery-sejal-site.vercel.app/"
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
