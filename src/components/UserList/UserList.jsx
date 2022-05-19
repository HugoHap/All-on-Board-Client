import { useContext } from "react"
import { Card, Button, Container, Row, Col } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import userService from "../../services/user.service"
import './UserList.css'


const UserList = ({ allUser }) => {

    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    const deleteUserProfile = (id) => {

        userService
            .deleteUser(id)
            .then(() => {

            })
            .catch(err => console.log(err))
    }

    return (

        <Container className="AdminUsersList">
            <h2 className="AdminUsersTitle">Users</h2>
            <hr />
            <Row>
                {allUser.map(user => {
                    return (
                        <>
                            <div key={user._id}>
                                <li>{user.username}</li>
                                <Button className="btn btn-outline-danger" variant="light" onClick={() => deleteUserProfile(user._id)}> Delete User</Button>
                            </div>
                        </>
                    )
                })}
            </Row>
        </Container>
    )
}

export default UserList