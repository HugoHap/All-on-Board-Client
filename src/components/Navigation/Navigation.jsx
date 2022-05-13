import './Navigation.css'
import { Navbar, Container, Nav, Modal, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/auth.context'
import LoginForm from '../LoginForm/LoginForm'
import SignupForm from '../SignupForm/SignupForm'


const Navigation = () => {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

    const [showLoginModal, setShowLoginModal] = useState(false)
    const handleLoginModalClose = () => setShowLoginModal(false)
    const handleLoginModalOpen = () => setShowLoginModal(true)

    const [showSignupModal, setShowSignupModal] = useState(false)
    const handleSignupModalClose = () => setShowSignupModal(false)
    const handleSignupModalOpen = () => setShowSignupModal(true)

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/" className="nav-link">
                            ALL ON BOARD
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <NavLink to="/signup" className="nav-link">Signup</NavLink>
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                        <NavLink to="/profile" className="nav-link">Profile</NavLink> */}
                            <NavLink to="/boardgames" className="nav-link">Boardgames</NavLink>
                            <NavLink to="/match" className="nav-link">Matches</NavLink>
                            <Nav>
                                {
                                    !isLoggedIn ?
                                        <>
                                            <NavLink to='#'>
                                                <Nav.Link className='elm' as="span" onClick={handleSignupModalOpen}>Signup</Nav.Link>
                                            </NavLink>
                                            <NavLink to='#'>
                                                <Nav.Link className='elm' as="span" onClick={handleLoginModalOpen}>Login</Nav.Link>
                                            </NavLink>
                                        </>
                                        :
                                        <>
                                            <NavLink to={`/profile`}>
                                                <Nav.Link as="span">Profile</Nav.Link>
                                            </NavLink>
                                            <NavLink to={`/`}>
                                                <div className="nav-link" onClick={logOutUser}>Cerrar sesión</div>
                                            </NavLink>
                                        </>
                                }
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={showSignupModal} onHide={handleSignupModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Signup</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignupForm closeModal={handleSignupModalClose} />
                </Modal.Body>
            </Modal>

            <Modal show={showLoginModal} onHide={handleLoginModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm closeModal={handleLoginModalClose} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Navigation