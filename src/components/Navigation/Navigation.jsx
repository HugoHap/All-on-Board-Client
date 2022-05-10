import './Navigation.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'

const Navigation = () => {

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)

    return (
             <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">ALL ON BOARD</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <NavLink to="/signup" className="nav-link">Signup</NavLink>
                      <NavLink to="/login" className="nav-link">Login</NavLink>
                        {/* <NavLink to="/galeria" className="nav-link">Galería</NavLink>
                        {
                            isLoggedIn
                                ?
                                <div className="nav-link" onClick={logOutUser}>Logout</div>
                                :
                                <>
                                    <NavLink to="/registro" className="nav-link">Signup</NavLink>
                                    <NavLink to="/inicio-sesion" className="nav-link">Login</NavLink>
                                </>
                        }

                        {
                            user && <NavLink to="/perfil" className="nav-link justify-content-end">Hola, {user.username}</NavLink>
                        } */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation