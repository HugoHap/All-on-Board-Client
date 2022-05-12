import { Container, Col, Row, Button } from 'react-bootstrap'
import { useEffect, useState } from "react"
import matchesService from './../../services/match.service'
import { useParams, Link } from 'react-router-dom'

const MatchDetailsPage = () => {

    const [matchDetails, setMatchDetails] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const { id } = useParams()

    useEffect(() => {

        matchesService
            .getOneMatch(id)
            .then(({ data }) => {
                setMatchDetails(data)
                setIsLoading(true)
            })
            .catch(err => console.log(err))

    }, [])

    if (isLoading) {
        const { organizer, description, startTime, boardGame } = matchDetails
    

    return (
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 1 }}>
                    <p>Organizer: {organizer?.username}</p>
                    <p>Description: {description}</p>
                    <p>Starting Time: {startTime}</p>
                    <p>Boardgame: {boardGame.name}</p>
                    <p>Age: {boardGame.age}</p>
                    <p>Players: {boardGame.players.min}-{boardGame.players.max}</p>
                    <Link to="/match">
                        <Button variant="dark">Back to Matches</Button>
                    </Link>
                    <Link to={`/match/${id}/edit`}>
                        <Button variant="success">Edit</Button>
                    </Link>
                    <Link to={`/match/${id}/delete`}>
                        <Button variant="danger">Delete Match</Button>
                    </Link>
                    <Link to={`/match/${id}/join`}>
                        <Button variant="dark">Join Match</Button>
                    </Link>
                </Col>
                <Col md={{ span: 6 }}>
                    <img style={{ width: '100%' }} src={boardGame.gameImg} alt={boardGame.name} />
                </Col>
                {/* TENDREMOS QUE METER EL GOOGLE MAPS */}
                {/* FALTA BOTON DE JOIN */}
            </Row>
        </Container>

    )
    }
}
export default MatchDetailsPage