import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import recipe from "../../Assets/Projects/recipe.jpg";
import imdb from "../../Assets/Projects/imdb.png";
import weather from "../../Assets/Projects/weather.jpg";
import course from "../../Assets/Projects/class.jpg";
import blogg from "../../Assets/Projects/blogg.png";
import short from "../../Assets/Projects/short.jpeg";
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
              imgPath={blogg}
              isBlog={false}
              title="Blog Application"
              description="A webapplication built using Next.js, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, and
              integrated with Amazon S3 for storage. The goal is to create a versatile blogging platform where
              registered creators can author and publish blogs publicly, while users can interact by commenting
              and sharing their thoughts on the content. Key features include image uploading, pagination with
              a search bar, JWT-based authentication for secure access, CRUD operations for managing content,
              and a dedicated section for comments. Both blog-related images and profile images are stored in an
              Amazon S3 bucket, ensuring seamless media management"
              ghLink="https://github.com/Sejal99/blogging-site"
              demoLink="https://sejal-blogging.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={short}
              isBlog={false}
              title="URL Shortner"
              description="Simplify URL sharing with this React.js, Node.js, Express, and MongoDB-powered application.The
              objective of the project is to provide authenticated users with shortened URLs for links of any length,
              along with analytics tracking. Copy, paste, and share concise links effortlessly."
              ghLink="https://github.com/Sejal99/url_shortner"
              demoLink="https://url-shortner-one-ruddy.vercel.app/"
            />
          </Col>
          
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
              description="It is a user-friendly web application using React. To handle different parts of the app, I've used handy tools like custom hooks, React Router for navigation, and Redux Toolkit for managing the application's state effectively. The app allows users to search for items right from the header, and they can even filter items by their priority and sort them by price. Users can mark items they like as favorites, and easily access them on a dedicated favorites page.To fetch a list of products api is used."
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
