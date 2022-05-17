import { useEffect, useState } from "react"
import { Container, Nav, Modal, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
// import { AuthContext } from "../../context/auth.context"
import matchesService from './../../services/match.service'
import MatchesList from "../../components/MatchesList/MatchesList"
import CreateMatchForm from "../../components/CreateMatchForm/CreateMatchForm"

const MatchListPage = () => {

    const [matches, setMatches] = useState([])

    const [showCreateMatchModal, setShowCreateMatchModal] = useState(false)
    const handleCreateMatchModalClose = () => setShowCreateMatchModal(false)
    const handleCreateMatchModalOpen = () => setShowCreateMatchModal(true)

    useEffect(() => {
        matchesService
            .getAllMatches()
            .then(({ data }) => {
                console.log(data)
                setMatches(data)

            })
            .catch(err => console.log(err))
    }, [])

    const loadMatches = () => {
        matchesService
            .getAllMatches()
            .then(({ data }) => setMatches(data))
            .catch(err => console.log(err))
    }

    const fireFinalActions = () => {
        loadMatches()
        handleCreateMatchModalClose()
    }

    // const { isLoggedIn } = useContext(AuthContext)


    return (
        <>
            <Container>
                <h1>Matches list</h1>
                <hr></hr>
                <NavLink to='#' >
                    <Nav.Link className='elm' as="span" onClick={handleCreateMatchModalOpen}><Button variant="dark" type="">Create new match</Button></Nav.Link>
                </NavLink>
                <MatchesList matches={matches} />
            </Container>
            <hr />
            <Modal show={showCreateMatchModal} onHide={handleCreateMatchModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Create new match</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <CreateMatchForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>
        </>
    )

}
export default MatchListPage
