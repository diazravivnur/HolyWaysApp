import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Progress } from "reactstrap";
import { Link } from "react-router-dom";

const card = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.Img} />
        <Card.Body>
          <Card.Title> {props.Title}</Card.Title>
          <Card.Text>{props.Paragraph}</Card.Text>
          <Progress color="danger" value={40} />
          <Card.Text>{props.Text}</Card.Text>
          <Button variant="danger">
            <Link
              to={{
                pathname: `/detail/${props.id}`,
                state: {
                  Img: props.Img,
                  Title: props.Title,
                  Paragraph: props.Paragraph,
                  Text: props.Text,
                },
              }}
            >
              {" "}
              Donate{" "}
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default card;
