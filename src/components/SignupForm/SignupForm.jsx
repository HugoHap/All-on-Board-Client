import { useState } from "react"
import { Form, Modal, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import authService from "../../services/auth.service"

const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        email: '',
        username: '',
        password: '',
        avatar: ''
    })

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(res => navigate('/signup'))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setSignupData({ ...signupData, [name]: value })
    }

    const { email, username, password, avatar } = signupData

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
                <Form.Control type="avatar" onChange={handleInputChange} name="avatar" value={avatar} />
            </Form.Group>

            </Modal.Body>

            <Modal.Footer>
            <Button variant="dark" type="submit">Sign Up</Button>
            </Modal.Footer>
            </Modal.Dialog>
        </Form>
    )
}

export default SignupForm

