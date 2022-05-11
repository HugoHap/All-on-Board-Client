import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const IndexPage = () => {

    return (
        <Container>
            <h1>WELCOME ON BOARD</h1>
            <hr />
            <Link to="/boardgames">
                <Button variant="dark" size='lg'>BOARD GAMES</Button>
            </Link>
        </Container>
    )
}

export default IndexPage