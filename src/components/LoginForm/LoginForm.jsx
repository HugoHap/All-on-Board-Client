import { useContext, useState } from "react"
import { Form, Button, Modal } from "react-bootstrap"
import authService from "../../services/auth.service"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './../../context/auth.context'

const Loginform = () => {

    const [loginData, setLoginData] = useState({
        password: '',
        email: ''
    })

    const navigate = useNavigate()

    const { storeToken, authenticateUser } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setLoginData({ ...loginData, [name]: value })
    }

    const { password, email } = loginData

    return (

        <Form onSubmit={handleSubmit}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>LOGIN</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={handleInputChange} name="email" value={email} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={handleInputChange} name="password" value={password} />
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" type="submit">Login</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Form>
    )
}

export default Loginform