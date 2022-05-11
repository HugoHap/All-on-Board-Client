import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import boardgameService from '../../services/boardgame.service'

function BoardgamesDetailsPage() {

    const [boardgameDetails, setBoardgameDetails] = useState()

    const { id } = useParams()

    useEffect(() => {

        boardgameService
            .getBoardgame(id)
            .then(({ data }) => {
                console.log(data)
                setBoardgameDetails(data)
            })
            .catch(err => console.log(err))

    }, [])

    return (

        <Container>
            <h1>Details: {boardgameDetails.name}</h1>
            <hr />
            <Row>
                <Col md={{ span: 4, offset: 1 }}>
                    <h3>Description</h3>
                    <p>{boardgameDetails.description}</p>
                    <h3>Especificaciones</h3>
                    <p>Duration: {boardgameDetails.playingTime} metros</p>
                    <p>Age: {boardgameDetails.age}</p>
                </Col>
                <Col md={{ span: 6 }}>
                    <img style={{ width: '100%' }} src={boardgameDetails.imageUrl} alt={boardgameDetails.title} />
                </Col>
                <Link to="/boardgames">
                    <Button variant="dark">Volver</Button>
                </Link>
            </Row>

        </Container>
    )
}

export default BoardgamesDetailsPage