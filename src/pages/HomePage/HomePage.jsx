import { Container, Button, Card, Carousel, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import boardgameService from '../../services/boardgame.service';
import BoardgameCard from '../../components/BoardgameCard/BoardgameCard';
import background from "../../img/FONDITO.png";
import './HomePage.css'

const IndexPage = () => {

    const [rankGames, setRankGames] = useState([])

    useEffect(() => {
        boardgameService
            .getOriginalBoardgames()
            .then(({ data }) => {
                setRankGames(data)
            })
            .catch(err => console.log(err))
    }, [])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className='BackgroundHome' style={{
            backgroundImage: `url(${background})`
        }}>
            <Container className="ContainerHome">

                <div className='WelcomeHome' >
                </div>
                <Carousel>
                    <Carousel.Item>
                        <Row>
                            {
                                rankGames[1]?.slice(0, 4).map(elm => {

                                    return (<Col md={3}>
                                        <Card className="BoardgameCard">
                                            <Card.Img className="BoardgameImageCarrusel" variant="top" src={elm.gameImg} />
                                            <Card.Body>
                                                <Card.Title className="BoardgameTitle" >{elm.name}</Card.Title>
                                                <div className="d-grid gap-2">
                                                    <Link to={`/boardgames/${elm._id}`} className="btn btnCarrousel">Details</Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    )
                                })
                            }
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {
                                rankGames[1]?.slice(4, 8).map(elm => {

                                    return (<Col md={3}>
                                        <Card className="BoardgameCard">
                                            <Card.Img className="BoardgameImageCarrusel" variant="top" src={elm.gameImg} />
                                            <Card.Body>
                                                <Card.Title className="BoardgameTitle">{elm.name}</Card.Title>
                                                <div className="d-grid gap-2">
                                                    <Link to={`/boardgames/${elm._id}`} className="btn btnCarrousel">Details</Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    )
                                })
                            }
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}

export default IndexPage