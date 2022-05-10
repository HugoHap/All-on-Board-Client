import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import "./BoardgameCard.css"

const BoardgameCard = ({ _id, gameImg, name }) => {

    return (
        <Card className="BoardgameCard">
            <Card.Img variant="top" src={gameImg} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <div className="d-grid gap-2">
                    <Link to={`/boardgames/${_id}`} className="btn btn-dark">Details</Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default BoardgameCard