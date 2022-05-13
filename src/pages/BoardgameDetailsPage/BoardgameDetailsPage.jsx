import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import boardgameService from '../../services/boardgame.service'
import RentCard from '../../components/RentCard/RentCard'
// import FavBtn from '../../components/FavBtn/FavBtn'
import LikeButton from '../../components/LikeButton/LikeButton'
import DislikeButton from '../../components/DislikeButton/DislikeButton'

const BoardgamesDetailsPage = () => {

    const [boardgameDetails, setBoardgameDetails] = useState([])

    const { id } = useParams()

    useEffect(() => {

        getDetails()

    }, [])

    const getDetails = () => {

        boardgameService
            .getBoardgame(id)
            .then(({ data }) => {
                console.log(data)
                setBoardgameDetails(data)
            })
            .catch(err => console.log(err))
    }

    //FAV BOARDGAME
    // const [isFav, setIsFav] = useState()
    // const [btnState, setBtnState] = useState('inicio')

    // //     const handleFavBtn = () => {
    //         if (!isFav) {
    //             boardgameService
    //                 .addFavBoardgame(id)
    //                 .then(() => {
    //                     setIsFav(true)
    //                     setBtnState('DELETE FAVOURITE')
    //                 })
    //                 .catch(err => console.log(err))
    //         } else if (isFav) {
    //             boardgameService
    //                 .deleteFavBoardgame(id)
    //                 .then(() => {
    //                     setIsFav(false)
    //                     setBtnState('ADD FAVOURITE')
    //                 })
    //                 .catch(err => console.log(err))
    //         }
    //     }

    //LIKE BOARDGAME
    const [isLike, setIsLike] = useState()
    const [btnState, setBtnState] = useState('LIKE')

    const handleLikeBtn = () => {

        boardgameService
            .isLike
            .then(() => {
                setIsLike(true)
                setBtnState('LIKE')
            })
    }

    //DISLIKE BOARDGAME
    const [isDisLike, setIsDisLike] = useState()
    const [disBtnState, setDisBtnState] = useState('DISLIKE')

    const handleDislikeBtn = () => {

        boardgameService
            .isDisLike
            .then(() => {
                setIsDisLike(true)
                setDisBtnState('LIKE')
            })
    }

    return (

        <Container>
            <h1>{boardgameDetails[0]?.name}</h1>
            <hr />
            <Row>
                <Col md={{ span: 4, offset: 1 }}>
                    <h3>Description</h3>
                    <p>{boardgameDetails[0]?.description}</p>
                    <h3>Details</h3>
                    <p>Duration: {boardgameDetails[0]?.playingTime}</p>
                    <p>Players: {boardgameDetails[0]?.players?.min}-{boardgameDetails[0]?.players?.max} </p>
                    <p>Age: {boardgameDetails[0]?.age}</p>
                </Col>
                <Col md={{ span: 6 }}>
                    <img style={{ width: '100%' }} src={boardgameDetails[0]?.gameImg} alt={boardgameDetails[0]?.name} />
                </Col>
                <Link to="/boardgames">
                    <Button variant="dark">Back to Boardgames List</Button>
                </Link>
                <Link to={`/boardgames/${id}/edit`}>
                    <Button variant="success">Edit</Button>
                </Link>
                <Link to={`/boardgames/${id}/delete`}>
                    <Button variant="danger">Delete Game</Button>
                </Link>

                <Link to={`/boardgames/${id}`}>
                    <LikeButton btnState={btnState} handleLikeBtn={handleLikeBtn} />
                    <DislikeButton btnState={btnState} handleDislikeBtn={handleDislikeBtn} />
                </Link>
            </Row>
            <Row>
                <RentCard boardgameDetails={boardgameDetails[1]} />
            </Row>

        </Container>
    )
}


export default BoardgamesDetailsPage