import { Card } from "react-bootstrap"
import { CardTitle } from "../card-title.component"

const CardComponent = () => {
    return (<>
    <Card>
        <a href="/category/smartphone">
            <Card.Img variant="top" src="https://static-01.daraz.com.np/p/59f357c17fdcaca44711c07f53ac6a20.jpg" />
        </a>
        <Card.Body className="text-center">
            
            <CardTitle $primary>
                Smart Phone
            </CardTitle>
        </Card.Body>
    </Card>
    </>)
}

export default CardComponent;