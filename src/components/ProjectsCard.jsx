import React, { createRef } from "react";

import { Card, CardBody, Col, Button } from "reactstrap";

import { Fade } from "react-awesome-reveal";

const ProjectsCard = ({ data }) => {
  const imgRef = createRef();

  return (
    <Col lg="6">
      <Fade bottom duration={1000} distance="40px">
        <Card className="shadow-lg--hover shadow mt-4">
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <img
                  ref={imgRef}
                  className="bg-white mb-3 rounded img-center img-fluid shadow-lg "
                  src={data.img}
                  style={{ width: "100px" }}
                  alt=""
                />

                <h3>{data.name}</h3>
                <p className="description mt-3">{data.desc}</p>
                {data.github ? (
                  <Button
                    className="btn-icon"
                    color="github"
                    href={data.link}
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-github" />
                    </span>
                  </Button>
                ) : null}
                {data.link ? (
                  <Button
                    className="btn-icon"
                    color="success"
                    href={data.link}
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-arrow-right mr-2" />
                    </span>
                    <span className="nav-link-inner--text ml-1">
                      En savoir plus
                    </span>
                  </Button>
                ) : null}
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
