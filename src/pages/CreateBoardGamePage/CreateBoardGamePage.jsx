import { Container, Row, Col } from "react-bootstrap";
import CreateBoardgameForm from "../../components/CreateBoardgameForm/CreateBoardgameForm.jsx";

const CreateBoardgamePage = () => {

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <CreateBoardgameForm />
                </Col>
            </Row>
        </Container>
    )
}

export default CreateBoardgamePage