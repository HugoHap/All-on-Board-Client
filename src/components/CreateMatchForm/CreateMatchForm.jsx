import { useState, useEffect } from "react"
import { Form, Modal, Button } from "react-bootstrap"
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
            .then(response => {
                fireFinalActions()
            })
            .catch(err => console.log(err))
    }

    const { description, startTime, boardGame, location } = createMatchData

    console.log(boardgamesData[0]?._id)
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
                <Form.Label>Boardgame
                    <select name="boardGame" value={boardGame} onChange={handleInputChange}>
                        {
                            boardgamesData?.map(game => {
                                return (
                                    <option value={game?._id}>{game?.name}</option>
                                )

                            })
                        }
                    </select>
                </Form.Label>
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
