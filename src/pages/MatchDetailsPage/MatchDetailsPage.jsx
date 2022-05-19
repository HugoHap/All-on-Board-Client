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
import "./MatchDetailsPage.css"


const MatchDetailsPage = () => {

    const [matchDetails, setMatchDetails] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const { id } = useParams()

    const deleteMatch = (id) => {

        matchesService
            .deleteMatch(id)
            .then(() => {

            })
            .catch(err => console.log(err))

    }

    useEffect(() => {

        matchesService
            .getOneMatch(id)
            .then(({ data }) => {
                setMatchDetails(data)
                setIsLoading(true)
            })
            .catch(err => console.log(err))

    }, [])

    const MyMapComponent = withScriptjs(
        withGoogleMap((props) => (
            <GoogleMap defaultZoom={12} defaultCenter={{ lat: 40.415600407004575, lng: -3.6813260603979545 }}>
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
            <Container className="matchDetails">
                <h1 className="matchDetailsTitle">
                    "{boardGame.name}" match
                </h1>
                <hr className="hrMatch"></hr>
                <div className="MatchCol">
                    <Row>
                        <Col md={{ span: 6 }}>
                            <div className="matchDetailsDescription">
                                <p>ORGANIZER: {organizer?.username}</p>
                                <p>DESCRIPTION: {description}</p>
                                <p>STARTING TIME: {startTime.slice(0, 10)}</p>
                                {/* <p>Boardgame: {boardGame.name}</p> */}
                                <p>AGE: {boardGame.age}</p>
                                <p>PLAYERS: {boardGame.players.min}-{boardGame.players.max}</p>
                            </div>
                        </Col>

                        <Col md={{ span: 6 }}>
                            <img style={{ width: '100%' }} src={boardGame.gameImg} alt={boardGame.name} />
                        </Col>
                        <Nav className="MatchesButtons">
                            {
                                !isLoggedIn ?
                                    <>
                                        <Link to="/match">
                                            <Button variant="dark" className="btnReturn" >Back to Matches</Button>
                                        </Link>

                                    </>
                                    :
                                    <>
                                        <Row>
                                            <Col md={{ span: 6 }} className="ButtonsJoin">
                                                <Button onClick={() => joinMatch(id)} variant="dark">Join Match</Button>
                                            </Col>

                                            <Col md={{ span: 5, offset: 1 }} className="ButtonsBack">
                                                <div className="btnBack">
                                                    <Link to="/match">
                                                        <Button variant="dark">Back to Matches</Button>
                                                    </Link>
                                                </div>

                                                <div className="ButtonsDelete">
                                                    <Link to={'/match'}>
                                                        <Button className="btn btn-outline-danger" variant="light" onClick={() => deleteMatch(id)}>Delete Match</Button>
                                                    </Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </>
                            }
                        </Nav>
                        <div>
                            <Container className='containerMatch'>
                                <Row>
                                    <>
                                        {
                                            players?.map((elm) => {
                                                return <Col md={{ span: 3 }} className='playersMatch' key={elm._id}>
                                                    <Card.Title>{elm.username} :) </Card.Title>
                                                </Col>
                                            })
                                        }
                                    </>
                                </Row>
                            </Container>
                        </div>
                    </Row >


                </div >

                <div className="mapMatch">
                    <MyMapComponent
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTfrEJjFOyJQ3p3WbSYP0yNoasqELJNFY&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            </Container >
        )
    }
}
export default MatchDetailsPage