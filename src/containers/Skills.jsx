import React, { Fragment } from "react";

import { Fade } from "react-awesome-reveal";
import DisplayLottie from "../components/DisplayLottie";
import webdev from "../assets/lottie/webdev.json";
import profileLogo from "../assets/img/me.jpeg";

import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

import { skillsSection } from "../portfolio";

const Skills = () => {
  return (
    <Fade left duration={1000} distance="40px">
      <Container className="my-5 section section-lg">
        <h1 className="text-center h1">{skillsSection.title}</h1>
        <img
          src={profileLogo}
          style={{ width: "200px" }}
          alt=""
          className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
        />

        <p className="lead">{skillsSection.subTitle}</p>
        <Row>
          <Col lg="6">
            <DisplayLottie animationData={webdev} />
          </Col>
          <Col lg="6">
            <div className="d-flex justify-content-center flex-wrap mb-5">
              {skillsSection.softwareSkills.map((skill) => {
                return (
                  <Fragment key={skill.skillName}>
                    <div
                      className="icon icon-lg icon-shape shadow rounded-circle mb-5"
                      id={skill.skillName}
                    >
                      <span
                        className="iconify"
                        data-icon={skill.fontAwesomeClassname}
                        data-inline="false"
                      ></span>
                    </div>
                    <UncontrolledTooltip
                      delay={0}
                      placement="bottom"
                      target={skill.skillName}
                    >
                      {skill.skillName}
                    </UncontrolledTooltip>
                  </Fragment>
                );
              })}
            </div>
            <div>
              {skillsSection.skills.map((skill) => {
                return <p key={skill}>{skill}</p>;
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};

export default Skills;
