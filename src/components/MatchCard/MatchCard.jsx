import './MatchCard.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MatchCard = ({ startTime, boardGame, _id }) => {

    return (
        <Card className="MatchCard">
            <Card.Img src={boardGame.gameImg} />
            <Card.Body>
                <p>{boardGame.name}</p>
                <p> {startTime.slice(0, 10)}</p>
                <div className="d-grid gap-2">
                    <Link to={`/match/${_id}`} className="btn btn-dark">Details</Link>
                </div>
            </Card.Body>
        </Card>
    )
}
export default MatchCard