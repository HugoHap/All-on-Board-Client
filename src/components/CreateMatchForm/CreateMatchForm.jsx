import { useState } from "react"
import { Form, Modal, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import BoardGameService from "../../services/boardgame.service"

const CreateMatchForm = () => {

    const [createMatchData, setCreateMatchData] = useState({
        description: '',
        startTime: '',
        boardGame: '', //COMO LE PASO EL JUEGO?
        location: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setCreateMatchData({ ...createMatchData, [name]: value })
    }

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        BoardGameService
            .createMatch(createMatchData)
            .then(() => navigate('/matches'))
            .catch(err => console.log(err))
    }

    const { description, startTime, boardGame, location } = createMatchData

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" onChange={handleInputChange} name="description" value={description} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="startTime">
                <Form.Label>Start time</Form.Label>
                <Form.Control type="text" onChange={handleInputChange} name="startTime" value={startTime} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="boardGame">
                <Form.Label>Boardgame</Form.Label>
                <Form.Control type="text" onChange={handleInputChange} name="boardGame" value={boardGame} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="location">
                <Form.Label>location</Form.Label>
                <Form.Control type="text" onChange={handleInputChange} name="location" value={location} />
            </Form.Group>

            <Modal.Footer>
                <Button variant="dark" type="submit">Create match</Button>
            </Modal.Footer>
        </Form>
    )
}

export default CreateMatchForm
