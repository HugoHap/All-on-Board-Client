import './MatchCard.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MatchCard = ({startTime}) => {

    return (
        <Card className="MatchCard">
            <Card.Body>
               <p> {startTime}</p>
            </Card.Body>
        </Card>
    )
}
export default MatchCard