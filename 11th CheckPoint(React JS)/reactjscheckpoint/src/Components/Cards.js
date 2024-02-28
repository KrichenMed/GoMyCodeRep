import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardExample() {
  return (
    <div style={{ display: "flex" }}>
      <Card style={{ width: "18rem", marginRight: "5px" }}>
        <Card.Img
          variant="top"
          src="https://w0.peakpx.com/wallpaper/1008/540/HD-wallpaper-nature-path-forest-nature-path-road-tree-woods.jpg"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", marginRight: "5px" }}>
        <Card.Img
          variant="top"
          src="https://cdn.naturettl.com/wp-content/uploads/2021/11/08204120/tips-for-taking-wildlife-and-nature-pohotograohy-with-a-smartphone-13-800x800.jpg"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", marginRight: "5px" }}>
        <Card.Img
          variant="top"
          src="https://beautyharmonylife.com/wp-content/uploads/2013/09/nature-5.jpg"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardExample;
