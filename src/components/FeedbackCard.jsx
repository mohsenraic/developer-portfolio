import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const FeedbackCard = ({ data }) => {
	return (
		<Fade right duration={1000} distance="40px">
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<h5 className="text-info">Témoignage <a href={data.url}>{data.from}</a></h5>
							<p className="description mt-3 font-italic"> « {data.feedback} »</p>
							<h6 >   <img src={data.img} style={{width: "50px"}} alt="" className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"/> {data.name} </h6>

						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default FeedbackCard;
