import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function PlayerCard({
  title,
  imageUrl,
  description,
  age,
  team,
  price,
  buttonText,
  buttonUrl,
  onButtonClick,
}) {
  return (
    <Card style={{ width: "19%", margin: "8px", display: "inline-block" }}>
      <Card.Img
        variant="top"
        src={imageUrl}
        style={{ width: "100%", height: "286px", objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{age}</ListGroup.Item>
        <ListGroup.Item>{team}</ListGroup.Item>
        <ListGroup.Item>{price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <ListGroup.Item className="list-group-flush">
          <Button
            style={{ width: "100%" }}
            buttonUrl={buttonUrl}
            onButtonClick={onButtonClick}
            variant="dark"
          >
            {buttonText}
          </Button>
        </ListGroup.Item>
      </Card.Body>
    </Card>
  );
}

export default PlayerCard;
