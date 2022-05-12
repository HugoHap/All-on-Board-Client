import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import boardgameService from '../../services/boardgame.service'
import RentCard from '../../components/RentCard/RentCard'

const BoardgamesDetailsPage = () => {

    const [boardgameDetails, setBoardgameDetails] = useState({})
    const [rentBoardgames, setRentBoardgames] = useState([])


    const { id } = useParams()

    useEffect(() => {

        getRent()
        getDetails()

    }, [])

    const getDetails = () => {

        boardgameService
            .getBoardgame(id)
            .then(({ data }) => {
                setBoardgameDetails(data)
            })
            .catch(err => console.log(err))
    }

    const getRent = () => {

        boardgameService
            .getRentBoardgames(id)
            .then(({ data }) => {
                console.log("data getrent", data)
                setRentBoardgames(data)
            })
            .catch(err => console.log(err))
    }
    console.log("estado rent", rentBoardgames);
    return (

        <Container>
            <h1>{boardgameDetails.name}</h1>
            <hr />
            <Row>
                <Col md={{ span: 4, offset: 1 }}>
                    <h3>Description</h3>
                    <p>{boardgameDetails.description}</p>
                    <h3>Details</h3>
                    <p>Duration: {boardgameDetails.playingTime}</p>
                    <p>Players: {boardgameDetails?.players?.min}-{boardgameDetails?.players?.max} </p>
                    <p>Age: {boardgameDetails.age}</p>
                </Col>
                <Col md={{ span: 6 }}>
                    <img style={{ width: '100%' }} src={boardgameDetails.gameImg} alt={boardgameDetails.name} />
                </Col>
                <Link to="/boardgames">
                    <Button variant="dark">Volver</Button>
                </Link>
                <Link to={`/boardgames/${boardgameDetails._id}/edit`}>
                    <Button variant="success">Edit</Button>
                </Link>
                <Link to={`/boardgames/${boardgameDetails._id}/delete`}>
                    <Button variant="danger">Delete Game</Button>
                </Link>
            </Row>
            <Row>
                <RentCard rentBoardgames={rentBoardgames} />
            </Row>

        </Container>
    )
}

export default BoardgamesDetailsPage