import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiExpress,
  DiGit,
  DiCss3,
  DiBootstrap,
  
} from "react-icons/di";
import { SiDocker, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     


     <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

     <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <TbBrandNextjs />

      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiTypescript />
      </Col>
      
    
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        
      <SiDocker />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      
      <DiBootstrap />
      </Col>

    
     
      
    </Row>
  );
}

export default Techstack;
