import { Card, Row, Container, Col } from 'react-bootstrap'

const RentedProfileCard = ({ rentedGames }) => {

    return (
        <Container>
            <h3>RENTED GAMES</h3>
            <Row>
                <>
                    {
                        rentedGames?.map((elm) => {
                            return <div key={elm._id}>
                                <Col md={{ span: 6 }}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{elm.boardGame.name}</Card.Title>
                                            <p>Booked Date: {elm.startDate.slice(0, 10)} to {elm.endDate.slice(0, 10)} </p>
                                            <p>Contact Phone: {elm.boardGame.owner?.phone}</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </div>
                        })
                    }
                </>
            </Row>
        </Container>
    )
}

export default RentedProfileCard