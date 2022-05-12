import { Container, Button } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import matchesService from './../../services/match.service'
import { AuthContext } from "../../context/auth.context"
import MatchesList from "../../components/MatchesList/MatchesList"
import { Link } from "react-router-dom"

const MatchListPage = () => {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        matchesService
            .getAllMatches()
            .then(({ data }) =>{
                console.log(data)
                setMatches(data)
                
            } )
            .catch(err => console.log(err))
    }, [])

    // const loadMatches = () => {
    //     matchesService
    //         .getAllMatches()
    //         .then(({ data }) => setMatches(data))
    //         .catch(err => console.log(err))
    // }

    // const fireFinalActions = () => {
    //     loadMatches()
    // }

    const { isLoggedIn } = useContext(AuthContext)

    return (
        <>
            <Container>
                <h1>Matches list</h1>
                <Link to="/match">
                    <Button variant="dark">Back to Matches</Button>
                </Link>
                <hr />
                <MatchesList matches={matches} />
            </Container>
        </>
    )

}
export default MatchListPage