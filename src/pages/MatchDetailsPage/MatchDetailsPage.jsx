import { Container, Col, Row, Button, Card, Nav } from 'react-bootstrap'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/auth.context'
import matchesService from './../../services/match.service'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
    GoogleMap,
    Marker,
    withGoogleMap,
    withScriptjs,
} from "react-google-maps";


const MatchDetailsPage = () => {
    
    const [matchDetails, setMatchDetails] = useState()
    const [isLoading, setIsLoading] = useState(false)
    
    const navigate = useNavigate()
    
    const { id } = useParams()
    
    useEffect(() => {
        
        matchesService
        .getOneMatch(id)
        .then(({ data }) => {
            console.log("mapaaaaaaaaa",data)
            setMatchDetails(data)
            setIsLoading(true)
        })
        .catch(err => console.log(err))
        
    }, [])
    
    const MyMapComponent = withScriptjs(
        withGoogleMap((props) => (
            <GoogleMap defaultZoom={11} defaultCenter={{ lat: 40.415600407004575, lng: -3.6813260603979545 }}>
                {props.isMarkerShown && (
                    <Marker position={{ lat: matchDetails.location.coordinates[0], lng: matchDetails.location.coordinates[1] }} />
                )}
            </GoogleMap>
        ))
    )

    const joinMatch = matchId => {

        matchesService
            .joinMatch(matchId)
            .then(({ data }) => {
                navigate('/profile')
            })
            .catch(err => console.log(err))

    }

    const { isLoggedIn } = useContext(AuthContext)

    if (isLoading) {
        const { organizer, description, startTime, boardGame, players } = matchDetails


        return (
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <p>Organizer: {organizer?.username}</p>
                        <p>Description: {description}</p>
                        <p>Starting Time: {startTime.slice(0, 10)}</p>
                        <p>Boardgame: {boardGame.name}</p>
                        <p>Age: {boardGame.age}</p>
                        <p>Players: {boardGame.players.min}-{boardGame.players.max}</p>
                        <Nav>
                            {
                                !isLoggedIn ?
                                    <>
                                        <Link to="/match">
                                            <Button variant="dark">Back to Matches</Button>
                                        </Link>

                                    </>
                                    :
                                    <>
                                        <Link to="/match">
                                            <Button variant="dark">Back to Matches</Button>
                                        </Link>

                                        <Link to={`/match/${id}/delete`}>
                                            <Button variant="danger">Delete Match</Button>
                                        </Link>

                                        <Button onClick={() => joinMatch(id)} variant="dark">Join Match</Button>
                                    </>
                            }
                        </Nav>
                        <div>

                            <>
                                {
                                    players?.map((elm) => {
                                        return <div key={elm._id}>
                                            <Card className='MyBoardGameCard'>
                                                <Card.Body>
                                                    <Card.Title>{elm.username}</Card.Title>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    })
                                }
                            </>
                        </div>
                    </Col>
                </Row>

                <Col md={{ span: 6 }}>
                    <img style={{ width: '100%' }} src={boardGame.gameImg} alt={boardGame.name} />
                </Col>

                <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTfrEJjFOyJQ3p3WbSYP0yNoasqELJNFY&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </Container>
        )
    }
}
export default MatchDetailsPage