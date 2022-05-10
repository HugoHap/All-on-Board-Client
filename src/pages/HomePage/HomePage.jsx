import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const IndexPage = () => {

    return (
        <Container>
            <h1>WELCOME HELL</h1>
            <hr />
            <Link to="/galeria">
                <Button variant="dark" size='lg'>Ir a la galería</Button>
            </Link>
        </Container>
    )
}

export default IndexPage