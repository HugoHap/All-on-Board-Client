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


    useEffect(() => {
        loadUsers()
    }, [])




    const loadUsers = () => {
        userService
            .getUsers()
            .then(({ data }) => setAllUsers(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row>
                <UserList allUser={allUser} />
                <AdminBoardgameForm />
                <AdminEventForm />
            </Row>
        </Container>
    )
}

export default AdminPage