import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './MiscellaneousCard.css'; // Make sure this file is created and linked

function MiscellaneousCard(props) {
  return (
    <Card className="miscellaneous-card">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="card-title">{props.title}</Card.Title>
        <Button variant="primary" href={props.link} target="_blank" className="view-button">
          View Certificate
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MiscellaneousCard;
