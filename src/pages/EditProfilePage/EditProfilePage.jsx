import { Container, Row, Col } from "react-bootstrap";
import EditProfileForm from "../../components/EditProfileForm/EditProfileForm.jsx";

const EditProfilePage = () => {

//TENGO QUE ACCEDER DE ALGUNA FORMA AL USUARIO AQUÍ

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <EditProfileForm />
                </Col>
            </Row>
        </Container>
    )
}

export default EditProfilePage