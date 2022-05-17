import { Card, Row, Container, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./BoardgameProfileCard.css"

const BoardgameProfileCard = ({ myGames }) => {

    return (
        <Container>
            <Row>

                <>
                    {
                        myGames?.map((elm) => {
                            return <div key={elm._id}>
                                <Col md={{ span: 4 }}>
                                    <Card>
                                        <Link to={`/boardgames/${elm._id}`}>
                                            <Card.Body>
                                                <Card.Title>{elm.name}</Card.Title>
                                                <p>{elm.description} </p>
                                            </Card.Body>
                                            <div>
                                                <img className='rentcardimg' src={elm.gameImg}></img>
                                            </div>
                                        </Link>
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

export default BoardgameProfileCard