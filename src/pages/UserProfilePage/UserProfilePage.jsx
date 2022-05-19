import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import { Container, Nav, Modal, Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from "react"
import boardgameService from "../../services/boardgame.service"
import CreateBoardgameForm from "../../components/CreateBoardgameForm/CreateBoardgameForm"
import MyMatchesCard from "../../components/MyMatchesCard/MyMatchesCard"
import matchesService from "../../services/match.service"
import BoardgameProfileCard from "../../components/BoardgameProfileCard/BoardgameProfileCard"
import "./UserProfilePage.css"
import { MessageContext } from './../../context/message.context'
import RentedProfileCard from "../../components/RentedProfileCard/RentedProfileCard"

const UserProfilePage = () => {

    const { user } = useContext(AuthContext)

    const [myMatches, setMyMatches] = useState()
    const [myGames, setMygames] = useState([])
    const [rentedGames, setRentedGames] = useState([])



    const [showCreateBGModal, setShowCreateBGModal] = useState(false)
    const handleCreateBGModalClose = () => setShowCreateBGModal(false)
    const handleCreateBGModalOpen = () => setShowCreateBGModal(true)

    const { showMessage } = useContext(MessageContext)

    const fireFinalActions = () => {
        handleCreateBGModalClose()
        showMessage('COMPLETE', 'NEW BOARDGAME CREATED')
    }

    useEffect(() => {
        if (user) {
            getMymatches()
            getMyGames()
            getRentedGames()
        }
    }, [user])

    const getMymatches = () => {
        matchesService
            .myMatches()
            .then(({ data }) => {
                setMyMatches(data)
            })
            .catch(err => console.log(err))
    }

    const getMyGames = () => {
        boardgameService
            .getOwnBoardgames()
            .then(({ data }) => {
                setMygames(data)
            })
            .catch(err => console.log(err))
    }

    const getRentedGames = () => {
        boardgameService
            .ownRentedGames()
            .then(({ data }) => {
                setRentedGames(data)
            })
            .catch(err => console.log(err))
    }

    return (
        user ?
            <>
                <Container>

                    <h1>Bienvenidx <strong>{user.username}</strong></h1>
                    <p>Email: <strong> {user.email}</strong></p>
                    <p>Description: <strong> {user.description}</strong></p>
                    <img className="ImgAvatar" src={user.avatar} alt="" />

                    <div>
                        <h4>MY GAMES TO RENT</h4>
                        <NavLink to='#' >
                            <Nav.Link className='elm' onClick={handleCreateBGModalOpen}> <Button variant="dark" type="submit">Create Boardgame to rent</Button></Nav.Link>
                        </NavLink>
                    </div>



                    <div>
                        <BoardgameProfileCard myGames={myGames} />
                    </div>

                    <div>
                        <RentedProfileCard rentedGames={rentedGames} />
                    </div>


                    <div>
                        <h4>MY MATCHES</h4>
                        <MyMatchesCard myMatches={myMatches} />
                    </div>

                </Container>

                <Modal className="ModalCreate" show={showCreateBGModal} onHide={handleCreateBGModalClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title className="CreateRent">Create Boardgame to rent</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CreateBoardgameForm fireFinalActions={fireFinalActions} />
                    </Modal.Body>
                </Modal>
            </>
            :
            <span className="loader"></span>
    )
}

export default UserProfilePage