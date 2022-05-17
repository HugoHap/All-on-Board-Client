import { useState, useEffect } from "react"
import { Form, Modal, Button, Container, Col, Row } from "react-bootstrap"
import boardgameService from "../../services/boardgame.service"
// import { useNavigate } from 'react-router-dom'
import matchesService from "../../services/match.service"

import {
    GoogleMap,
    Marker,
    withGoogleMap,
    withScriptjs,
} from "react-google-maps"

const MyMapComponent = withScriptjs(
    withGoogleMap((props) => (
        <GoogleMap defaultZoom={11} defaultCenter={{ lat: 40.415600407004575, lng: -3.6813260603979545 }}>
            {props.isMarkerShown && (
                <Marker position={{ lat: 40.39002570698726, lng: -3.695228954972823 }} />
            )}
        </GoogleMap>
    ))
)

const CreateMatchForm = ({ fireFinalActions }) => {

    const [createMatchData, setCreateMatchData] = useState({
        description: '',
        startTime: '',
        boardGame: undefined,
        location: ''
    })

    const [boardgamesData, setBoardgamesData] = useState([])

    useEffect(() => {
        boardgameService
            .getOriginalBoardgames()
            .then(({ data }) => {
                setBoardgamesData(data)
            })
    }, [])

    const handleInputChange = e => {
        const { name, value } = e.currentTarget

        setCreateMatchData({
            ...createMatchData,
            [name]: value
        })
    }

    // const navigate = useNavigate()

    const handleSubmit = e => {

        e.preventDefault()

        matchesService
            .createMatch(createMatchData)
            .then(() => {
                fireFinalActions()
            })
            .catch(err => console.log(err))
    }

    const { description, startTime, boardGame, location } = createMatchData
    const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>

    return (

        <Form onSubmit={handleSubmit}>
            <Container>
                <Row>
                    <Form.Group className="mb-3" controlId="boardGame">
                        <Form.Label>Boardgame{tab}
                            <select name="boardGame" value={boardGame} onChange={handleInputChange}>
                                {
                                    boardgamesData[0]?.map(game => {
                                        return (
                                            <option value={game?._id}>{game?.name}</option>
                                        )

                                    })
                                }
                            </select>
                        </Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" onChange={handleInputChange} name="description" value={description} />
                    </Form.Group>
                    <Col>
                        <Form.Group className="mb-3" controlId="startTime">
                            <Form.Label>Start time</Form.Label>
                            <Form.Control type="text" onChange={handleInputChange} name="startTime" value={startTime} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="location">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" onChange={handleInputChange} name="location" value={location} />
                        </Form.Group>
                    </Col>
                    <MyMapComponent
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTfrEJjFOyJQ3p3WbSYP0yNoasqELJNFY&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />

                </Row>
            </Container>

            <Modal.Footer>
                <Button variant="dark" className="form-button" type="submit" >Create match</Button>
            </Modal.Footer>
        </Form>
    )
}

export default CreateMatchForm
