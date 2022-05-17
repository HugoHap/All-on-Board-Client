import { useState, useEffect } from "react"
import { Form, Modal, Button, Container, Col, Row } from "react-bootstrap"
import boardgameService from "../../services/boardgame.service"
// import { useNavigate } from 'react-router-dom'
import matchesService from "../../services/match.service"

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
                </Row>
            </Container>

            <Modal.Footer>
                <Button variant="dark" className="form-button" type="submit" >Create match</Button>
            </Modal.Footer>
        </Form>
    )
}

export default CreateMatchForm
