import React from 'react';
import { experience } from "../portfolio";
import {
    Container,
    Row,
} from "reactstrap";

import { Fade } from 'react-reveal';

import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
    return ( 
        <section className="section section-lg">
            <Container>
              <div className="d-flex p-4">
                    <div>
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                        <i className="ni ni-briefcase-24 text-info" />
                        </div>
                    </div>
                    <div className="pl-4">
                        <h4 className="display-3 text-info">RÉFÉRENCES</h4>
                    </div>
                </div>
                <div>
                    {
                        experience.map((data, i) => {
                            return <ExperienceCard key={i} data={data} />
                        })
                    }
                </div>
            </Container>
          </section>
     );
}
 
export default Experience;
