import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import { Container, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useEffect } from "react"
import userService from "../../services/user.service"

const UserProfilePage = () => {

    const { user } = useContext(AuthContext)
    // const [isLoaded, setIsLoaded] = useState(false)

    // const [myBoardGames, setMyBoardGames] = useState([])

    useEffect(() => {
        if (user) {
            getUserProfile()
            // getMyBoardgames()
        }
    }, [user])

    const getUserProfile = () => {

        userService
            .getUserProfile()
            .then(({ data }) => {
                getUserProfile(data)
            })
            .catch(err => console.log(err))
    }

    // const getMyBoardgames = () => {
    //     userService
    //         .getAllBoardGamesOneUser() //INVESTIGAR ESTO 
    //         .then(({ data }) => {
    //             setMyBoardGames(data)
    //         })
    //         .catch(err => console.log(err))
    // }

    return (

        <Container>

            <h1>Bienvenidx <strong>{user.username}</strong></h1>
            <p>Email:</p><p><strong>{user.email}</strong></p>
            <img src={user.avatar} alt="" />
            <div>
                <Link to={`/edit`}>
                    <Button variant="dark" type="">Edit profile</Button>
                </Link>
            </div>
            <hr></hr>
            <div>
                <h4>TUS JUEGOS A PRESTAR</h4>
                <Link to={`/boardgames/create`}>
                    <Button variant="dark" type="">Create Boardgame to rent</Button>
                </Link>
            </div>
        </Container>
    )
}

export default UserProfilePage