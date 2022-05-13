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

const UserProfilePage = () => {

    const { user } = useContext(AuthContext)

    const [myMatches, setMyMatches] = useState()
    const [myGames, setMygames] = useState([])


    const [showCreateBGModal, setShowCreateBGModal] = useState(false)
    const handleCreateBGModalClose = () => setShowCreateBGModal(false)
    const handleCreateBGModalOpen = () => setShowCreateBGModal(true)

    useEffect(() => {
        if (user) {
            getMymatches()
            getMyGames()
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

    return (
        user ?
        <>
            <Container>

                <h1>Bienvenidx <strong>{user.username}</strong></h1>
                <p>Email:</p><p>{user.email}</p>
                <img src={user.avatar} alt="" />
                <div>
                    <Link to={`/edit`}>
                        <Button variant="dark" type="">Edit profile</Button>
                    </Link>
                </div>
                <div>
                    <h4>TUS JUEGOS A PRESTAR</h4>
                    <NavLink to='#' >
                        <Nav.Link className='elm' as="span" onClick={handleCreateBGModalOpen}> <Button variant="dark" type="submit">Create Boardgame to rent</Button></Nav.Link>
                    </NavLink>
                </div>
               
                

                <div>
                    <BoardgameProfileCard myGames={myGames} />
                </div>
                

                <div>
                    <MyMatchesCard myMatches={myMatches} />
                </div>

            </Container>

            <Modal show={showCreateBGModal} onHide={handleCreateBGModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Create Boardgame to rent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateBoardgameForm closeModal={handleCreateBGModalClose} />
                </Modal.Body>
                </Modal>
            </>
            :
            <span className="loader"></span>
    )
}

export default UserProfilePage