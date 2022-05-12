import { useState } from "react"
import { Form, Modal, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import BoardGameService from "../../services/boardgame.service"
import uploadService from "../../services/upload.service"

const CreateBoardgameForm = () => {

    const [createBoargameData, setcreateBoargameData] = useState({
        name: '',
        description: '',
        playingTime: '',
        age: '',
        gameImg: '',
        players: ''
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setcreateBoargameData({ ...createBoargameData, [name]: value })
    }

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        BoardGameService
            .createBoardgame(createBoargameData)
            .then(() => navigate('/profile'))
            .catch(err => console.log(err))
    }


    // PARA CLOUDINARY
    const handleImageUpload = (e) => {

        setLoadingImage(true)

        const uploadImg = new FormData()
        uploadImg.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadImg)
            .then(({ data }) => {
                setLoadingImage(false)
                setcreateBoargameData({ ...createBoargameData, gameImg: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }


    const { name, description, playingTime, age, gameImg, players } = createBoargameData

    return (

        <Form onSubmit={handleSubmit}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>CREATE BOARDGAME</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" onChange={handleInputChange} name="name" value={name} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" onChange={handleInputChange} name="description" value={description} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="playingTime">
                        <Form.Label>Playing Time</Form.Label>
                        <Form.Control type="text" onChange={handleInputChange} name="playingTime" value={playingTime} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" onChange={handleInputChange} name="age" value={age} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="players.min">
                        <Form.Label>Min. Players</Form.Label>
                        <Form.Control type="text" onChange={handleInputChange} name="min" value={players.min} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="players.max">
                        <Form.Label>Max. Players</Form.Label>
                        <Form.Control type="text" onChange={handleInputChange} name="max" value={players.max} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="gameImg">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" onChange={handleImageUpload} />
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'Create Boardgame'}</Button>
                </Modal.Footer>

            </Modal.Dialog>
        </Form>
    )
}

export default CreateBoardgameForm

