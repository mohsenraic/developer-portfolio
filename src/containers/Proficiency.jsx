import React from "react";
import devinair from "../assets/lottie/devinair";

import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";

import { Fade } from "react-awesome-reveal";

import GreetingLottie from "../components/DisplayLottie";

const Proficiency = () => {
  return (
    <Container className="section section-lg">
      <Fade bottom duration={1000} distance="40px">
        <Row>
          <Col lg="6">
            <h1 className="h1">Compétence</h1>
            {SkillBars.map((skill) => {
              return (
                <div className="progress-info" key={skill.Stack}>
                  <div className="progress-label">
                    <span>{skill.Stack}</span>
                  </div>
                  <div className="progress-percentage">
                    <span>{skill.progressPercentage}%</span>
                  </div>
                  <Progress
                    max="100"
                    value={skill.progressPercentage}
                    color="info"
                  />
                </div>
              );
            })}
          </Col>
          <Col lg="6">
            <GreetingLottie animationData={devinair} />
          </Col>
        </Row>
      </Fade>
    </Container>
  );
};

export default Proficiency;
