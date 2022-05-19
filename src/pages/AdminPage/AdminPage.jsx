import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import { Container, Nav, Modal, Button, Row } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from "react"
import "./AdminPage.css"
import userService from "../../services/user.service"
import UserList from "../../components/UserList/UserList"
import AdminBoardgameForm from "../../components/AdminBoardgameForm/AdminBoardgameForm"
import AdminEventForm from "../../components/AdminEventForm/AdminEventForm"


const AdminPage = () => {

    const { user } = useContext(AuthContext)

    const [allUser, setAllUsers] = useState([])

    const [showAdminBoardgameModal, setShowAdminBoardgameModal] = useState(false)
    const handleAdminBoardgameModalClose = () => setShowAdminBoardgameModal(false)
    const handleAdminBoardgameModalOpen = () => setShowAdminBoardgameModal(true)

    const [showAdminEventModal, setShowAdminEventModal] = useState(false)
    const handleAdminEventModalClose = () => setShowAdminEventModal(false)
    const handleAdminEventModalOpen = () => setShowAdminEventModal(true)


    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = () => {
        userService
            .getUsers()
            .then(({ data }) => setAllUsers(data))
            .catch(err => console.log(err))
    }

    const fireFinalActions = () => {
        handleAdminBoardgameModalClose()
        handleAdminEventModalClose()
    }

    return (
        <Container>
            <Row>
                <UserList allUser={allUser} />
                <NavLink to='#' >
                    <Nav.Link className='elm' as="span" onClick={handleAdminBoardgameModalOpen}><Button variant="dark" type="">Create new Boardgame</Button></Nav.Link>
                </NavLink>
                <Modal show={showAdminBoardgameModal} onHide={handleAdminBoardgameModalClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Create new Boardgame</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <AdminBoardgameForm fireFinalActions={fireFinalActions} />
                    </Modal.Body>
                </Modal>

                <NavLink to='#' >
                    <Nav.Link className='elm' as="span" onClick={handleAdminEventModalOpen}><Button variant="dark" type="">Create new Event / Match</Button></Nav.Link>
                </NavLink>
                <Modal show={showAdminEventModal} onHide={handleAdminEventModalClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Create new Event / Match</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <AdminEventForm fireFinalActions={fireFinalActions} />
                    </Modal.Body>
                </Modal>
            </Row>
        </Container>
    )
}

export default AdminPage