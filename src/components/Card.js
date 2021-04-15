import {Card} from "react-bootstrap"
import {Button} from "react-bootstrap"
import style from "./Card.module.css"

const card = () => {
    return (
        <div className = {style.card1}>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="Rectangle 7.svg" />
  <Card.Body>
    <Card.Title>The Strength of a People. Power of Community</Card.Title>
    <Card.Text>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>        
    )
}

export default card
