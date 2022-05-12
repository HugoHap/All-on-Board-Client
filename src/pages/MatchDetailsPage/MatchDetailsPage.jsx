import { Container } from 'react-bootstrap'
import { useEffect, useState } from "react"
import matchesService from './../../services/match.service'
import { useParams, Link } from 'react-router-dom'

const MatchDetailsPage = () => {

    const [matchDetails, setMatchDetails] = useState()

    const { id } = useParams()

    useEffect(() => {

        matchesService
            .getOneMatch(id)
            .then(({ data }) => {
                setMatchDetails(data)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 1 }}>
                    <p>Organizer: {matchDetails?.organizer?.username}</p>
                    <p>Description: {matchDetails?.description}</p>
                    <p>Starting Time: {matchDetails?.startTime}</p>
                    <p>Boardgame: {matchDetails?.boardGame.name}</p>
                    <p>Age: {matchDetails?.boardGame.age}</p>
                    <p>Players: {matchDetails?.boardGame.players.min}-{matchDetails?.boardGame.players.max}</p>
                    <Link to="/match">
                        <Button variant="dark">Back to Matches</Button>
                    </Link>
                    <Link to={`/match/${id}/edit`}>
                        <Button variant="success">Edit</Button>
                    </Link>
                    <Link to={`/match/${id}/delete`}>
                        <Button variant="danger">Delete Match</Button>
                    </Link>
                </Col>
                <Col md={{ span: 6 }}>
                    <img style={{ width: '100%' }} src={matchDetails?.boardGame.gameImg} alt={matchDetails?.boardGame.name} />
                </Col>
                {/* TENDREMOS QUE METER EL GOOGLE MAPS */}
                {/* FALTAN BOTONES DE JOIN, EDIT Y DELETE */}
            </Row>
        </Container>

    )
}
export default MatchDetailsPage