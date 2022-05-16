import { Container, Button, Row, Col } from 'react-bootstrap'
import Loginform from '../../components/LoginForm/LoginForm'
import { MessageContext } from './../../context/message.context'
import { useState, useContext } from "react"

const LoginPage = () => {

    const [showModal, setShowModal] = useState(false)

    const closeModal = () => setShowModal(false)

    const { showMessage } = useContext(MessageContext)

    const handleModalClose = () => setShowModal(false)

    const fireFinalActions = () => {
        handleModalClose()
        // showMessage('LOGED IN', 'START THE MAGIC')
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Loginform fireFinalActions={fireFinalActions} />
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage