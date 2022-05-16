import { Container, Row, Col } from "react-bootstrap";
import CreateBoardgameForm from "../../components/CreateBoardgameForm/CreateBoardgameForm.jsx"
import { MessageContext } from './../../context/message.context'
import { useState, useContext  } from "react"

const CreateBoardgamePage = () => {

    const { showMessage } = useContext(MessageContext)

    const [showModal, setShowModal] = useState(false)

    const closeModal = () => setShowModal(false)

    const fireFinalActions = () => {
        showMessage('COMPLETE', 'NEW BOARDGAME CREATED')
        closeModal()
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <CreateBoardgameForm fireFinalActions={fireFinalActions} />
                </Col>
            </Row>
        </Container>
    )
}

export default CreateBoardgamePage