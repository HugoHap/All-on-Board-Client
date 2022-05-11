import { Container, Row, Col, Button } from 'react-bootstrap'
import { useEffect, useState } from "react"
import matchesService from './../../services/match.service'
import { useParams } from 'react-router-dom'

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
            <p>Organizer: {matchDetails?.organizer?.username}</p>
            <p>Description: {matchDetails?.description}</p>
            <p>Starting Time: {matchDetails?.startTime}</p>
            <p>Boardgame: {matchDetails?.boardGame.name}</p>
            <p>Age: {matchDetails?.boardGame.age}</p>
            <p>Players: {matchDetails?.boardGame.players.min}-{matchDetails?.boardGame.players.max}</p>
            <img src={matchDetails?.boardGame.gameImg} />
            {/* TENDREMOS QUE METER EL GOOGLE MAPS */}
            {/* FALTAN BOTONES DE JOIN, EDIT Y DELETE */}
        </Container>

    )
}
export default MatchDetailsPage