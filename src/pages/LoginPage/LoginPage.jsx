import { Container, Button, Row, Col } from 'react-bootstrap'
import Loginform from '../../components/LoginForm/LoginForm'

const LoginPage = () => {

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Loginform />
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage