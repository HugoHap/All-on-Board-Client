import { useContext, useState } from "react"
import { AuthContext } from "../../context/auth.context"
import { Container, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useEffect } from "react"
import userService from "../../services/user.service"

const UserProfilePage = () => {

    const { user } = useContext(AuthContext)

    const [userDetails, setUserDetails] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

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
                setIsLoaded(true)
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

            <hr></hr>
            <div>
                <h4>TUS JUEGOS A PRESTAR</h4>
                <Link to={`/boardgames/create`}>
                    <Button variant="dark" type="">Create Boardgame to rent</Button>
                </Link>

                {/* <Row>
                < ResultsBoardGames BoardGames={myBoardGames} width={3} />
            </Row> */}
            </div>
            {/* <h2>Aquí deberían ir tus rentings</h2>
            <Row>
                < ResultsHouses houses={subscriptions} width={4} />
            </Row> */}

            {/* <h2>Aquí deberían ir los pueblos a los que sigues</h2>
            <Row>
                {isLoaded && < MyFollowedVillages followedVillages={userDetails.followedVillages} />}
            </Row>

            <h2>Aquí deberían ir tus casas favoritas</h2>
            <Row>
                {isLoaded && < ResultsHouses houses={userDetails.favHouses} width={6} />}
            </Row> */}


        </Container>
    )
}

export default UserProfilePage