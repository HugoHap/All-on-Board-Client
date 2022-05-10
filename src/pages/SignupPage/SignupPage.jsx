import { Container, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SignupForm from '../../components/SignupForm/SignupForm'

const SignupPage = () => {

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <SignupForm />
                </Col>
            </Row>
        </Container>
    )
}

export default SignupPage