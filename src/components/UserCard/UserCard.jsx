import { useContext } from "react"
import { Card, Button, Container, Row, Col } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import userService from "../../services/user.service"
import './UserCard.css'


const UserCard = ({ _id, username, email, avatar }) => {

    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    const deleteUserProfile = () => {

        userService
            .deleteUser(_id)
            .then(()=>{

            })
            .catch(err => console.log(err))
    }

    return(

        <Container>
            <h2>Users</h2>
            <hr />
            <Row>
                {allUser.map(user => {
                    return <li key={user._id}>{user.username}</li>
                })}
            </Row>
        </Container>
    )
}