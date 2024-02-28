import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";


function CustomCard({
  title,
  posterUrl,
  description,
  rate,
  buttonText,
  buttonUrl,
}) {
  const maxDescriptionLength = 70;
  const truncatedDescription =
    description.length > maxDescriptionLength
      ? description.substring(0, maxDescriptionLength) + "..."
      : description;

  return (
    <Card style={{ width: "19%", margin: "8px", display: "inline-block" }}>
      <Card.Img
        variant="top"
        src={posterUrl}
        style={{ maxWidth: "100%", height: "286px", objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ maxHeight: "100px", overflow: "hidden" }}>
          {truncatedDescription}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{rate}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <ListGroup.Item className="list-group-flush">
          <ListGroup className="list-group-flush">
            <Button
              style={{ width: "100%" }}
              href={buttonUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="dark"
            >
              {buttonText}
            </Button>
          </ListGroup>
        </ListGroup.Item>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
