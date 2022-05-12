import { useState } from "react"
import { Form, Modal, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import authService from "../../services/auth.service"
import uploadService from "../../services/upload.service"

const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        email: '',
        username: '',
        password: '',
        avatar: ''
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setSignupData({ ...signupData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(res => navigate('/signup'))
            .catch(err => console.log(err))
    }

    // PARA CLOUDINARY
    const handleImageUpload = (e) => {

        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setSignupData({ ...signupData, avatar: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const { email, username, password } = signupData

    return (

        <Form onSubmit={handleSubmit}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>SIGN UP</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" onChange={handleInputChange} name="username" value={username} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={handleInputChange} name="email" value={email} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={handleInputChange} name="password" value={password} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="avatar">
                        <Form.Label>Avatar</Form.Label>
                        <Form.Control type="file" onChange={handleImageUpload} />
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'Signup'}</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Form >
    )
}

export default SignupForm

